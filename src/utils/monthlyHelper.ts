import {
  differenceInWeeks,
  getDate,
  isSameMonth,
  isSameYear,
  nextMonday,
  parseISO,
  startOfWeek,
} from 'date-fns';

import { ProductionRecord } from '@/services/production/types';

function getWeekOfMonthISO(dateString: string) {
  // Parse date as local date to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // month-1 because Date constructor expects 0-based month
  const dayOfMonth = getDate(date);

  // Simple week calculation based on day of month (fallback only)
  // Week 1: days 1-7, Week 2: days 8-14, Week 3: days 15-21, Week 4: days 22-28
  // Days 29+ will be considered part of week 4 (no week 5)
  if (dayOfMonth <= 7) return 1;
  if (dayOfMonth <= 14) return 2;
  if (dayOfMonth <= 21) return 3;
  return 4; // Days 22+ are all week 4
}

function groupRecordsByWeek(
  records: ProductionRecord[],
  targetMonth?: number,
  targetYear?: number,
) {
  const weeks: Record<number, ProductionRecord[]> = {};

  // Sort records by date to ensure proper ordering
  const sortedRecords = [...records].sort((a, b) => a.date.localeCompare(b.date));

  if (targetMonth !== undefined && targetYear !== undefined) {
    // Business week logic using date-fns for reliability
    const targetMonthStart = new Date(targetYear, targetMonth, 1);
    // Find the Monday that starts the first business week of the month
    // This is the anchor for all week calculations
    let firstBusinessMonday;
    firstBusinessMonday = startOfWeek(targetMonthStart, { weekStartsOn: 0 });
    if (firstBusinessMonday.getDate() >= 26) {
      firstBusinessMonday = nextMonday(firstBusinessMonday);
    }

    sortedRecords.forEach((rec) => {
      // Parse date with timezone consistency - always use noon to avoid DST issues
      const recordDate = parseISO(rec.date + 'T12:00:00');
      const recordDay = recordDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

      // Business requirement: Only include Monday (1) through Friday (5)
      if (recordDay === 0 || recordDay === 6) {
        return; // Skip weekends (Saturday=6, Sunday=0)
      }

      // Calculate which business week this record belongs to
      const weekNumber = differenceInWeeks(recordDate, firstBusinessMonday) + 1;

      // Business rule: Only 4 weeks per month
      // Records in week 5+ overflow to the next month's week 1
      if (weekNumber > 4) {
        return; // These records will be handled by the next month's grouping
      }

      // Ensure week number is positive and valid (1-4)
      const finalWeekNumber = Math.max(1, Math.min(4, weekNumber));

      // Only include records that belong to this month's business weeks
      const isTargetMonth =
        isSameMonth(recordDate, targetMonthStart) && isSameYear(recordDate, targetMonthStart);
      const isFromPreviousMonth = recordDate < targetMonthStart;

      // Include records from target month
      if (isTargetMonth) {
        if (!weeks[finalWeekNumber]) weeks[finalWeekNumber] = [];
        weeks[finalWeekNumber].push(rec);
        return;
      }

      // Include records from previous month only if they complete the first business week
      if (isFromPreviousMonth && finalWeekNumber === 1) {
        // Only include if the record falls within the first business week span
        if (recordDate >= firstBusinessMonday) {
          if (!weeks[finalWeekNumber]) weeks[finalWeekNumber] = [];
          weeks[finalWeekNumber].push(rec);
        }
      }
    });
  } else {
    // Fallback: simple grouping by date for backwards compatibility
    sortedRecords.forEach((rec) => {
      const week = getWeekOfMonthISO(rec.date);
      if (!weeks[week]) weeks[week] = [];
      weeks[week].push(rec);
    });
  }

  return weeks;
}

function sumDrums(records: ProductionRecord[]) {
  return records.reduce((sum, rec) => {
    return sum + (rec.drumProductionByHour?.reduce((a, b) => a + (b.count || 0), 0) || 0);
  }, 0);
}

function sumStock(
  records: ProductionRecord[],
  key: 'drumStock' | 'bagStock',
  field: 'initial' | 'final',
) {
  return records.reduce((sum, rec) => {
    let value: number | undefined;
    if (key === 'drumStock' && rec.drumStock) {
      value = field === 'initial' ? rec.drumStock.initial : rec.drumStock.total;
    } else if (key === 'bagStock' && rec.bagStock) {
      value = field === 'initial' ? rec.bagStock.initial : rec.bagStock.total;
    }
    return sum + (typeof value === 'number' ? value : 0);
  }, 0);
}

