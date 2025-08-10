import { eachWeekOfInterval, endOfMonth, format, getDate, parseISO, startOfMonth } from 'date-fns';

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
    // New approach: Use eachWeekOfInterval to get complete weeks for the month
    const monthStart = startOfMonth(new Date(targetYear, targetMonth, 1));
    const monthEnd = endOfMonth(monthStart);

    // Get all weeks that intersect with this month (Monday to Sunday)
    const weeksInMonth = eachWeekOfInterval(
      { start: monthStart, end: monthEnd },
      { weekStartsOn: 1 }, // Monday = 1
    );

    console.log(`Month: ${format(monthStart, 'MMMM yyyy')}`);
    console.log(
      'Weeks in month:',
      weeksInMonth.map((week) => format(week, 'MMM dd')),
    );

    // Initialize weeks object
    weeksInMonth.forEach((_, index) => {
      weeks[index + 1] = [];
    });

    // Group records into their corresponding weeks
    sortedRecords.forEach((rec) => {
      // Parse date with timezone consistency
      const recordDate = parseISO(rec.date + 'T12:00:00');
      const recordDay = recordDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

      // Business requirement: Only include Monday (1) through Friday (5)
      if (recordDay === 0 || recordDay === 6) {
        return; // Skip weekends (Saturday=6, Sunday=0)
      }

      // IMPORTANT: Only include records that belong to the target month
      const recordMonth = recordDate.getMonth();
      const recordYear = recordDate.getFullYear();
      if (recordMonth !== targetMonth || recordYear !== targetYear) {
        return; // Skip records from other months
      }

      // Find which week this record belongs to
      const weekIndex = weeksInMonth.findIndex((weekStart) => {
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6); // Sunday of the same week

        return recordDate >= weekStart && recordDate <= weekEnd;
      });

      if (weekIndex !== -1) {
        const weekNumber = weekIndex + 1;
        weeks[weekNumber].push(rec);
      }
    });

    // Remove empty weeks
    Object.keys(weeks).forEach((weekKey) => {
      const weekNum = parseInt(weekKey);
      if (weeks[weekNum].length === 0) {
        delete weeks[weekNum];
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
 * Helper function to get week information including dates that make up each week
 * This is useful for showing date ranges in the UI
 */
export function getWeekInfo(targetMonth: number, targetYear: number) {
  const monthStart = startOfMonth(new Date(targetYear, targetMonth, 1));
  const monthEnd = endOfMonth(monthStart);

  // Get all weeks that intersect with this month (Monday to Sunday)
  const weeksInMonth = eachWeekOfInterval(
    { start: monthStart, end: monthEnd },
    { weekStartsOn: 1 }, // Monday = 1
  );

  return weeksInMonth
    .map((weekStart, index) => {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6); // Sunday of the same week

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

      return {
        weekNumber: index + 1,
        weekStart: format(weekStart, 'MMM dd'),
        weekEnd: format(weekEnd, 'MMM dd'),
        businessDaysInTargetMonth,
        hasData: businessDaysInTargetMonth.length > 0,
      };
    })
    .filter((week) => week.hasData); // Only return weeks that have business days in target month
}

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

export function weeklyProduction(
  weekRecords: ProductionRecord[],
  weekInfo: {
    weekNumber: number;
    weekStart: string;
    weekEnd: string;
    businessDaysInTargetMonth: string[];
    hasData: boolean;
  }[],
  week: string,
) {
  const weekTotalProducedDrumbs = sumDrums(weekRecords);
  const weekTotalProducedKgs = weekTotalProducedDrumbs * 240;
  // const drumStock = sumStock(weekRecords, 'drumStock', 'final');
  const lastRecord = weekRecords[weekRecords.length - 1];
  const finalWeeklyDrumStock =
    weekRecords.length > 0 && lastRecord.drumStock ? lastRecord.drumStock.total : 0;
  // const bagStock = sumStock(weekRecords, 'bagStock', 'final');
  const totalFinalBagStock =
    weekRecords.length > 0 && lastRecord.bagStock ? lastRecord.bagStock.total : 0;
  // Use the last record's gasControl value for the week (usually Friday)
  const gas =
    lastRecord && lastRecord.gasControl && lastRecord.gasControl.length > 0
      ? lastRecord.gasControl[0].value
      : 0;

  // Find the corresponding week info for date display
  const currentWeekInfo = weekInfo.find((w) => w.weekNumber === parseInt(week));
  const dateRange = currentWeekInfo ? currentWeekInfo.businessDaysInTargetMonth.join(', ') : '';
  const countCurrentWeekWithProduction = weekRecords.length;
  console.log({
    week,
    weekRecords,
    weekInfo,
    currentWeekInfo,
  });
  // const countDaysWithProduction =
  return {
    gas,
    dateRange,
    countCurrentWeekWithProduction,
    totalFinalBagStock,
    finalWeeklyDrumStock,
    weekTotalProducedKgs,
    weekTotalProducedDrumbs,
    currentWeekInfo,
  };
}
