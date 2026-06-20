// Helper for annual view aggregation (PRD items 10-12).
// Aggregates production records by month for a given year.
import { ProductionRecord } from '@/services/production/types';
import { binsToKgs, drumsToKgs } from '@/utils/conversionFactors';

export type MonthlySummary = {
  month: number; // 0-based
  monthLabel: string; // e.g. 'Jun'
  binsEntrados: number;
  kgEntrados: number;
  tamboresSalidos: number;
  kgSalidos: number;
};

const MONTH_LABELS_ES = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export function getMonthlySummary(records: ProductionRecord[], year: number): MonthlySummary[] {
  const summary: MonthlySummary[] = Array.from({ length: 12 }, (_, m) => ({
    month: m,
    monthLabel: MONTH_LABELS_ES[m],
    binsEntrados: 0,
    kgEntrados: 0,
    tamboresSalidos: 0,
    kgSalidos: 0,
  }));

  for (const rec of records) {
    const [y, m] = rec.date.split('-').map(Number);
    if (y !== year) continue;
    const monthIdx = m - 1;
    if (monthIdx < 0 || monthIdx > 11) continue;

    const entry = summary[monthIdx];
    for (const b of rec.binsStatus || []) {
      entry.binsEntrados += b.quantity || 0;
    }
    entry.kgEntrados = binsToKgs(entry.binsEntrados);

    const drums = (rec.drumProductionByHour || []).reduce((s, h) => s + (h.count || 0), 0);
    entry.tamboresSalidos += drums;
    entry.kgSalidos = drumsToKgs(entry.tamboresSalidos);
  }

  return summary;
}

export function getYearlyTotals(summary: MonthlySummary[]): MonthlySummary {
  return summary.reduce(
    (acc, m) => ({
      month: -1,
      monthLabel: 'Total',
      binsEntrados: acc.binsEntrados + m.binsEntrados,
      kgEntrados: acc.kgEntrados + m.kgEntrados,
      tamboresSalidos: acc.tamboresSalidos + m.tamboresSalidos,
      kgSalidos: acc.kgSalidos + m.kgSalidos,
    }),
    {
      month: -1,
      monthLabel: 'Total',
      binsEntrados: 0,
      kgEntrados: 0,
      tamboresSalidos: 0,
      kgSalidos: 0,
    },
  );
}
