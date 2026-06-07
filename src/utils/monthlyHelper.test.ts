// src/utils/monthlyHelper.test.ts
import { describe, expect, it } from 'vitest';

import { ProductionRecord } from '@/services/production/types';
import {
  calculateMonthlyGasConsumption,
  getInitialGasValue,
  sumDrums,
  sumGas,
  sumGasForWeek,
  sumStock,
} from '@/utils/monthlyHelper';

function makeRecord(
  date: string,
  drums: number = 0,
  overrides: Partial<ProductionRecord> = {},
): ProductionRecord {
  return {
    id: date,
    date,
    startTime: '09:00',
    endTime: '19:00',
    drumProductionByHour: drums > 0 ? [{ range: '09:00-10:00', count: drums }] : [],
    gasControl: [],
    drumStock: { initial: 0, used: 0, total: 0 },
    bagStock: { initial: 0, used: 0, damaged: 0, total: 0 },
    binsStatus: [],
    binsMalfunction: 0,
    brix: { 1: 0, 2: 0, 3: 0, average: 0 },
    totalDrumsWeight: 0,
    totalExistence: 0,
    totalProcessed: 0,
    totalFinal: 0,
    ...overrides,
  };
}

function makeGasRecord(
  date: string,
  gasValue: number,
  overrides: Partial<ProductionRecord> = {},
): ProductionRecord {
  return makeRecord(date, 0, {
    gasControl: [{ day: date, value: gasValue, percentage: 0 }],
    ...overrides,
  });
}

describe('sumDrums', () => {
  it('returns 0 for empty array', () => {
    expect(sumDrums([])).toBe(0);
  });

  it('sums hourly drum counts for a single record', () => {
    const rec = makeRecord('2026-06-02', 0, {
      drumProductionByHour: [
        { range: '09:00-10:00', count: 5 },
        { range: '10:00-11:00', count: 3 },
      ],
    });
    expect(sumDrums([rec])).toBe(8);
  });

  it('sums drums across multiple records', () => {
    const records = [
      makeRecord('2026-06-02', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }),
      makeRecord('2026-06-03', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 7 }],
      }),
    ];
    expect(sumDrums(records)).toBe(17);
  });

  it('handles records with missing drumProductionByHour', () => {
    const rec = makeRecord('2026-06-02', 0, { drumProductionByHour: [] });
    expect(sumDrums([rec])).toBe(0);
  });
});

describe('sumStock', () => {
  it('sums drum stock initial', () => {
    const records = [
      makeRecord('2026-06-02', 0, { drumStock: { initial: 100, used: 10, total: 90 } }),
      makeRecord('2026-06-03', 0, { drumStock: { initial: 90, used: 5, total: 85 } }),
    ];
    expect(sumStock(records, 'drumStock', 'initial')).toBe(190);
  });

  it('sums drum stock final (total)', () => {
    const records = [
      makeRecord('2026-06-02', 0, { drumStock: { initial: 100, used: 10, total: 90 } }),
      makeRecord('2026-06-03', 0, { drumStock: { initial: 90, used: 5, total: 85 } }),
    ];
    expect(sumStock(records, 'drumStock', 'final')).toBe(175);
  });

  it('sums bag stock initial', () => {
    const records = [
      makeRecord('2026-06-02', 0, { bagStock: { initial: 200, used: 20, damaged: 2, total: 178 } }),
    ];
    expect(sumStock(records, 'bagStock', 'initial')).toBe(200);
  });

  it('returns 0 for empty array', () => {
    expect(sumStock([], 'drumStock', 'final')).toBe(0);
  });

  it('returns 0 for drum stock when record has no drumStock data', () => {
    const rec = makeRecord('2026-06-02', 0, {
      drumStock: { initial: 0, used: 0, total: 0 },
    });
    expect(sumStock([rec], 'drumStock', 'final')).toBe(0);
  });

  it('returns 0 for bag stock when record has no bagStock data', () => {
    const rec = makeRecord('2026-06-02', 0, {
      bagStock: { initial: 0, used: 0, damaged: 0, total: 0 },
    });
    expect(sumStock([rec], 'bagStock', 'final')).toBe(0);
  });
});

