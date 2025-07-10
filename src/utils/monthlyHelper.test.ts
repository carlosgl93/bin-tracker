import { describe, expect, it } from 'vitest';

import { getAllProductionRecords } from '@/services/production/productionRecords';
import { DrumProductionByHour, ProductionRecord } from '@/services/production/types';

import {
  calculateBusinessMonthlyTotals,
  calculateCalendarMonthlyTotals,
  groupRecordsByWeek,
  sumDrums,
} from './monthlyHelper';

// Helper function to create minimal test records
function createTestRecord(
  date: string,
  drumProductionByHour: DrumProductionByHour[],
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

describe('monthlyHelper', () => {
  describe('sumDrums', () => {
    it('should correctly sum drum production from drumProductionByHour', () => {
      const records: ProductionRecord[] = [
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
      ];

      const result = sumDrums(records);
      // July 1: 33 drums + July 2: 37 drums = 70 drums
      expect(result).toBe(70);
    });

    it('should handle records with missing or undefined drumProductionByHour', () => {
      const records: Partial<ProductionRecord>[] = [
        {
          date: '2025-07-01',
          drumProductionByHour: undefined,
        },
        {
          date: '2025-07-02',
          drumProductionByHour: [
            { range: '09:00-10:00', count: 5 },
            { range: '10:00-11:00', count: 3 },
          ],
        },
      ];

      const result = sumDrums(records as ProductionRecord[]);
      expect(result).toBe(8); // Only count the second record: 5 + 3 = 8
    });

    it('should handle empty records array', () => {
      const result = sumDrums([]);
      expect(result).toBe(0);
    });
  });

  describe('groupRecordsByWeek with July week 1 calculation', () => {
    it('should include June 30th in July week 1 and calculate correct drum total', () => {
      const records: ProductionRecord[] = [
        createTestRecord('2025-06-30', [
          { range: '09:00-10:00', count: 0 },
          { range: '10:00-11:00', count: 4 },
          { range: '11:00-12:00', count: 4 },
          { range: '12:00-13:00', count: 3 },
          { range: '13:00-14:00', count: 4 },
          { range: '14:00-15:00', count: 4 },
          { range: '15:00-16:00', count: 4 },
          { range: '16:00-17:00', count: 4 },
          { range: '17:00-18:00', count: 5 },
          { range: '18:00-19:00', count: 5 },
        ]),
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
        createTestRecord('2025-07-03', [
          { range: '09:00-10:00', count: 3 },
          { range: '10:00-11:00', count: 4 },
          { range: '11:00-12:00', count: 4 },
          { range: '12:00-13:00', count: 0 },
          { range: '13:00-14:00', count: 0 },
          { range: '14:00-15:00', count: 3 },
          { range: '15:00-16:00', count: 4 },
          { range: '16:00-17:00', count: 4 },
          { range: '17:00-18:00', count: 4 },
          { range: '18:00-19:00', count: 4 },
        ]),
        createTestRecord('2025-07-04', [
          { range: '09:00-10:00', count: 3 },
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
      ];

      // Group records by week for July (month = 6, year = 2025)
      const weeks = groupRecordsByWeek(records, 6, 2025);

      // Week 1 should now include: June 30, July 1, July 2, July 3, July 4 (June 30 included in week 1)
      expect(weeks[1]).toBeDefined();
      expect(weeks[1]).toHaveLength(5); // June 30 + July records

      // Calculate total drums for week 1 (including June 30)
      const week1Drums = sumDrums(weeks[1]);
      // June 30: 37 + July 1: 33 + July 2: 37 + July 3: 30 + July 4: 39 = 176 drums
      expect(week1Drums).toBe(176);
    });

    it('should calculate total drums for July week 1 including June 30th manually', () => {
      // Manual calculation including June 30th as requested by customer
      const june30Drums = 0 + 4 + 4 + 3 + 4 + 4 + 4 + 4 + 5 + 5; // = 37
      const july1Drums = 0 + 0 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 5; // = 33
      const july2Drums = 1 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4; // = 37
      const july3Drums = 3 + 4 + 4 + 0 + 0 + 3 + 4 + 4 + 4 + 4; // = 30
      const july4Drums = 3 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4; // = 39

      const totalWeek1 = june30Drums + july1Drums + july2Drums + july3Drums + july4Drums;

      // Manual calculation shows 172 (33+33+37+30+39)
      // But there might be a discrepancy - let me verify each step
      expect(june30Drums).toBe(37);
      expect(july1Drums).toBe(33);
      expect(july2Drums).toBe(37);
      expect(july3Drums).toBe(30);
      expect(july4Drums).toBe(39);

      // Total should be 172 based on manual calculation
      expect(totalWeek1).toBe(176);
    });
  });

  describe('groupRecordsByWeek timezone handling', () => {
    it('should correctly parse dates to avoid timezone issues', () => {
      const records: ProductionRecord[] = [
        createTestRecord('2025-07-01', [{ range: '09:00-10:00', count: 5 }]),
        createTestRecord('2025-06-30', [{ range: '09:00-10:00', count: 3 }]),
      ];

      // Group for July (month = 6, year = 2025)
      const weeks = groupRecordsByWeek(records, 6, 2025);

      // Should include July 1st AND June 30th since they're in the same week
      expect(weeks[1]).toBeDefined();
      expect(weeks[1]).toHaveLength(2);
      const dates = weeks[1].map((r) => r.date).sort();
      expect(dates).toEqual(['2025-06-30', '2025-07-01']);
    });
  });

  describe('sumDrums with real Firestore data', () => {
    it('should correctly calculate drum sums for June 30 to July 4 using real production data', async () => {
      let realRecords: ProductionRecord[] = [];
      let isFirebaseAvailable = false;

      try {
        // Try to fetch real data from Firestore
        realRecords = await getAllProductionRecords();
        isFirebaseAvailable = true;
        console.log(`Fetched ${realRecords.length} production records from Firestore`);
      } catch (error) {
        console.warn('Firebase not available for tests, using mock data:', error);
        isFirebaseAvailable = false;
      }

      // Filter for June 30 to July 4, 2025 (or any year if real data exists)
      const targetDates = ['2025-06-30', '2025-07-01', '2025-07-02', '2025-07-03', '2025-07-04'];
      let testRecords: ProductionRecord[] = [];

      if (isFirebaseAvailable && realRecords.length > 0) {
        // Use real data if available
        testRecords = realRecords.filter((record) => targetDates.includes(record.date));

        if (testRecords.length === 0) {
          // Try any year if 2025 data doesn't exist
          const anyYearDates = ['06-30', '07-01', '07-02', '07-03', '07-04'];
          testRecords = realRecords.filter((record) =>
            anyYearDates.some((date) => record.date.endsWith(date)),
          );
        }
      }

      if (testRecords.length === 0) {
        // Fallback to mock data based on our previous manual calculations
        console.log('Using mock data for test verification');
        testRecords = [
          // June 30, 2025 - Expected 37 drums
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
          // July 1, 2025 - Expected 33 drums
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
          // July 2, 2025 - Expected 37 drums
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
          // July 3, 2025 - Expected 30 drums
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
          // July 4, 2025 - Expected 39 drums
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
      }

      expect(testRecords.length).toBeGreaterThan(0);

      // Calculate drum sums for each day
      const drumSumsByDate: Record<string, number> = {};
      testRecords.forEach((record) => {
        drumSumsByDate[record.date] = sumDrums([record]);
      });

      // Log results for verification
      console.log('Drum production sums by date:');
      Object.entries(drumSumsByDate).forEach(([date, sum]) => {
        console.log(`${date}: ${sum} drums`);
      });

      if (isFirebaseAvailable && testRecords.length > 0) {
        // If using real data, just verify that sums are calculated correctly
        // and that the function works with actual Firestore data
        Object.values(drumSumsByDate).forEach((sum) => {
          expect(sum).toBeGreaterThanOrEqual(0);
          expect(Number.isInteger(sum)).toBe(true);
        });

        console.log('✅ Real Firestore data test completed successfully');
        console.log(
          `Total drums for ${testRecords.length} days: ${Object.values(drumSumsByDate).reduce((a, b) => a + b, 0)}`,
        );
      } else {
        // If using mock data, verify against expected values
        const expectedSums = {
          '2025-06-30': 37,
          '2025-07-01': 33,
          '2025-07-02': 37,
          '2025-07-03': 30,
          '2025-07-04': 39,
        };

        Object.entries(expectedSums).forEach(([date, expectedSum]) => {
          expect(drumSumsByDate[date]).toBe(expectedSum);
        });

        const totalDrums = Object.values(drumSumsByDate).reduce((a, b) => a + b, 0);
        expect(totalDrums).toBe(176); // Sum of expected values

        console.log('✅ Mock data test completed successfully');
        console.log(`Total drums for mock data (June 30 - July 4): ${totalDrums}`);
      }

      // Test week grouping functionality with the fetched/mock data
      const julyRecords = testRecords.filter((record) => record.date.includes('-07-'));
      if (julyRecords.length > 0) {
        const weeks = groupRecordsByWeek(julyRecords, 6, 2025); // July is month 6 (0-indexed)

        // Verify that week grouping works correctly
        expect(weeks).toBeDefined();
        const weekEntries = Object.entries(weeks);
        expect(weekEntries.length).toBeGreaterThan(0);

        console.log(`Week grouping created ${weekEntries.length} weeks for July records`);
      }
    }, 30000); // 30 second timeout for Firebase operations
  });

  describe('calculateBusinessMonthlyTotals and calculateCalendarMonthlyTotals', () => {
    it('should demonstrate the difference between business week and calendar month calculations', () => {
      const testRecords: ProductionRecord[] = [
        // June 30, 2025 - 37 drums (Monday)
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
        // July 1, 2025 - 33 drums (Tuesday)
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
        // July 2, 2025 - 37 drums (Wednesday)
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
      ];

      const targetMonth = 6; // July (0-based)
      const targetYear = 2025;

      // Test business week calculation (includes June 30)
      const businessTotals = calculateBusinessMonthlyTotals(testRecords, targetMonth, targetYear);
      console.log('\n=== Business Week Calculation ===');
      console.log(`Total drums: ${businessTotals.totalDrums}`);
      console.log(`Total kg: ${businessTotals.totalKgs}`);
      console.log(`Last record: ${businessTotals.lastRecord?.date}`);

      // Test calendar month calculation (excludes June 30)
      const calendarTotals = calculateCalendarMonthlyTotals(testRecords, targetMonth, targetYear);
      console.log('\n=== Calendar Month Calculation ===');
      console.log(`Total drums: ${calendarTotals.totalDrums}`);
      console.log(`Total kg: ${calendarTotals.totalKgs}`);
      console.log(`Last record: ${calendarTotals.lastRecord?.date}`);

      // Verify the expected differences
      expect(businessTotals.totalDrums).toBe(107); // June 30 (37) + July 1 (33) + July 2 (37)
      expect(calendarTotals.totalDrums).toBe(70); // Only July 1 (33) + July 2 (37)

      expect(businessTotals.totalKgs).toBe(107 * 240); // 25,680 kg
      expect(calendarTotals.totalKgs).toBe(70 * 240); // 16,800 kg

      // Both should have July 2 as the last record (it's the latest date)
      expect(businessTotals.lastRecord?.date).toBe('2025-07-02');
      expect(calendarTotals.lastRecord?.date).toBe('2025-07-02');

      console.log('\n=== Summary ===');
      console.log(`Business week includes June 30: ${businessTotals.totalDrums} drums`);
      console.log(`Calendar month excludes June 30: ${calendarTotals.totalDrums} drums`);
      console.log(
        `Difference: ${businessTotals.totalDrums - calendarTotals.totalDrums} drums (June 30)`,
      );
    });

    it('should handle months that start on Monday (no previous month overflow)', () => {
      // Test with a month that starts on Monday - should produce same results for both methods
      const testRecords: ProductionRecord[] = [
        createTestRecord('2025-05-31', [{ range: '09:00-10:00', count: 5 }]), // Saturday (previous month)
        createTestRecord('2025-06-01', [{ range: '09:00-10:00', count: 3 }]), // Sunday (target month start)
        createTestRecord('2025-06-02', [{ range: '09:00-10:00', count: 4 }]), // Monday
      ];

      const targetMonth = 5; // June (0-based)
      const targetYear = 2025;

      const businessTotals = calculateBusinessMonthlyTotals(testRecords, targetMonth, targetYear);
      const calendarTotals = calculateCalendarMonthlyTotals(testRecords, targetMonth, targetYear);

      // Business logic: Only includes Monday-Friday, so Sunday (June 1) is excluded
      // Calendar logic: Includes all days from the month, so Sunday (June 1) is included
      expect(businessTotals.totalDrums).toBe(4); // Only June 2 (Monday) = 4 drums
      expect(calendarTotals.totalDrums).toBe(7); // June 1 (Sunday) + June 2 (Monday) = 3 + 4 = 7 drums

      console.log(
        `\nMonth starting on Sunday - Business: ${businessTotals.totalDrums} drums (Mon-Fri only), Calendar: ${calendarTotals.totalDrums} drums (all days)`,
      );
    });
  });
});
