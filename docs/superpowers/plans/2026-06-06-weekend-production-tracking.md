# Weekend Production Tracking — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow Saturday/Sunday production records to appear in weekly cards and count toward all totals (drums, kgs, stock, gas) exactly like any weekday.

**Architecture:** Two phases. Phase 1 locks in 95%+ unit-test coverage of the current `monthlyHelper.ts` business logic before any changes. Phase 2 removes the weekend skip from `groupRecordsByWeek`, adds `weekendDaysInTargetMonth` to `getWeekInfo`, and renders weekend day chips in `WeeklyProductionCard` (only when a record exists — no red "missing" chips for Saturdays).

**Tech Stack:** TypeScript, Vitest 3, date-fns 4, React 19, MUI v6.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/utils/monthlyHelper.test.ts` | **Create** | All unit tests for monthlyHelper business logic |
| `src/utils/monthlyHelper.ts` | **Modify** (Phase 2) | Remove weekend skip; add `weekendDaysInTargetMonth` to `getWeekInfo` |
| `src/pages/MonthlyView/WeeklyProductionCard.tsx` | **Modify** (Phase 2) | Render weekend day chips when a record exists |

---

## PHASE 1 — Tests for current business logic

---

### Task 1: Create test file with shared factory and import all exported functions

**Files:**
- Create: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Write the test file skeleton with factory**

```typescript
// src/utils/monthlyHelper.test.ts
import { describe, expect, it } from 'vitest';

import { ProductionRecord } from '@/services/production/types';
import {
  calculateBusinessMonthlyTotals,
  calculateCalendarMonthlyTotals,
  calculateMonthlyGasConsumption,
  getInitialGasValue,
  getWeekInfo,
  groupRecordsByWeek,
  sumDrums,
  sumGas,
  sumGasForWeek,
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
  gasPercentage: number = 50,
): ProductionRecord {
  return makeRecord(date, 0, {
    gasControl: [{ day: date, value: gasValue, percentage: gasPercentage }],
  });
}

describe('placeholder', () => {
  it('passes', () => expect(true).toBe(true));
});
```

- [ ] **Step 2: Run to confirm imports resolve**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: 1 test passes, no import errors.

- [ ] **Step 3: Commit skeleton**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: add monthlyHelper test skeleton"
```

---

### Task 2: Tests for sumDrums, sumStock, sumGas, sumGasForWeek, getInitialGasValue

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Replace placeholder describe with real tests**

Replace the `describe('placeholder', ...)` block with:

```typescript
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

  it('returns null when gasControl is undefined', () => {
    const rec = makeRecord('2026-06-02', 0, { gasControl: [] });
    expect(getInitialGasValue(rec)).toBeNull();
  });
});
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: sumDrums, sumStock, sumGas, sumGasForWeek, getInitialGasValue"
```

---

### Task 3: Tests for calculateMonthlyGasConsumption

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Add the describe block after getInitialGasValue tests**

```typescript
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
    const records = [
      makeGasRecord('2026-06-02', 300),
      makeGasRecord('2026-06-03', 250),
    ];
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
    // Same as above but provided in reverse order
    const records = [
      makeGasRecord('2026-06-04', 150),
      makeGasRecord('2026-06-02', 300),
      makeGasRecord('2026-06-03', 250),
      makeGasRecord('2026-06-01', 350),
    ];
    // Sorted: 350 → 300 (50) → 250 (50) → 150 (100) = 200
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
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: calculateMonthlyGasConsumption"
```

---

### Task 4: Tests for groupRecordsByWeek

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

Note: June 2026 starts on Monday (June 1 = Mon). This makes it clean for testing ISO weeks.
Week 1: Jun 1(Mon)–Jun 7(Sun), Week 2: Jun 8(Mon)–Jun 14(Sun).

- [ ] **Step 1: Add the describe block**

