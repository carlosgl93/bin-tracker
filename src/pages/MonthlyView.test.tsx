import { describe, expect, it, vi } from 'vitest';

import * as productionService from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';
import { groupRecordsByWeek, sumDrums } from '@/utils/monthlyHelper';

// Mock the production service
vi.mock('@/services/production/productionRecords');

// Helper to create test records
function createTestRecord(
  date: string,
  drumProductionByHour: Array<{ range: string; count: number }>,
): ProductionRecord {
  return {
    date,
    startTime: '',
    endTime: '',
    gasControl: [],
    drumStock: { initial: 0, used: 0, total: 0 },
    bagStock: { initial: 0, used: 0, damaged: 0, total: 0 },
    binsStatus: [],
    binsMalfunction: 0,
    totalExistence: 0,
    totalProcessed: 0,
    totalFinal: 0,
    brix: { 1: 0, 2: 0, 3: 0, average: 0 },
    totalDrumsWeight: 0,
    drumProductionByHour,
  };
}

// Test data that matches our real Firestore data
const testRecords: ProductionRecord[] = [
  // June 30, 2025 - 37 drums
  createTestRecord('2025-06-30', [
    { range: '09:00-10:00', count: 1 },
    { range: '10:00-11:00', count: 4 },
    { range: '11:00-12:00', count: 4 },
    { range: '12:00-13:00', count: 4 },
    { range: '13:00-14:00', count: 4 },
    { range: '14:00-15:00', count: 4 },
    { range: '15:00-16:00', count: 4 },
    { range: '16:00-17:00', count: 4 },
    { range: '17:00-18:00', count: 4 },
    { range: '18:00-19:00', count: 4 },
  ]),
  // July 1, 2025 - 33 drums
  createTestRecord('2025-07-01', [
    { range: '09:00-10:00', count: 0 },
    { range: '10:00-11:00', count: 0 },
    { range: '11:00-12:00', count: 4 },
    { range: '12:00-13:00', count: 4 },
    { range: '13:00-14:00', count: 4 },
    { range: '14:00-15:00', count: 4 },
    { range: '15:00-16:00', count: 4 },
    { range: '16:00-17:00', count: 4 },
    { range: '17:00-18:00', count: 4 },
    { range: '18:00-19:00', count: 5 },
  ]),
  // July 2, 2025 - 37 drums
  createTestRecord('2025-07-02', [
    { range: '09:00-10:00', count: 1 },
    { range: '10:00-11:00', count: 4 },
    { range: '11:00-12:00', count: 4 },
    { range: '12:00-13:00', count: 4 },
    { range: '13:00-14:00', count: 4 },
    { range: '14:00-15:00', count: 4 },
    { range: '15:00-16:00', count: 4 },
    { range: '16:00-17:00', count: 4 },
    { range: '17:00-18:00', count: 4 },
    { range: '18:00-19:00', count: 4 },
  ]),
  // July 3, 2025 - 30 drums
  createTestRecord('2025-07-03', [
    { range: '09:00-10:00', count: 0 },
    { range: '10:00-11:00', count: 3 },
    { range: '11:00-12:00', count: 3 },
    { range: '12:00-13:00', count: 3 },
    { range: '13:00-14:00', count: 3 },
    { range: '15:00-16:00', count: 3 },
    { range: '16:00-17:00', count: 3 },
    { range: '17:00-18:00', count: 3 },
    { range: '18:00-19:00', count: 3 },
    { range: '19:00-20:00', count: 6 },
  ]),
  // July 4, 2025 - 39 drums
  createTestRecord('2025-07-04', [
    { range: '09:00-10:00', count: 0 },
    { range: '10:00-11:00', count: 3 },
    { range: '11:00-12:00', count: 4 },
    { range: '12:00-13:00', count: 4 },
    { range: '13:00-14:00', count: 4 },
    { range: '14:00-15:00', count: 4 },
    { range: '15:00-16:00', count: 4 },
    { range: '16:00-17:00', count: 4 },
    { range: '17:00-18:00', count: 4 },
    { range: '18:00-19:00', count: 4 },
    { range: '19:00-20:00', count: 4 },
  ]),
];

