// src/utils/gasHistory.test.ts
import { describe, expect, it } from 'vitest';

import { ProductionRecord } from '@/services/production/types';
import {
  DIAS_KEYS,
  getCurrentDayKey,
  getWeeklyGasHistory,
  hasPastDayWithoutData,
} from '@/utils/gasHistory';

function makeRecord(
  date: string,
  gas: { value: number; percentage: number } | null = null,
): ProductionRecord {
  return {
    id: date,
    date,
    startTime: '09:00',
    endTime: '19:00',
    drumProductionByHour: [],
    gasControl: gas ? [{ day: date, ...gas }] : [],
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