```typescript
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

    it('excludes Saturday records', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon
        makeRecord('2026-06-06', 10), // Sat — should be excluded
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(1);
      expect(weeks[1][0].date).toBe('2026-06-01');
    });

    it('excludes Sunday records', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon
        makeRecord('2026-06-07', 10), // Sun — should be excluded
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(1);
    });

    it('excludes records from other months', () => {
      // May 31 is a Sunday (before June), July 1 is after June
      const records = [
        makeRecord('2026-05-31', 10), // Previous month
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
      // Only week 1 should exist, not weeks 2-5
      expect(Object.keys(weeks)).toEqual(['1']);
    });

    it('returns empty object when no records match', () => {
      const weeks = groupRecordsByWeek([], MONTH, YEAR);
      expect(Object.keys(weeks)).toHaveLength(0);
    });

    it('handles adjacent-month Monday correctly (July 2025 starts Tuesday)', () => {
      // July 2025: week 1 starts June 30 (Mon). groupRecordsByWeek filters to July only.
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
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: groupRecordsByWeek"
```

---

### Task 5: Tests for getWeekInfo

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Add the describe block**

```typescript
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
});
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: getWeekInfo"
```

---

### Task 6: Tests for calculateCalendarMonthlyTotals and calculateBusinessMonthlyTotals

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Add the describe blocks**

```typescript
describe('calculateCalendarMonthlyTotals', () => {
  const MONTH = 5; // June 0-based
  const YEAR = 2026;

  it('returns zeros when no records', () => {
    const result = calculateCalendarMonthlyTotals([], MONTH, YEAR);
    expect(result.totalDrums).toBe(0);
    expect(result.totalKgs).toBe(0);
    expect(result.totalGasConsumption).toBe(0);
    expect(result.lastGasValue).toBe(0);
    expect(result.lastGasPercentage).toBe(0);
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
      makeGasRecord('2026-06-01', 300, 90),
      makeGasRecord('2026-06-05', 250, 75),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    // lastGasRecord is sorted desc, so June 5 is last
    expect(result.lastGasValue).toBe(250);
    expect(result.lastGasPercentage).toBe(75);
  });

  it('calculates gas consumption correctly', () => {
    const records = [
      makeGasRecord('2026-06-01', 300),
      makeGasRecord('2026-06-02', 250),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.totalGasConsumption).toBe(50);
  });

  it('lastRecord is the most recent record in the month', () => {
    const records = [
      makeRecord('2026-06-01', 5),
      makeRecord('2026-06-10', 3),
    ];
    const result = calculateCalendarMonthlyTotals(records, MONTH, YEAR);
    expect(result.lastRecord?.date).toBe('2026-06-10');
  });
});

describe('calculateBusinessMonthlyTotals', () => {
  it('returns zeros when no records', () => {
    const result = calculateBusinessMonthlyTotals([], 5, 2026);
    expect(result.totalDrums).toBe(0);
    expect(result.totalKgs).toBe(0);
  });

  it('uses groupRecordsByWeek logic (excludes weekends currently)', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }), // Mon
      makeRecord('2026-06-06', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 8 }],
      }), // Sat — excluded by current business logic
    ];
    const result = calculateBusinessMonthlyTotals(records, 5, 2026);
    // Only Monday counted (Saturday excluded by groupRecordsByWeek)
    expect(result.totalDrums).toBe(10);
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
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: calculateCalendarMonthlyTotals, calculateBusinessMonthlyTotals"
```

---

### Task 7: Tests for weeklyProduction + coverage check

**Files:**
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Add the describe block**

```typescript
describe('weeklyProduction', () => {
  // June 2026 week info (pre-computed for tests)
  const weekInfo = getWeekInfo(5, 2026);

  it('calculates drum and kg totals from weekRecords', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
        drumStock: { initial: 100, used: 10, total: 90 },
        bagStock: { initial: 50, used: 5, damaged: 0, total: 45 },
        gasControl: [{ day: '2026-06-01', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-02', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 5 }],
        drumStock: { initial: 90, used: 5, total: 85 },
        bagStock: { initial: 45, used: 3, damaged: 0, total: 42 },
        gasControl: [{ day: '2026-06-02', value: 280, percentage: 75 }],
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
        gasControl: [{ day: '2026-06-01', value: 300, percentage: 80 }],
      }),
      makeRecord('2026-06-05', 0, {
        drumStock: { initial: 90, used: 5, total: 85 },
        bagStock: { initial: 45, used: 3, damaged: 0, total: 42 },
        gasControl: [{ day: '2026-06-05', value: 270, percentage: 70 }],
      }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.finalWeeklyDrumStock).toBe(85);
    expect(result.totalFinalBagStock).toBe(42);
    expect(result.gas).toBe(270);
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

  it('gas is 0 when last record has no gasControl', () => {
    const weekRecords = [makeRecord('2026-06-01', 5, { gasControl: [] })];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.gas).toBe(0);
  });

  it('finalWeeklyDrumStock is 0 when last record has no drumStock', () => {
    const weekRecords = [
      makeRecord('2026-06-01', 5, { drumStock: { initial: 0, used: 0, total: 0 } }),
    ];
    const result = weeklyProduction(weekRecords, weekInfo, '1');
    expect(result.finalWeeklyDrumStock).toBe(0);
  });
});
```