describe('MonthlyView UI logic comparison', () => {
  it('should verify the difference between UI logic and monthlyHelper logic', async () => {
    // Mock the service to return our test data
    const mockGetProductionRecordsByMonth = vi.mocked(
      productionService.getProductionRecordsByMonth,
    );
    mockGetProductionRecordsByMonth.mockResolvedValue(testRecords);

    // Test the monthlyHelper logic directly
    console.log('=== Testing monthlyHelper logic ===');

    // Test what groupRecordsByWeek returns for July 2025 (month=6, year=2025)
    const weeks = groupRecordsByWeek(testRecords, 6, 2025); // July = month 6 (0-based)
    console.log('Weeks grouped by monthlyHelper:', Object.keys(weeks));

    if (weeks[1]) {
      console.log('Week 1 records from monthlyHelper:');
      weeks[1].forEach((record) => {
        const drums = sumDrums([record]);
        console.log(`  ${record.date}: ${drums} drums`);
      });

      const week1Drums = sumDrums(weeks[1]);
      console.log(`Total Week 1 drums from monthlyHelper: ${week1Drums}`);

      // This should now be 176 (July 1-4 + June 30 as it's part of the same week)
      expect(week1Drums).toBe(176);
    }

    // Test what happens with the updated monthlyHelper logic
    console.log('\n=== Testing updated monthlyHelper logic ===');

    // Since monthlyHelper now includes June 30, let's verify the total is correct
    if (weeks[1]) {
      const totalWithHelper = sumDrums(weeks[1]);
      console.log(`Total Week 1 drums from helper (includes June 30): ${totalWithHelper}`);

      // This should be 176 (37+33+37+30+39)
      expect(totalWithHelper).toBe(176);
    }

    // Test what the MonthlyView component logic would produce
    console.log('\n=== Testing MonthlyView component logic ===');

    // Simulate the component's month filtering logic
    const targetMonth = 6; // July (0-based)
    const targetYear = 2025;

    const monthlyRecords = testRecords.filter((rec) => {
      const [year, month, day] = rec.date.split('-').map(Number);
      const recordDate = new Date(year, month - 1, day);
      return recordDate.getMonth() === targetMonth && recordDate.getFullYear() === targetYear;
    });

    console.log('Records filtered by MonthlyView logic:');
    monthlyRecords.forEach((record) => {
      const drums = sumDrums([record]);
      console.log(`  ${record.date}: ${drums} drums`);
    });

    const monthlyTotalDrums = sumDrums(monthlyRecords);
    console.log(`Total monthly drums from MonthlyView logic: ${monthlyTotalDrums}`);

    // This should also be 139 (only July records)
    expect(monthlyTotalDrums).toBe(139);

    // Both the monthlyHelper and MonthlyView should produce the same result
    // The discrepancy is that customer wants June 30 included, but the logic filters it out
    console.log('\n=== Summary ===');
    console.log(`monthlyHelper week 1: ${weeks[1] ? sumDrums(weeks[1]) : 0} drums`);
    console.log(`MonthlyView monthly total: ${monthlyTotalDrums} drums`);
    console.log(`Customer expectation (with June 30): 176 drums`);
    console.log(`Current UI will now show: 176 drums (July + June 30 in week 1)`);

    // The monthlyHelper should now include June 30 in week 1
    // But the MonthlyView monthly total should still be 139 (July only)
    expect(weeks[1] ? sumDrums(weeks[1]) : 0).toBe(176);
  });

  it('should test Stock Mensual section calculations and identify inconsistencies', async () => {
    // This test validates the "Stock Mensual" section calculations
    // and identifies the inconsistency between weekly and monthly totals

    // Mock the service to return our test data (includes June 30)
    const mockGetProductionRecordsForMonthlyView = vi.mocked(
      productionService.getProductionRecordsForMonthlyView,
    );
    mockGetProductionRecordsForMonthlyView.mockResolvedValue(testRecords);

    console.log('\n=== Testing Stock Mensual Section ===');

    // Simulate what the MonthlyView component does for monthly calculations
    const targetMonth = 6; // July (0-based)
    const targetYear = 2025;

    // 1. Test weekly calculation (groupRecordsByWeek with month/year filter)
    const weeks = groupRecordsByWeek(testRecords, targetMonth, targetYear);
    const weeklyTotalDrums = weeks[1] ? sumDrums(weeks[1]) : 0;
    console.log(`Weekly total (week 1): ${weeklyTotalDrums} drums`);
    expect(weeklyTotalDrums).toBe(176); // Should include June 30

    // 2. Test monthly calculation (current MonthlyView logic)
    const monthlyRecords = testRecords.filter((rec) => {
      const [year, month, day] = rec.date.split('-').map(Number);
      const recordDate = new Date(year, month - 1, day);
      return recordDate.getMonth() === targetMonth && recordDate.getFullYear() === targetYear;
    });
    const monthlyTotalDrums = sumDrums(monthlyRecords);
    console.log(`Monthly total (Stock Mensual): ${monthlyTotalDrums} drums`);
    expect(monthlyTotalDrums).toBe(139); // Excludes June 30

    // 3. Test monthly total in kg
    const monthlyTotalKgs = monthlyTotalDrums * 240;
    console.log(`Monthly total in kg: ${monthlyTotalKgs} kg`);
    expect(monthlyTotalKgs).toBe(139 * 240); // 33,360 kg

    // 4. Test that this creates an inconsistency
    console.log('\n=== Stock Mensual Inconsistency Detected ===');
    console.log(`Week 1 drums: ${weeklyTotalDrums}`);
    console.log(`Monthly total drums: ${monthlyTotalDrums}`);
    console.log(`Difference: ${weeklyTotalDrums - monthlyTotalDrums} drums`);

    // The inconsistency is:
    // - Weekly view shows 176 drums for week 1 (includes June 30)
    // - Stock Mensual shows 139 drums total (excludes June 30)
    // This is confusing for users!

    expect(weeklyTotalDrums).toBeGreaterThan(monthlyTotalDrums);
    expect(weeklyTotalDrums - monthlyTotalDrums).toBe(37); // June 30 drums

    // Business decision needed: Should Stock Mensual also include June 30?
    console.log('\n=== Business Decision Required ===');
    console.log('Should "Stock Mensual" include June 30 to match weekly view?');
    console.log('Option 1: Keep calendar month (139 drums) - current behavior');
    console.log('Option 2: Include business week overflow (176 drums) - matches weekly view');
  });

  it('should test gas consumption calculations consistency', async () => {
    // Test gas consumption calculations for consistency between weekly and monthly views

    // Mock records with gas data
    const recordsWithGas: ProductionRecord[] = testRecords.map((record, index) => ({
      ...record,
      gasControl: [{ day: record.date, value: 100 + index * 10, percentage: 50 + index * 5 }], // Mock gas data
    }));

    const mockGetProductionRecordsForMonthlyView = vi.mocked(
      productionService.getProductionRecordsForMonthlyView,
    );
    mockGetProductionRecordsForMonthlyView.mockResolvedValue(recordsWithGas);

    console.log('\n=== Testing Gas Consumption Calculations ===');

    const targetMonth = 6; // July (0-based)
    const targetYear = 2025;

    // Weekly gas calculation (should include June 30)
    const weeks = groupRecordsByWeek(recordsWithGas, targetMonth, targetYear);
    const weeklyRecords = weeks[1] || [];
    const weeklyGasTotal = weeklyRecords.reduce((sum, rec) => {
      return sum + (rec.gasControl?.reduce((a, g) => a + (g.value || 0), 0) || 0);
    }, 0);
    console.log(`Weekly gas total (includes June 30): ${weeklyGasTotal}`);

    // Monthly gas calculation (current logic, excludes June 30)
    const monthlyRecords = recordsWithGas.filter((rec) => {
      const [year, month, day] = rec.date.split('-').map(Number);
      const recordDate = new Date(year, month - 1, day);
      return recordDate.getMonth() === targetMonth && recordDate.getFullYear() === targetYear;
    });
    const monthlyGasTotal = monthlyRecords.reduce((sum, rec) => {
      return sum + (rec.gasControl?.reduce((a, g) => a + (g.value || 0), 0) || 0);
    }, 0);
    console.log(`Monthly gas total (excludes June 30): ${monthlyGasTotal}`);

    // Same inconsistency exists for gas consumption
    expect(weeklyGasTotal).toBeGreaterThan(monthlyGasTotal);
    console.log(`Gas difference: ${weeklyGasTotal - monthlyGasTotal}`);
  });

  it('should test stock values from last record consistency', async () => {
    // Test that the last record calculations are consistent

    const recordsWithStock: ProductionRecord[] = testRecords.map((record, index) => ({
      ...record,
      drumStock: { initial: 100 + index * 10, used: 5, total: 100 + index * 10 - 5 },
      bagStock: { initial: 200 + index * 20, used: 10, damaged: 2, total: 200 + index * 20 - 12 },
    }));

    const mockGetProductionRecordsForMonthlyView = vi.mocked(
      productionService.getProductionRecordsForMonthlyView,
    );
    mockGetProductionRecordsForMonthlyView.mockResolvedValue(recordsWithStock);

    console.log('\n=== Testing Stock Values from Last Record ===');

    const targetMonth = 6; // July (0-based)
    const targetYear = 2025;

    // Current MonthlyView logic: find last record from calendar month only
    const monthlyRecords = recordsWithStock.filter((rec) => {
      const [year, month, day] = rec.date.split('-').map(Number);
      const recordDate = new Date(year, month - 1, day);
      return recordDate.getMonth() === targetMonth && recordDate.getFullYear() === targetYear;
    });

    const lastMonthlyRecord =
      monthlyRecords.length > 0
        ? [...monthlyRecords].sort((a, b) => (a.date < b.date ? 1 : -1))[0]
        : null;

    // Alternative: find last record from all fetched records (includes June 30)
    const lastAllRecord =
      recordsWithStock.length > 0
        ? [...recordsWithStock].sort((a, b) => (a.date < b.date ? 1 : -1))[0]
        : null;

    console.log(`Last monthly record date: ${lastMonthlyRecord?.date}`);
    console.log(`Last all records date: ${lastAllRecord?.date}`);
    console.log(`Monthly drum stock: ${lastMonthlyRecord?.drumStock?.total}`);
    console.log(`All records drum stock: ${lastAllRecord?.drumStock?.total}`);

    // For July 2025, the last monthly record should be July 4
    // The last from all records should also be July 4 (since June 30 is earlier)
    expect(lastMonthlyRecord?.date).toBe('2025-07-04');
    expect(lastAllRecord?.date).toBe('2025-07-04');

    // Stock values should be the same since July 4 is the latest date
    expect(lastMonthlyRecord?.drumStock?.total).toBe(lastAllRecord?.drumStock?.total);
  });

  it('should verify MonthlyView now shows consistent calculations after using business week logic', async () => {
    // This test verifies that after updating MonthlyView to use calculateBusinessMonthlyTotals,
    // the weekly and monthly calculations are now consistent

    const mockGetProductionRecordsForMonthlyView = vi.mocked(
      productionService.getProductionRecordsForMonthlyView,
    );
    mockGetProductionRecordsForMonthlyView.mockResolvedValue(testRecords);

    console.log('\n=== Testing Updated MonthlyView Consistency ===');

    const targetMonth = 6; // July (0-based)
    const targetYear = 2025;

    // Test weekly calculation (same as before)
    const weeks = groupRecordsByWeek(testRecords, targetMonth, targetYear);
    const weeklyTotalDrums = weeks[1] ? sumDrums(weeks[1]) : 0;
    console.log(`Weekly total (week 1): ${weeklyTotalDrums} drums`);

    // Test NEW monthly calculation using business week logic
    const { calculateBusinessMonthlyTotals } = await import('@/utils/monthlyHelper');
    const businessTotals = calculateBusinessMonthlyTotals(testRecords, targetMonth, targetYear);

    console.log(`NEW Monthly total (business week): ${businessTotals.totalDrums} drums`);
    console.log(`NEW Monthly total in kg: ${businessTotals.totalKgs} kg`);
    console.log(`NEW Gas consumption: ${businessTotals.totalGasConsumption}`);
    console.log(`NEW Last record date: ${businessTotals.lastRecord?.date}`);

    // Now the weekly and monthly totals should be CONSISTENT!
    expect(weeklyTotalDrums).toBe(businessTotals.totalDrums);
    expect(weeklyTotalDrums).toBe(176); // Both should show 176 drums
    expect(businessTotals.totalKgs).toBe(176 * 240); // 42,240 kg

    console.log('\n=== ✅ CONSISTENCY ACHIEVED ===');
    console.log(`Week 1 drums: ${weeklyTotalDrums}`);
    console.log(`Monthly total drums: ${businessTotals.totalDrums}`);
    console.log(`✅ Both calculations now match!`);

    // The MonthlyView component should now show:
    // - Week 1: 176 drums (June 30 + July 1-4)
    // - Stock Mensual: 176 drums (same calculation)
    // - This provides a consistent user experience!
  });
});
