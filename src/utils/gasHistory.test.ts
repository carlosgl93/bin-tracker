// src/utils/gasHistory.test.ts
import { addDays, format, getDay, parseISO, startOfWeek } from 'date-fns';
import { describe, expect, it } from 'vitest';

import { GasControl, ProductionRecord } from '@/services/production/types';
import {
  DIAS_KEYS,
  getCurrentDayKey,
  getWeeklyGasHistory,
  hasPastDayWithoutData,
} from '@/utils/gasHistory';

// Builds a 6-entry gasControl matching production's real model: one slot per
// day of the week (lun=0 ... sab=5). When `gas` is provided, only the slot
// for `date`'s day-of-week is populated; other slots stay undefined (sparse
// array), matching production's "no data" state. When `gas` is null, the
// array is empty entirely.
function makeRecord(
  date: string,
  gas: { value: number; percentage: number } | null = null,
): ProductionRecord {
  const parsed = parseISO(date + 'T12:00:00');
  const weekStart = startOfWeek(parsed, { weekStartsOn: 1 });
  const slotDates = [...DIAS_KEYS].map((_, i) => format(addDays(weekStart, i), 'yyyy-MM-dd'));
  // dow: 0=Sun, 1=Mon, ... 6=Sat. DIAS_KEYS skips Sunday so map accordingly.
  const dow = getDay(parsed);
  const slotIdx = dow === 0 ? -1 : dow - 1;

  const gasControl: GasControl[] = gas
    ? slotDates.map((d, i) =>
        i === slotIdx
          ? { day: d, value: gas.value, percentage: gas.percentage }
          : ({ day: d } as GasControl),
      )
    : [];

  return {
    id: date,
    date,
    startTime: '09:00',
    endTime: '19:00',
    drumProductionByHour: [],
    gasControl,
    drumStock: { initial: 0, used: 0, total: 0 },
    bagStock: { initial: 0, used: 0, damaged: 0, total: 0 },
    binsStatus: [],
    binsMalfunction: 0,
    brix: { 1: 0, 2: 0, 3: 0 },
    totalDrumsWeight: 0,
    totalExistence: 0,
    totalProcessed: 0,
    totalFinal: 0,
  };
}

describe('getCurrentDayKey', () => {
  it('returns lunes for Monday', () => {
    expect(getCurrentDayKey('2026-06-01')).toBe('lunes');
  });
  it('returns viernes for Friday', () => {
    expect(getCurrentDayKey('2026-06-05')).toBe('viernes');
  });
  it('returns sabado for Saturday', () => {
    expect(getCurrentDayKey('2026-06-06')).toBe('sabado');
  });
  it('returns domingo for Sunday (not in form days)', () => {
    expect(getCurrentDayKey('2026-06-07')).toBe('domingo');
  });
});