- [ ] **Step 2: Run tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 3: Run coverage and verify ≥95%**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm vitest run --coverage src/utils/monthlyHelper.test.ts
```

Expected: `monthlyHelper.ts` shows ≥95% statement/branch coverage. If below 95%, add targeted tests for uncovered branches before proceeding.

- [ ] **Step 4: Commit**

```bash
git add src/utils/monthlyHelper.test.ts
git commit -m "test: weeklyProduction — Phase 1 complete, ≥95% coverage of monthlyHelper"
```

---

## PHASE 2 — Feature: weekend production in weekly cards and totals

---

### Task 8: Remove weekend skip from groupRecordsByWeek + add weekendDaysInTargetMonth to getWeekInfo

**Files:**
- Modify: `src/utils/monthlyHelper.ts`
- Modify: `src/utils/monthlyHelper.test.ts`

- [ ] **Step 1: Remove the weekend skip in groupRecordsByWeek (monthlyHelper.ts lines 58–61)**

In `src/utils/monthlyHelper.ts`, delete these 4 lines from `groupRecordsByWeek`:

```typescript
      // Business requirement: Only include Monday (1) through Friday (5)
      if (recordDay === 0 || recordDay === 6) {
        return; // Skip weekends (Saturday=6, Sunday=0)
      }
```

After removal, the `sortedRecords.forEach` body should go directly from getting `recordDay` to checking the month.

- [ ] **Step 2: Add weekendDaysInTargetMonth to getWeekInfo**

In `src/utils/monthlyHelper.ts`, find the `getWeekInfo` function. Inside the `.map()` callback, replace the existing day loop:

```typescript
      // Get the business days (Mon-Fri) that belong to the target month
      const businessDaysInTargetMonth = [];
      for (let d = 0; d <= 6; d++) {
        const day = new Date(weekStart);
        day.setDate(weekStart.getDate() + d);

        // Only include if it's a business day (Mon-Fri) and belongs to target month
        const dayOfWeek = day.getDay();
        const isBusinessDay = dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
        const belongsToTargetMonth =
          day.getMonth() === targetMonth && day.getFullYear() === targetYear;

        if (isBusinessDay && belongsToTargetMonth) {
          businessDaysInTargetMonth.push(format(day, 'yyyy-MM-dd'));
        }
      }
```

With:

```typescript
      const businessDaysInTargetMonth: string[] = [];
      const weekendDaysInTargetMonth: string[] = [];

      for (let d = 0; d <= 6; d++) {
        const day = new Date(weekStart);
        day.setDate(weekStart.getDate() + d);

        const dayOfWeek = day.getDay();
        const belongsToTargetMonth =
          day.getMonth() === targetMonth && day.getFullYear() === targetYear;

        if (!belongsToTargetMonth) continue;

        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          businessDaysInTargetMonth.push(format(day, 'yyyy-MM-dd'));
        } else if (dayOfWeek === 0 || dayOfWeek === 6) {
          weekendDaysInTargetMonth.push(format(day, 'yyyy-MM-dd'));
        }
      }
```

Also update the return object inside `.map()` to include the new field:

```typescript
      return {
        weekNumber: index + 1,
        weekStart: format(weekStart, 'MMM dd'),
        weekEnd: format(weekEnd, 'MMM dd'),
        businessDaysInTargetMonth,
        weekendDaysInTargetMonth,
        hasData: businessDaysInTargetMonth.length > 0,
      };
