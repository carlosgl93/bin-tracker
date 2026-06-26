// src/utils/monthlyHelper.test.ts
import { describe, expect, it } from 'vitest';

import { ProductionRecord } from '@/services/production/types';
import {
  calculateBusinessMonthlyTotals,
  calculateCalendarMonthlyTotals,
  calculateMonthlyGasConsumption,
  defectuososPercent,
  getInitialGasValue,
  getWeekInfo,
  groupRecordsByWeek,
  sumBinsMalos,
  sumDrums,
  sumGas,
  sumGasForWeek,
  sumRecepcionadosKgs,
  sumStock,
  weeklyProduction,
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
    brix: { 1: 0, 2: 0, 3: 0 },
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

  it('sums drums for a sabado record alongside weekday records', () => {
    const records = [
      makeRecord('2026-06-05', 0, {
        // Fri
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }),
      makeRecord('2026-06-06', 0, {
        // Sabado
        drumProductionByHour: [{ range: '09:00-10:00', count: 7 }],
      }),
      makeRecord('2026-06-08', 0, {
        // Mon
        drumProductionByHour: [{ range: '09:00-10:00', count: 4 }],
      }),
    ];
    expect(sumDrums(records)).toBe(21);
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

describe('groupRecordsByWeek', () => {
  // June 2026: June 1 is Monday — clean week boundaries
  const MONTH = 5; // 0-based June
  const YEAR = 2026;

  describe('with targetMonth and targetYear', () => {
    it('groups weekday records into correct weeks', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon week 1
        makeRecord('2026-06-02', 10), // Tue week 1
        makeRecord('2026-06-08', 10), // Mon week 2
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(Object.keys(weeks)).toHaveLength(2);
      expect(weeks[1]).toHaveLength(2);
      expect(weeks[2]).toHaveLength(1);
    });

    it('includes Saturday records in the same week', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon week 1
        makeRecord('2026-06-06', 10), // Sat week 1 — now included
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(2);
    });

    it('includes Sunday records in the same week', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon week 1
        makeRecord('2026-06-07', 10), // Sun week 1 — now included
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(2);
    });

    it('excludes records from other months', () => {
      const records = [
        makeRecord('2026-05-31', 10), // Previous month Sunday
        makeRecord('2026-06-01', 10), // June — included
        makeRecord('2026-07-01', 10), // Next month
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      const allRecords = Object.values(weeks).flat();
      expect(allRecords).toHaveLength(1);
      expect(allRecords[0].date).toBe('2026-06-01');
    });

    it('removes empty weeks', () => {
      const records = [
        makeRecord('2026-06-01', 10), // week 1 only
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(Object.keys(weeks)).toEqual(['1']);
    });

    it('returns empty object when no records match', () => {
      const weeks = groupRecordsByWeek([], MONTH, YEAR);
      expect(Object.keys(weeks)).toHaveLength(0);
    });

    it('handles adjacent-month Monday correctly (July 2025 starts Tuesday)', () => {
      // groupRecordsByWeek filters to July only even when June 30 is passed
      const records = [
        makeRecord('2025-06-30', 10), // Mon, but June — excluded
        makeRecord('2025-07-01', 10), // Tue July — included
      ];
      const weeks = groupRecordsByWeek(records, 6, 2025); // July = month 6
      const allRecords = Object.values(weeks).flat();
      expect(allRecords).toHaveLength(1);
      expect(allRecords[0].date).toBe('2025-07-01');
    });
  });

  describe('fallback (no targetMonth/targetYear)', () => {
    it('groups records by simple week-of-month calculation', () => {
      const records = [
        makeRecord('2026-06-01', 10), // day 1 → week 1
        makeRecord('2026-06-08', 10), // day 8 → week 2
      ];
      const weeks = groupRecordsByWeek(records);
      expect(weeks[1]).toBeDefined();
      expect(weeks[2]).toBeDefined();
    });
  });
});

describe('getWeekInfo', () => {
  // June 2026: starts Monday June 1
  it('returns weeks that have business days in target month', () => {
    const info = getWeekInfo(5, 2026); // June 2026
    expect(info.length).toBeGreaterThan(0);
    info.forEach((w) => expect(w.hasData).toBe(true));
  });

  it('businessDaysInTargetMonth contains only Mon-Fri dates in the target month', () => {
    const info = getWeekInfo(5, 2026); // June 2026
    info.forEach((week) => {
      week.businessDaysInTargetMonth.forEach((dateStr) => {
        const date = new Date(dateStr + 'T12:00:00');
        const day = date.getDay();
        // Must be Mon(1) through Fri(5)
        expect(day).toBeGreaterThanOrEqual(1);
        expect(day).toBeLessThanOrEqual(5);
        // Must be in June 2026
        expect(date.getMonth()).toBe(5);
        expect(date.getFullYear()).toBe(2026);
      });
    });
  });

  it('week 1 of June 2026 has 5 business days (Mon Jun 1 – Fri Jun 5)', () => {
    const info = getWeekInfo(5, 2026);
    const week1 = info.find((w) => w.weekNumber === 1);
    expect(week1).toBeDefined();
    expect(week1!.businessDaysInTargetMonth).toHaveLength(5);
    expect(week1!.businessDaysInTargetMonth[0]).toBe('2026-06-01');
    expect(week1!.businessDaysInTargetMonth[4]).toBe('2026-06-05');
  });

  it('assigns sequential weekNumbers starting at 1', () => {
    const info = getWeekInfo(5, 2026);
    const weekNumbers = info.map((w) => w.weekNumber);
    expect(weekNumbers[0]).toBe(1);
    weekNumbers.forEach((n, i) => {
      if (i > 0) expect(n).toBe(weekNumbers[i - 1] + 1);
    });
  });

  it('handles July 2025 which starts on Tuesday (week 1 has only Tue–Fri)', () => {
    const info = getWeekInfo(6, 2025); // July 2025
    const week1 = info.find((w) => w.weekNumber === 1);
    expect(week1).toBeDefined();
    // July 1 is Tue, so week 1 has Jul 1(Tue), 2(Wed), 3(Thu), 4(Fri) = 4 days
    expect(week1!.businessDaysInTargetMonth).toHaveLength(4);
    expect(week1!.businessDaysInTargetMonth[0]).toBe('2025-07-01');
  });

  it('weekendDaysInTargetMonth contains Sat and Sun dates in target month', () => {
    const info = getWeekInfo(5, 2026); // June 2026
    info.forEach((week) => {
      week.weekendDaysInTargetMonth.forEach((dateStr) => {
        const date = new Date(dateStr + 'T12:00:00');
        const day = date.getDay();
        expect([0, 6]).toContain(day); // Sat=6 or Sun=0
        expect(date.getMonth()).toBe(5);
        expect(date.getFullYear()).toBe(2026);
      });
    });
  });

  it('week 1 of June 2026 has Sat Jun 6 and Sun Jun 7 as weekend days', () => {
    const info = getWeekInfo(5, 2026);
    const week1 = info.find((w) => w.weekNumber === 1);
    expect(week1!.weekendDaysInTargetMonth).toHaveLength(2);
    expect(week1!.weekendDaysInTargetMonth).toContain('2026-06-06');
    expect(week1!.weekendDaysInTargetMonth).toContain('2026-06-07');
  });

  it('Sabado (Jun 6) is in weekendDaysInTargetMonth but NOT in businessDaysInTargetMonth', () => {
    const info = getWeekInfo(5, 2026);
    const week1 = info.find((w) => w.weekNumber === 1);
    expect(week1!.weekendDaysInTargetMonth).toContain('2026-06-06');
    expect(week1!.businessDaysInTargetMonth).not.toContain('2026-06-06');
  });

  it('businessDaysInTargetMonth stays at 5 days even when sabado exists', () => {
    const info = getWeekInfo(5, 2026);
    info.forEach((week) => {
      expect(week.businessDaysInTargetMonth.length).toBeLessThanOrEqual(5);
    });
  });
});

describe('calculateCalendarMonthlyTotals', () => {
  const MONTH = 5; // June 0-based
  const YEAR = 2026;

  it('returns zeros when no records', () => {
    const result = calculateCalendarMonthlyTotals([], MONTH, YEAR);
    expect(result.totalDrums).toBe(0);
    expect(result.totalKgs).toBe(0);
    expect(result.totalGasConsumption).toBe(0);
    expect(result.lastGasValue).toBeNull();
    expect(result.lastGasPercentage).toBeNull();
    expect(result.lastRecord).toBeNull();
  });

  it('sums drums and kgs for records in target month', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }),
      makeRecord('2026-06-02', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 5 }],
      }),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.totalDrums).toBe(15);
    expect(result.totalKgs).toBe(15 * 240);
  });

  it('excludes records from other months', () => {
    const records = [
      makeRecord('2026-05-31', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 20 }],
      }),
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.totalDrums).toBe(10);
  });

  it('includes Saturday and Sunday records in totals (no day-of-week filter)', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }), // Mon
      makeRecord('2026-06-06', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 8 }],
      }), // Sat
      makeRecord('2026-06-07', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 6 }],
      }), // Sun
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.totalDrums).toBe(24);
  });

  it('returns lastGasValue and lastGasPercentage from most recent gas record', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        gasControl: [{ day: '2026-06-01', value: 300, percentage: 90 }],
      }),
      makeRecord('2026-06-05', 0, {
        gasControl: [{ day: '2026-06-05', value: 250, percentage: 75 }],
      }),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.lastGasValue).toBe(250);
    expect(result.lastGasPercentage).toBe(75);
  });

  it('calculates gas consumption correctly', () => {
    const records = [makeGasRecord('2026-06-01', 300), makeGasRecord('2026-06-02', 250)];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.totalGasConsumption).toBe(50);
  });

  it('lastRecord is the most recent record in the month', () => {
    const records = [makeRecord('2026-06-01', 5), makeRecord('2026-06-10', 3)];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.lastRecord?.date).toBe('2026-06-10');
  });

  it('lastGas reads weekday key from last record, not slot [0]', () => {
    // Regression: last record is Friday June 26. Reading gasControl[0]
    // (lunes) returns 0. Correct value is in slot [4] (Viernes).
    const records = [
      makeRecord('2026-06-01', 0, {
        gasControl: [{ day: 'Lunes', value: 100, percentage: 50 }],
      }),
      makeRecord('2026-06-26', 0, {
        gasControl: [
          { day: 'Lunes', value: 0, percentage: 0 },
          { day: 'Martes', value: 0, percentage: 0 },
          { day: 'Miércoles', value: 0, percentage: 0 },
          { day: 'Jueves', value: 0, percentage: 0 },
          { day: 'Viernes', value: 59558, percentage: 80 },
        ],
      }),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.lastGasValue).toBe(59558);
    expect(result.lastGasPercentage).toBe(80);
  });

  it('lastGas is null when last day slot is the 0/0 default (Saturday etc.)', () => {
    // Real-world: Saturday wasn't implemented in older records — all 6 slots
    // exist with 0/0. Must NOT surface as 0; treated as no data.
    const records = [
      makeRecord('2026-06-27', 0, {
        gasControl: [
          { day: 'Lunes', value: 0, percentage: 0 },
          { day: 'Martes', value: 0, percentage: 0 },
          { day: 'Miércoles', value: 0, percentage: 0 },
          { day: 'Jueves', value: 0, percentage: 0 },
          { day: 'Viernes', value: 0, percentage: 0 },
          { day: 'Sabado', value: 0, percentage: 0 },
        ],
      }),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.lastGasValue).toBeNull();
    expect(result.lastGasPercentage).toBeNull();
  });
});