describe('getWeeklyGasHistory', () => {
  it('returns no-data for all 6 days when records are empty', () => {
    const history = getWeeklyGasHistory('2026-06-03', []);
    [...DIAS_KEYS].forEach((key) => {
      expect(history[key].hasData).toBe(false);
    });
  });

  it('populates each day with the matching record gas value', () => {
    const records = [
      makeRecord('2026-06-01', { value: 100, percentage: 80 }), // Mon
      makeRecord('2026-06-02', { value: 90, percentage: 70 }), // Tue
      makeRecord('2026-06-03', { value: 80, percentage: 60 }), // Wed
    ];
    const history = getWeeklyGasHistory('2026-06-03', records);
    expect(history.lunes.hasData).toBe(true);
    expect(history.lunes.value).toBe(100);
    expect(history.lunes.percentage).toBe(80);
    expect(history.martes.value).toBe(90);
    expect(history.miercoles.value).toBe(80);
    expect(history.jueves.hasData).toBe(false);
  });

  it('marks record with empty gasControl as no-data', () => {
    const records = [makeRecord('2026-06-01', null)];
    const history = getWeeklyGasHistory('2026-06-03', records);
    expect(history.lunes.hasData).toBe(false);
  });

  it('includes sabado in the week', () => {
    const records = [makeRecord('2026-06-06', { value: 50, percentage: 30 })];
    const history = getWeeklyGasHistory('2026-06-03', records);
    expect(history.sabado.hasData).toBe(true);
    expect(history.sabado.value).toBe(50);
  });

  it('returns the correct date for each day slot', () => {
    const history = getWeeklyGasHistory('2026-06-03', []);
    expect(history.lunes.date).toBe('2026-06-01');
    expect(history.martes.date).toBe('2026-06-02');
    expect(history.miercoles.date).toBe('2026-06-03');
    expect(history.jueves.date).toBe('2026-06-04');
    expect(history.viernes.date).toBe('2026-06-05');
    expect(history.sabado.date).toBe('2026-06-06');
  });

  it('handles records from other weeks (does not pollute)', () => {
    const records = [
      makeRecord('2026-05-25', { value: 999, percentage: 99 }), // previous week
      makeRecord('2026-06-08', { value: 888, percentage: 88 }), // next week
    ];
    const history = getWeeklyGasHistory('2026-06-03', records);
    [...DIAS_KEYS].forEach((key) => {
      expect(history[key].hasData).toBe(false);
    });
  });

  // Regression tests for US-GH-3: real production model has gasControl as 6-entry array,
  // one slot per day of the week (lun-sab). The previous bug always read [0], which only
  // surfaced correct data for lunes.
  describe('with 6-entry gasControl model (one slot per day)', () => {
    const weekDates = [
      '2026-06-01',
      '2026-06-02',
      '2026-06-03',
      '2026-06-04',
      '2026-06-05',
      '2026-06-06',
    ];

    function makeRecord6Entry(date: string, slotValues: (number | null)[]): ProductionRecord {
      const base = makeRecord(date, null);
      // Build sparse 6-slot array: filled slots are real GasControl, empty
      // slots are left undefined (gasControl[idx] === undefined → falsy).
      const gasControl = [] as (GasControl | undefined)[];
      slotValues.forEach((v, i) => {
        if (v != null) {
          gasControl[i] = { day: weekDates[i], value: v, percentage: v * 5 };
        }
      });
      return {
        ...base,
        gasControl: gasControl as GasControl[],
      };
    }

    it('reads martes value from slot [1], not from lunes slot [0]', () => {
      const records = [
        makeRecord6Entry('2026-06-01', [100, null, null, null, null, null]), // Mon: only slot 0
        makeRecord6Entry('2026-06-02', [null, 90, null, null, null, null]), // Tue: only slot 1
      ];
      const history = getWeeklyGasHistory('2026-06-03', records);
      expect(history.lunes.value).toBe(100);
      expect(history.martes.value).toBe(90);
    });

    it('reads each weekday value from its own slot index', () => {
      const records = [
        makeRecord6Entry('2026-06-01', [10, null, null, null, null, null]),
        makeRecord6Entry('2026-06-02', [null, 20, null, null, null, null]),
        makeRecord6Entry('2026-06-03', [null, null, 30, null, null, null]),
        makeRecord6Entry('2026-06-04', [null, null, null, 40, null, null]),
        makeRecord6Entry('2026-06-05', [null, null, null, null, 50, null]),
        makeRecord6Entry('2026-06-06', [null, null, null, null, null, 60]),
      ];
      const history = getWeeklyGasHistory('2026-06-03', records);
      expect(history.lunes.value).toBe(10);
      expect(history.martes.value).toBe(20);
      expect(history.miercoles.value).toBe(30);
      expect(history.jueves.value).toBe(40);
      expect(history.viernes.value).toBe(50);
      expect(history.sabado.value).toBe(60);
    });

    it('returns hasData=false when only slot 0 is populated (lunes ignored for other days)', () => {
      const records = [makeRecord6Entry('2026-06-02', [100, null, null, null, null, null])];
      const history = getWeeklyGasHistory('2026-06-03', records);
      expect(history.martes.hasData).toBe(false);
      expect(history.martes.value).toBe('');
    });

    it('handles partially populated gasControl (only own slot filled)', () => {
      const records = [makeRecord6Entry('2026-06-02', [0, 90, 0, 0, 0, 0])];
      const history = getWeeklyGasHistory('2026-06-03', records);
      expect(history.martes.hasData).toBe(true);
      expect(history.martes.value).toBe(90);
      expect(history.martes.percentage).toBe(450);
    });
  });
});

describe('hasPastDayWithoutData', () => {
  it('returns true when lunes has no data and target is miercoles', () => {
    const history = getWeeklyGasHistory('2026-06-03', []);
    expect(hasPastDayWithoutData('2026-06-03', history)).toBe(true);
  });

  it('returns false when all past days have data', () => {
    const records = [
      makeRecord('2026-06-01', { value: 100, percentage: 80 }),
      makeRecord('2026-06-02', { value: 90, percentage: 70 }),
    ];
    const history = getWeeklyGasHistory('2026-06-03', records);
    expect(hasPastDayWithoutData('2026-06-03', history)).toBe(false);
  });

  it('returns false when target is lunes (no past days)', () => {
    const history = getWeeklyGasHistory('2026-06-01', []);
    expect(hasPastDayWithoutData('2026-06-01', history)).toBe(false);
  });

  it('returns false when target is sabado and all previous days have data', () => {
    const records = [
      makeRecord('2026-06-01', { value: 100, percentage: 80 }),
      makeRecord('2026-06-02', { value: 90, percentage: 70 }),
      makeRecord('2026-06-03', { value: 80, percentage: 60 }),
      makeRecord('2026-06-04', { value: 70, percentage: 50 }),
      makeRecord('2026-06-05', { value: 60, percentage: 40 }),
    ];
    const history = getWeeklyGasHistory('2026-06-06', records);
    expect(hasPastDayWithoutData('2026-06-06', history)).toBe(false);
  });

  it('returns true when a future day has no data (target is miercoles, jue has no data)', () => {
    // future days should NOT trigger the legend
    const history = getWeeklyGasHistory('2026-06-03', []);
    // jueves is 2026-06-04 which is after 2026-06-03
    expect(hasPastDayWithoutData('2026-06-03', history)).toBe(true); // lunes/martes are past and have no data
  });

  it('only counts PAST days (not future) as triggering the legend', () => {
    // If only jueves (future) has no data, legend should not show
    const records = [
      makeRecord('2026-06-01', { value: 100, percentage: 80 }),
      makeRecord('2026-06-02', { value: 90, percentage: 70 }),
      // miercoles is current day
    ];
    const history = getWeeklyGasHistory('2026-06-03', records);
    // jueves (future) has no data, but lunes and martes have data
    expect(hasPastDayWithoutData('2026-06-03', history)).toBe(false);
  });
});