```

- [ ] **Step 3: Run existing tests to confirm nothing regressed**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All existing tests still pass. The `groupRecordsByWeek` test "excludes Saturday records" and "excludes Sunday records" will now FAIL because we removed the skip — this is expected. Update those tests to reflect the new behavior:

In the `groupRecordsByWeek` describe block, replace:

```typescript
    it('excludes Saturday records', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon
        makeRecord('2026-06-06', 10), // Sat — should be excluded
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(1);
      expect(weeks[1][0].date).toBe('2026-06-01');
    });

    it('excludes Sunday records', () => {
      const records = [
        makeRecord('2026-06-01', 10), // Mon
        makeRecord('2026-06-07', 10), // Sun — should be excluded
      ];
      const weeks = groupRecordsByWeek(records, MONTH, YEAR);
      expect(weeks[1]).toHaveLength(1);
    });
```

With:

```typescript
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
```

Also update the `calculateBusinessMonthlyTotals` test "uses groupRecordsByWeek logic (excludes weekends currently)":

Replace:

```typescript
  it('uses groupRecordsByWeek logic (excludes weekends currently)', () => {
    const records = [
      makeRecord('2026-06-01', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 10 }],
      }), // Mon
      makeRecord('2026-06-06', 0, {
        drumProductionByHour: [{ range: '09:00-10:00', count: 8 }],
      }), // Sat — excluded by current business logic
    ];
    const result = calculateBusinessMonthlyTotals(records, 5, 2026);
    // Only Monday counted (Saturday excluded by groupRecordsByWeek)
    expect(result.totalDrums).toBe(10);
  });
```

With:

```typescript
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
```

- [ ] **Step 4: Run all tests — all must pass**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 5: Add new tests for weekendDaysInTargetMonth in getWeekInfo describe block**

Add inside the existing `describe('getWeekInfo', ...)`:

```typescript
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
```

- [ ] **Step 6: Run all tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run -- src/utils/monthlyHelper.test.ts
```

Expected: All tests pass.

- [ ] **Step 7: Commit**

```bash
git add src/utils/monthlyHelper.ts src/utils/monthlyHelper.test.ts
git commit -m "feat: include weekend records in groupRecordsByWeek; add weekendDaysInTargetMonth to getWeekInfo"
```

---

### Task 9: Update WeeklyProductionCard to render weekend day chips

**Files:**
- Modify: `src/pages/MonthlyView/WeeklyProductionCard.tsx`

- [ ] **Step 1: Add weekendDaysInTargetMonth to the currentWeekInfo interface**

In `src/pages/MonthlyView/WeeklyProductionCard.tsx`, update the `currentWeekInfo` type inside `WeeklyProductionCardProps`:

```typescript
  currentWeekInfo: {
    weekNumber: number;
    weekStart: string;
    weekEnd: string;
    businessDaysInTargetMonth: string[];
    weekendDaysInTargetMonth: string[];
    hasData: boolean;
  };
```

- [ ] **Step 2: Add weekend chip rendering after dayIndicators**

In `WeeklyProductionCard`, after the existing `dayIndicators` computed value, add:

```typescript
  // Weekend day chips — only shown when a record exists for that day
  const weekendIndicators = currentWeekInfo.weekendDaysInTargetMonth
    .map((dayId) => {
      const record = weekRecords.find((r) => r.id === dayId);
      if (!record) return null; // No red chips for unworked weekends

      const dayDate = parseISO(dayId);
      if (!isValid(dayDate)) return null;

      const dayLabel = format(dayDate, 'dd', { locale: es });

      const tooltipContent = (
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {format(dayDate, 'dd MMM', { locale: es })}
          </Typography>
          <Typography variant="caption">
            Total tambores producidos:{' '}
            {record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0}
          </Typography>
          <br />
          <Typography variant="caption">
            Kgs:{' '}
            {formatNumberES(
              (record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0) *
                240,
            )}
          </Typography>
          <br />
          <Typography variant="caption">
            Stock tambores: {record.drumStock?.total || 0}
          </Typography>
          <br />
          <Typography variant="caption">Stock bolsas: {record.bagStock?.total || 0}</Typography>
        </Box>
      );

      if (isMobile) {
        return (
          <Chip
            key={dayId}
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#45a049' },
            }}
            onClick={() => {
              setModalContent(tooltipContent);
              setOpenModal(true);
            }}
          />
        );
      }

      return (
        <Tooltip key={dayId} title={tooltipContent} arrow>
          <Chip
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#45a049' },
            }}
          />
        </Tooltip>
      );
    })
    .filter(Boolean);
```