describe('calculateBusinessMonthlyTotals', () => {
  it('returns zeros when no records', () => {
    const result = calculateBusinessMonthlyTotals([], 5, 2026);
    expect(result.totalDrums).toBe(0);
    expect(result.totalKgs).toBe(0);
  });

  it('includes weekend records (weekends count toward totals)', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }), // Mon
      makeRecord('2026-06-06', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 8 }],
      }), // Sat — now included
    ];
    const result = calculateBusinessMonthlyTotals(records, 5, 2026);
    expect(result.totalDrums).toBe(18);
  });

  it('calculates totalKgs as totalDrums * 240', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 5 }],
      }),
    ];
    const result = calculateBusinessMonthlyTotals(records, 5, 2026);
    expect(result.totalKgs).toBe(5 * 240);
  });

  it('lastRecord is the chronologically last record in business weeks', () => {
    const records = [
      makeRecord('2026-06-01', 5),
      makeRecord('2026-06-05', 3), // Fri
    ];
    const result = calculateBusinessMonthlyTotals(records, 5, 2026);
    expect(result.lastRecord?.date).toBe('2026-06-05');
  });
});

describe('sumBinsMalos', () => {
  it('sums binsMalfunction across records', () => {
    const records = [
      makeRecord('2026-06-01', 0, { binsMalfunction: 3 }),
      makeRecord('2026-06-02', 0, { binsMalfunction: 5 }),
    ];
    expect(sumBinsMalos(records)).toBe(8);
  });

  it('returns 0 for empty array', () => {
    expect(sumBinsMalos([])).toBe(0);
  });

  it('treats missing binsMalfunction as 0', () => {
    const rec = makeRecord('2026-06-01', 0, { binsMalfunction: 0 });
    expect(sumBinsMalos([rec])).toBe(0);
  });
});

