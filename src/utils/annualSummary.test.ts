// src/utils/annualSummary.test.ts
import { describe, expect, it } from 'vitest';

import { ProductionRecord } from '@/services/production/types';
import { getMonthlySummary, getYearlyTotals } from '@/utils/annualSummary';

function makeRecord(
  date: string,
  bins: { source: string; quantity: number }[] = [],
  drumCount: number = 0,
): ProductionRecord {
  return {
    id: date,
    date,
    startTime: '09:00',
    endTime: '19:00',
    drumProductionByHour: drumCount > 0 ? [{ range: '09:00-10:00', count: drumCount }] : [],
    gasControl: [],
    drumStock: { initial: 0, used: 0, total: 0 },
    bagStock: { initial: 0, used: 0, damaged: 0, total: 0 },
    binsStatus: bins,
    binsMalfunction: 0,
    brix: { 1: 0, 2: 0, 3: 0 },
    totalDrumsWeight: 0,
    totalExistence: 0,
    totalProcessed: 0,
    totalFinal: 0,
  };
}

describe('getMonthlySummary', () => {
  it('returns 12 empty months when no records', () => {
    const summary = getMonthlySummary([], 2026);
    expect(summary).toHaveLength(12);
    summary.forEach((m) => {
      expect(m.binsEntrados).toBe(0);
      expect(m.kgEntrados).toBe(0);
      expect(m.tamboresSalidos).toBe(0);
      expect(m.kgSalidos).toBe(0);
    });
  });

  it('aggregates bins and drums per month for a given year', () => {
    const records = [
      makeRecord(
        '2026-03-15',
        [
          { source: 'Inicio', quantity: 5 },
          { source: 'Chechito', quantity: 3 },
        ],
        10,
      ),
      makeRecord('2026-03-20', [{ source: 'Don Luis', quantity: 7 }], 5),
    ];
    const summary = getMonthlySummary(records, 2026);
    const march = summary[2];
    expect(march.binsEntrados).toBe(15);
    expect(march.kgEntrados).toBe(15 * 700);
    expect(march.tamboresSalidos).toBe(15);
    expect(march.kgSalidos).toBe(15 * 240);
  });

  it('excludes records from other years', () => {
    const records = [
      makeRecord('2025-06-01', [{ source: 'Inicio', quantity: 999 }], 999),
      makeRecord('2026-06-01', [{ source: 'Inicio', quantity: 1 }], 1),
    ];
    const summary = getMonthlySummary(records, 2026);
    expect(summary[5].binsEntrados).toBe(1);
    expect(summary[5].tamboresSalidos).toBe(1);
  });

  it('uses Spanish month labels', () => {
    const summary = getMonthlySummary([], 2026);
    expect(summary[0].monthLabel).toBe('Ene');
    expect(summary[5].monthLabel).toBe('Jun');
    expect(summary[11].monthLabel).toBe('Dic');
  });

  it('handles records with missing binsStatus and drumProductionByHour', () => {
    const rec: ProductionRecord = {
      id: '2026-07-01',
      date: '2026-07-01',
      startTime: '09:00',
      endTime: '19:00',
      drumProductionByHour: [],
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
    };
    const summary = getMonthlySummary([rec], 2026);
    expect(summary[6].binsEntrados).toBe(0);
    expect(summary[6].tamboresSalidos).toBe(0);
  });
});

describe('getYearlyTotals', () => {
  it('sums all 12 months', () => {
    const summary = getMonthlySummary([], 2026);
    summary[0].binsEntrados = 10;
    summary[0].kgEntrados = 7000;
    summary[0].tamboresSalidos = 20;
    summary[0].kgSalidos = 4800;
    summary[1].binsEntrados = 5;
    summary[1].kgEntrados = 3500;
    summary[1].tamboresSalidos = 10;
    summary[1].kgSalidos = 2400;
    const totals = getYearlyTotals(summary);
    expect(totals.binsEntrados).toBe(15);
    expect(totals.kgEntrados).toBe(10500);
    expect(totals.tamboresSalidos).toBe(30);
    expect(totals.kgSalidos).toBe(7200);
    expect(totals.monthLabel).toBe('Total');
  });

  it('returns zeros for empty summary', () => {
    const summary = getMonthlySummary([], 2026);
    const totals = getYearlyTotals(summary);
    expect(totals.binsEntrados).toBe(0);
    expect(totals.kgSalidos).toBe(0);
  });
});
