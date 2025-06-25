import { getWeek, startOfMonth } from 'date-fns';

import { ProductionRecord } from '@/services/production/types';

function getWeekOfMonthISO(dateString: string) {
  const date = new Date(dateString);
  return getWeek(date) - getWeek(startOfMonth(date)) + 1;
}

function groupRecordsByWeek(records: ProductionRecord[]) {
  const weeks: Record<number, ProductionRecord[]> = {};
  records.forEach((rec) => {
    const week = getWeekOfMonthISO(rec.date);
    if (!weeks[week]) weeks[week] = [];
    weeks[week].push(rec);
  });
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