describe('sumRecepcionadosKgs', () => {
  it('returns 0 for empty array', () => {
    expect(sumRecepcionadosKgs([])).toBe(0);
  });

  it('sums Chechito + Don Luis + Otros bins across records, multiplied by 700', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [
          { source: 'Inicio', quantity: 8 },
          { source: 'Chechito', quantity: 10 },
          { source: 'Don Luis', quantity: 5 },
          { source: 'Otros', quantity: 2 },
        ],
      }),
    ];
    // (10 + 5 + 2) * 700 = 11900
    expect(sumRecepcionadosKgs(records)).toBe(17 * 700);
  });

  it('excludes Inicio from recepcionados', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [
          { source: 'Inicio', quantity: 999 }, // should be ignored
          { source: 'Chechito', quantity: 1 },
        ],
      }),
    ];
    expect(sumRecepcionadosKgs(records)).toBe(700);
  });

  it('accumulates across multiple days', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [
          { source: 'Chechito', quantity: 10 },
          { source: 'Don Luis', quantity: 0 },
          { source: 'Otros', quantity: 0 },
        ],
      }),
      makeRecord('2026-06-02', 0, {
        binsStatus: [
          { source: 'Chechito', quantity: 5 },
          { source: 'Don Luis', quantity: 0 },
          { source: 'Otros', quantity: 0 },
        ],
      }),
    ];
    // (10 + 5) * 700 = 10500
    expect(sumRecepcionadosKgs(records)).toBe(15 * 700);
  });

  it('handles missing binsStatus as 0', () => {
    const rec = makeRecord('2026-06-01', 0, { binsStatus: [] });
    expect(sumRecepcionadosKgs([rec])).toBe(0);
  });
});