function sumGas(records: ProductionRecord[]) {
  // Sum all gas values for the month
  const monthlyValue = records.reduce((sum, rec) => {
    return sum + (rec.gasControl?.reduce((a, g) => a + (g.value || 0), 0) || 0);
  }, 0);
  const monthlyPercentage = records.reduce((sum, rec) => {
    return sum + (rec.gasControl?.reduce((a, g) => a + (g.percentage || 0), 0) || 0);
  }, 0);
  return {
    value: monthlyValue,
    percentage: monthlyPercentage,
  };
}

// Add helper for weekly gas sum
function sumGasForWeek(records: ProductionRecord[]) {
  return records.reduce((sum, rec) => {
    return sum + (rec.gasControl?.reduce((a, g) => a + (g.value || 0), 0) || 0);
  }, 0);
}

// Helper to get the initial gas value for a record (first value in gasControl array)
function getInitialGasValue(rec: ProductionRecord): number | null {
  if (rec.gasControl && rec.gasControl.length > 0) {
    return rec.gasControl[0].value ?? null;
  }
  return null;
}

// Calculate monthly gas consumption as described by the client
function calculateMonthlyGasConsumption(records: ProductionRecord[]): number {
  // Sort records by date ascending
  const sorted = [...records].sort((a, b) => (a.date < b.date ? -1 : 1));
  let totalConsumption = 0;
  let prevValue: number | null = null;

  for (const rec of sorted) {
    const initial = getInitialGasValue(rec);
    if (typeof initial !== 'number') continue;
    if (prevValue === null) {
      prevValue = initial;
      continue;
    }
    if (initial > prevValue) {
      // Recharge detected, reset
      prevValue = initial;
      continue;
    }
    // Consumption: add difference
    totalConsumption += prevValue - initial;
    prevValue = initial;
  }
  return totalConsumption;
}
export {
  getWeekOfMonthISO,
  groupRecordsByWeek,
  sumDrums,
  sumStock,
  sumGas,
  sumGasForWeek,
  getInitialGasValue,
  calculateMonthlyGasConsumption,
};

/**
 * Helper function to calculate totals using business week logic
 * This ensures consistency between weekly view and monthly totals
 */
export function calculateBusinessMonthlyTotals(
  records: ProductionRecord[],
  targetMonth: number,
  targetYear: number,
) {
  // Use the same logic as weekly grouping to include previous month overflow
  const weeks = groupRecordsByWeek(records, targetMonth, targetYear);

  // Get all records that belong to this month's business weeks
  const allBusinessWeekRecords = Object.values(weeks).flat();

  return {
    totalDrums: sumDrums(allBusinessWeekRecords),
    totalKgs: sumDrums(allBusinessWeekRecords) * 240,
    totalGasConsumption: calculateMonthlyGasConsumption(allBusinessWeekRecords),
    lastRecord:
      allBusinessWeekRecords.length > 0
        ? [...allBusinessWeekRecords].sort((a, b) => (a.date < b.date ? 1 : -1))[0]
        : null,
  };
}

/**
 * Helper function to calculate totals using calendar month logic
 * This is the traditional approach that only includes the target month
 */
export function calculateCalendarMonthlyTotals(
  records: ProductionRecord[],
  targetMonth: number,
  targetYear: number,
) {
  // Filter records to only include those from the calendar month
  const monthlyRecords = records.filter((rec) => {
    const [year, month, day] = rec.date.split('-').map(Number);
    const recordDate = new Date(year, month - 1, day);
    return recordDate.getMonth() === targetMonth && recordDate.getFullYear() === targetYear;
  });

  return {
    totalDrums: sumDrums(monthlyRecords),
    totalKgs: sumDrums(monthlyRecords) * 240,
    totalGasConsumption: calculateMonthlyGasConsumption(monthlyRecords),
    lastRecord:
      monthlyRecords.length > 0
        ? [...monthlyRecords].sort((a, b) => (a.date < b.date ? 1 : -1))[0]
        : null,
  };
}