- [ ] **Step 3: Render weekendIndicators in the chip row**

Find the chip render section:

```tsx
          <Box sx={{ display: 'flex', gap: 0.5, mx: 2 }}>{dayIndicators}</Box>
```

Replace with:

```tsx
          <Box sx={{ display: 'flex', gap: 0.5, mx: 2, flexWrap: 'wrap' }}>
            {dayIndicators}
            {weekendIndicators.length > 0 && (
              <>
                <Box sx={{ width: '4px' }} /> {/* visual separator */}
                {weekendIndicators}
              </>
            )}
          </Box>
```

- [ ] **Step 4: Update MonthlyView.tsx fallback currentWeekInfo to include weekendDaysInTargetMonth**

In `src/pages/MonthlyView.tsx`, find the fallback object passed to `WeeklyProductionCard`:

```tsx
                  currentWeekInfo={
                    currentWeekInfo || {
                      weekNumber: parseInt(week),
                      weekStart: '',
                      weekEnd: '',
                      businessDaysInTargetMonth: [],
                      hasData: false,
                    }
                  }
```

Replace with:

```tsx
                  currentWeekInfo={
                    currentWeekInfo || {
                      weekNumber: parseInt(week),
                      weekStart: '',
                      weekEnd: '',
                      businessDaysInTargetMonth: [],
                      weekendDaysInTargetMonth: [],
                      hasData: false,
                    }
                  }
```

- [ ] **Step 5: Run TypeScript check**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 6: Run unit tests**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm test:unit:run
```

Expected: All tests pass.

- [ ] **Step 7: Commit**

```bash
git add src/pages/MonthlyView/WeeklyProductionCard.tsx src/pages/MonthlyView.tsx
git commit -m "feat: render weekend day chips in weekly production card"
```

---

### Task 10: Manual verification

**Files:** None (verification only)

- [ ] **Step 1: Start the dev server**

```bash
cd /Users/consultor/cgl/bin-tracker && pnpm dev
```

- [ ] **Step 2: Open the app and navigate to Mensual view**

Open the browser at the local dev URL shown by Vite.

- [ ] **Step 3: Verify a month with only weekday records**

Select a month that has no Saturday/Sunday records (e.g., a past month). Confirm:
- Weekly cards show the same day chips as before (no extra chips)
- Drum/kg totals unchanged
- No visual regressions

- [ ] **Step 4: Verify a month with a Saturday or Sunday record**

Enter a production record for a Saturday (e.g., today, 2026-06-06). Navigate to the Mensual view for June 2026. Confirm:
- The Saturday chip (labeled "06") appears in the correct week card, colored green
- The week's drum/kg totals include Saturday's production
- The monthly total also includes it
- No red chip appears for Saturday/Sunday weeks that have no weekend records

- [ ] **Step 5: Final commit**

```bash
git add -p  # stage any remaining changes
git commit -m "feat: weekend production tracking — Phase 2 complete"
```

---

## Self-Review

**Spec coverage:**
- [x] Weekend records included in monthly totals (drums, kgs, gas) → `calculateCalendarMonthlyTotals` has no day filter; `groupRecordsByWeek` weekend skip removed
- [x] Weekend records included in weekly totals → same `groupRecordsByWeek` change
- [x] Weekend chips visible in weekly card → `weekendIndicators` in `WeeklyProductionCard`
- [x] No red chips for unworked weekends → `if (!record) return null`
- [x] Chip label = date number → `format(dayDate, 'dd', { locale: es })`
- [x] Stock/gas from last day worked → naturally falls out since weekends are now in `weekRecords`
- [x] 95% test coverage of `monthlyHelper.ts` before any changes → Phase 1 Tasks 1–7
- [x] No UI form changes needed → confirmed (form has no date restriction)

**No placeholders found.**

**Type consistency:** `weekendDaysInTargetMonth: string[]` is defined in `getWeekInfo` return (Task 8) and consumed in `WeeklyProductionCard` interface (Task 9). `makeRecord`/`makeGasRecord` factories are defined in Task 1 and reused throughout all test tasks.