describe('defectuososPercent', () => {
  it('returns 0 when no records', () => {
    expect(defectuososPercent([])).toBe(0);
  });

  it('returns 0.0 for 0/100 case (no malos)', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [
          { source: 'Inicio', quantity: 50 },
          { source: 'Chechito', quantity: 30 },
          { source: 'Don Luis', quantity: 20 },
          { source: 'Otros', quantity: 0 },
        ],
        binsMalfunction: 0,
      }),
    ];
    expect(defectuososPercent(records)).toBe(0);
  });

  it('matches formula: 5 malos / 100 OK + 5 malos = 4.76%', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [
          { source: 'Inicio', quantity: 50 },
          { source: 'Chechito', quantity: 30 },
          { source: 'Don Luis', quantity: 20 },
          { source: 'Otros', quantity: 0 },
        ],
        binsMalfunction: 5,
      }),
    ];
    const result = defectuososPercent(records);
    expect(result).toBeCloseTo(4.76, 1);
  });

  it('returns 100 when only binsMalos exist with no OK', () => {
    const records = [makeRecord('2026-06-01', 0, { binsStatus: [], binsMalfunction: 5 })];
    expect(defectuososPercent(records)).toBe(100);
  });

  it('treats missing binsMalfunction as 0', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        binsStatus: [{ source: 'Inicio', quantity: 100 }],
        binsMalfunction: 0,
      }),
    ];
    expect(defectuososPercent(records)).toBe(0);
  });
});

