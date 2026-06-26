// Helper for gas precarga feature (PRD item 5).
// Returns the gas values for each day (lun-sab) of the week containing targetDate.
import { addDays, eachDayOfInterval, format, getDay, parseISO, startOfWeek } from 'date-fns';

import { ProductionRecord } from '@/services/production/types';

const DIAS_KEYS_RAW = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'] as const;
export const DIAS_KEYS: readonly DiaKey[] = DIAS_KEYS_RAW;
export type DiaKey = (typeof DIAS_KEYS_RAW)[number];

export const DIAS_LABELS: Record<DiaKey, string> = {
  lunes: 'Lunes',
  martes: 'Martes',
  miercoles: 'Miércoles',
  jueves: 'Jueves',
  viernes: 'Viernes',
  sabado: 'Sabado',
};

export const DIAS_LABELS_INDEX: Record<number, DiaKey | 'domingo'> = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado',
};

export type GasDayEntry = {
  date: string;
  hasData: boolean;
  value: number | string;
  percentage: number | string;
};

export type WeeklyGasHistory = Record<DiaKey, GasDayEntry>;

export function getCurrentDayKey(targetDate: string): DiaKey | 'domingo' {
  const date = parseISO(targetDate + 'T12:00:00');
  const dow = getDay(date);
  return DIAS_LABELS_INDEX[dow];
}

export function getWeeklyGasHistory(
  targetDate: string,
  records: ProductionRecord[],
): WeeklyGasHistory {
  const date = parseISO(targetDate + 'T12:00:00');
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const days = eachDayOfInterval({ start: weekStart, end: addDays(weekStart, 5) }); // Mon-Sat

  const result = {} as WeeklyGasHistory;

  days.forEach((day, idx) => {
    const dayKey = DIAS_KEYS[idx];
    const dayStr = format(day, 'yyyy-MM-dd');
    const record = records.find((r) => r.date === dayStr);
    const firstGas = record?.gasControl?.[idx];

    if (record && firstGas) {
      result[dayKey] = {
        date: dayStr,
        hasData: true,
        value: firstGas.value ?? '',
        percentage: firstGas.percentage ?? '',
      };
    } else {
      result[dayKey] = {
        date: dayStr,
        hasData: false,
        value: '',
        percentage: '',
      };
    }
  });

  return result;
}

// Returns true if any past day of the current week has no gas data.
// "Past" = strictly before the target date within the same ISO week.
export function hasPastDayWithoutData(targetDate: string, history: WeeklyGasHistory): boolean {
  const date = parseISO(targetDate + 'T12:00:00');
  return DIAS_KEYS.some((key) => {
    const entry = history[key];
    if (!entry) return false;
    const entryDate = parseISO(entry.date + 'T12:00:00');
    return entryDate < date && !entry.hasData;
  });
}