describe('sumGas', () => {
  it('returns zero value and percentage for empty array', () => {
    expect(sumGas([])).toEqual({ value: 0, percentage: 0 });
  });

  it('sums gas values and percentages across records', () => {
    const records = [
      makeRecord('2026-06-02', 0, {
        gasControl: [
          { day: '2026-06-02', value: 100, percentage: 80 },
          { day: '2026-06-02', value: 90, percentage: 70 },
        ],
      }),
      makeRecord('2026-06-03', 0, {
        gasControl: [{ day: '2026-06-03', value: 50, percentage: 40 }],
      }),
    ];
    expect(sumGas(records)).toEqual({ value: 240, percentage: 190 });
  });
});

describe('sumGasForWeek', () => {
  it('returns 0 for empty array', () => {
    expect(sumGasForWeek([])).toBe(0);
  });

  it('sums gas values (not percentages) across records', () => {
    const records = [
      makeRecord('2026-06-02', 0, {
        gasControl: [{ day: '2026-06-02', value: 100, percentage: 80 }],
      }),
      makeRecord('2026-06-03', 0, {
        gasControl: [{ day: '2026-06-03', value: 50, percentage: 40 }],
      }),
    ];
    expect(sumGasForWeek(records)).toBe(150);
  });

  it('returns 0 for records with no gasControl', () => {
    const rec = makeRecord('2026-06-02', 5, { gasControl: [] });
    expect(sumGasForWeek([rec])).toBe(0);
  });
});

describe('getInitialGasValue', () => {
  it('returns null for empty gasControl', () => {
    const rec = makeRecord('2026-06-02');
    expect(getInitialGasValue(rec)).toBeNull();
  });

  it('returns the first gasControl value', () => {
    const rec = makeRecord('2026-06-02', 0, {
      gasControl: [
        { day: '2026-06-02', value: 250, percentage: 90 },
        { day: '2026-06-02', value: 240, percentage: 85 },
      ],
    });
    expect(getInitialGasValue(rec)).toBe(250);
  });

  it('returns null when gasControl is empty array', () => {
    const rec = makeRecord('2026-06-02', 0, { gasControl: [] });
    expect(getInitialGasValue(rec)).toBeNull();
  });
});

describe('calculateMonthlyGasConsumption', () => {
  it('returns 0 for empty array', () => {
    expect(calculateMonthlyGasConsumption([])).toBe(0);
  });

  it('returns 0 for a single record (no previous to compare)', () => {
    const records = [makeGasRecord('2026-06-02', 300)];
    expect(calculateMonthlyGasConsumption(records)).toBe(0);
  });

  it('calculates consumption between two records', () => {
    // Mon: 300, Tue: 250 → consumed 50
    const records = [makeGasRecord('2026-06-02', 300), makeGasRecord('2026-06-03', 250)];
    expect(calculateMonthlyGasConsumption(records)).toBe(50);
  });

  it('accumulates consumption across multiple days', () => {
    // Mon 300 → Tue 250 (50) → Wed 200 (50) → Thu 150 (50) → total 150
    const records = [
      makeGasRecord('2026-06-01', 300),
      makeGasRecord('2026-06-02', 250),
      makeGasRecord('2026-06-03', 200),
      makeGasRecord('2026-06-04', 150),
    ];
    expect(calculateMonthlyGasConsumption(records)).toBe(150);
  });

  it('detects a recharge and resets tracking', () => {
    // Mon 300 → Tue 250 (consumed 50) → Wed 400 (recharge, reset) → Thu 350 (consumed 50)
    // Total = 50 + 50 = 100
    const records = [
      makeGasRecord('2026-06-01', 300),
      makeGasRecord('2026-06-02', 250),
      makeGasRecord('2026-06-03', 400), // recharge
      makeGasRecord('2026-06-04', 350),
    ];
    expect(calculateMonthlyGasConsumption(records)).toBe(100);
  });

  it('handles records out of order (sorts by date)', () => {
    // Provided in reverse, sorted: 350 → 300 (50) → 250 (50) → 150 (100) = 200
    const records = [
      makeGasRecord('2026-06-04', 150),
      makeGasRecord('2026-06-02', 300),
      makeGasRecord('2026-06-03', 250),
      makeGasRecord('2026-06-01', 350),
    ];
    expect(calculateMonthlyGasConsumption(records)).toBe(200);
  });

  it('skips records with no gas data', () => {
    // Mon 300 → Tue has no gas → Wed 250 → consumed = 50 (from Mon to Wed)
    const records = [
      makeGasRecord('2026-06-01', 300),
      makeRecord('2026-06-02', 5), // no gas
      makeGasRecord('2026-06-03', 250),
    ];
    expect(calculateMonthlyGasConsumption(records)).toBe(50);
  });
});