describe('weeklyProduction', () => {
  // June 2026 week info (pre-computed for tests)
  const weekInfo = getWeekInfo(5, 2026);

  it('calculates drum and kg totals from weekRecords', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
        drumStock: { initial: 100, used: 10, total: 90 },
        bagStock: { initial: 50, used: 5, damaged: 0, total: 45 },
        gasControl: [{ day: 'lunes', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-02', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 5 }],
        drumStock: { initial: 90, used: 5, total: 85 },
        bagStock: { initial: 45, used: 3, damaged: 0, total: 42 },
        gasControl: [{ day: 'martes', value: 280, percentage: 75 }],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.weekTotalProducedDrumbs).toBe(15);
    expect(result.weekTotalProducedKgs).toBe(15 * 240);
  });

  it('uses last record for drum stock, bag stock, and gas', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        drumStock: { initial: 100, used: 10, total: 90 },
        bagStock: { initial: 50, used: 5, damaged: 0, total: 45 },
        gasControl: [{ day: 'Lunes', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-05', 0, {
        drumStock: { initial: 90, used: 5, total: 85 },
        bagStock: { initial: 45, used: 3, damaged: 0, total: 42 },
        gasControl: [{ day: 'Viernes', value: 270, percentage: 70 }],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.finalWeeklyDrumStock).toBe(85);
    expect(result.totalFinalBagStock).toBe(42);
    expect(result.gas).toBe(270);
    expect(result.gasPercentage).toBe(70);
  });

  it('countCurrentWeekWithProduction equals number of records', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 5),
      makeRecord('2026-06-02', 3),
      makeRecord('2026-06-03', 7),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.countCurrentWeekWithProduction).toBe(3);
  });

  it('returns currentWeekInfo for matching week number', () => {
    const weekRecords = [makeRecord('2026-06-01', 5)];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.currentWeekInfo?.weekNumber).toBe(1);
  });

  it('gas is null when last record has no gasControl', () => {
    const weekRecords = [makeRecord('2026-06-01', 5, { gasControl: [] })];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBeNull();
    expect(result.gasPercentage).toBeNull();
  });

  it('gas pulls value+percentage from the last worked day slot, not slot [0]', () => {
    // Regression: last record is Friday. Production stores `day` as the
    // WEEKDAY LABEL ('Viernes', 'Miércoles') — capitalized + accented. Match
    // must normalize both sides (lowercase + strip diacritics).
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        gasControl: [{ day: 'Lunes', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-05', 0, {
        gasControl: [
          { day: 'Lunes', value: 0, percentage: 0 },
          { day: 'Martes', value: 0, percentage: 0 },
          { day: 'Miércoles', value: 0, percentage: 0 },
          { day: 'Jueves', value: 0, percentage: 0 },
          { day: 'Viernes', value: 270, percentage: 70 },
        ],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBe(270);
    expect(result.gasPercentage).toBe(70);
  });

  it('gas is null when last record is a Sunday (no slot in 6-entry model)', () => {
    // 2026-06-07 is Sunday — getDay returns 0, which has no slot.
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        gasControl: [{ day: 'Lunes', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-07', 0, { gasControl: [] }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBeNull();
    expect(result.gasPercentage).toBeNull();
  });

  it('gas is null when slot exists but value=0 and percentage=0 (default/never entered)', () => {
    // Real-world: Saturday records have all 6 slots filled with 0/0 because
    // Saturday wasn't implemented when older records were saved. Must NOT be
    // displayed as 0 — treat as "No ingresado".
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        gasControl: [{ day: 'Lunes', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-06', 0, {
        gasControl: [
          { day: 'Lunes', value: 0, percentage: 0 },
          { day: 'Martes', value: 0, percentage: 0 },
          { day: 'Miércoles', value: 0, percentage: 0 },
          { day: 'Jueves', value: 0, percentage: 0 },
          { day: 'Viernes', value: 0, percentage: 0 },
          { day: 'Sabado', value: 0, percentage: 0 },
        ],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBeNull();
    expect(result.gasPercentage).toBeNull();
  });

  it('gas shows real value when only one of value/percentage is > 0', () => {
    // Defensive: a partial entry (value>0 but pct=0, or vice versa) is still
    // a real registration and should be displayed.
    const weekRecords = [
      makeRecord('2026-06-05', 0, {
        gasControl: [{ day: 'Viernes', value: 100, percentage: 0 }],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBe(100);
    expect(result.gasPercentage).toBe(0);
  });

  it('finalWeeklyDrumStock is 0 when last record has zero drumStock total', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 5, { drumStock: { initial: 0, used: 0, total: 0 } }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.finalWeeklyDrumStock).toBe(0);
  });
});
