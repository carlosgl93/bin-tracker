import { describe, expect, it, vi } from 'vitest';

import { getProductionRecordsForMonthlyView } from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';
import {
  calculateBusinessMonthlyTotals,
  groupRecordsByWeek,
  sumDrums,
} from '@/utils/monthlyHelper';

// Mock Firestore
vi.mock('@/firebase', () => ({
  db: {},
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
}));

// Helper to create test records
function createTestRecord(
  date: string,
  drumProductionByHour: Array<{ range: string; count: number }> = [],
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

describe('Business Week Edge Cases - 2025 Comprehensive Testing', () => {
  describe('6-Week Months (Extended Scenarios)', () => {
    it('should handle March 2025 - 6 weeks with 5 previous month days', async () => {
      // March 1, 2025 = Saturday, so include Feb 24-28 (Mon-Fri)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // February days (should be included in March week 1)
          {
            id: '2025-02-24',
            data: () => createTestRecord('2025-02-24', [{ range: '09:00-10:00', count: 20 }]),
          },
          {
            id: '2025-02-25',
            data: () => createTestRecord('2025-02-25', [{ range: '09:00-10:00', count: 21 }]),
          },
          {
            id: '2025-02-26',
            data: () => createTestRecord('2025-02-26', [{ range: '09:00-10:00', count: 22 }]),
          },
          {
            id: '2025-02-27',
            data: () => createTestRecord('2025-02-27', [{ range: '09:00-10:00', count: 23 }]),
          },
          {
            id: '2025-02-28',
            data: () => createTestRecord('2025-02-28', [{ range: '09:00-10:00', count: 24 }]),
          },
          // March days
          {
            id: '2025-03-01',
            data: () => createTestRecord('2025-03-01', [{ range: '09:00-10:00', count: 25 }]),
          },
          {
            id: '2025-03-02',
            data: () => createTestRecord('2025-03-02', [{ range: '09:00-10:00', count: 26 }]),
          },
          {
            id: '2025-03-03',
            data: () => createTestRecord('2025-03-03', [{ range: '09:00-10:00', count: 27 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-03');

      // Should include February 24-28 because March 1 is Saturday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-02-24'); // Monday
      expect(dates).toContain('2025-02-25'); // Tuesday
      expect(dates).toContain('2025-02-26'); // Wednesday
      expect(dates).toContain('2025-02-27'); // Thursday
      expect(dates).toContain('2025-02-28'); // Friday
      expect(dates).toContain('2025-03-01'); // Saturday
      expect(dates).toContain('2025-03-02'); // Sunday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 2, 2025); // March = month 2
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);

      // Debug: Let's see what records are actually in week 1
      console.log('March 2025 debug - Week 1 records:');
      weeks[1].forEach((record) => {
        const drums =
          record.drumProductionByHour?.reduce((sum, entry) => sum + entry.count, 0) || 0;
        console.log(`  ${record.date}: ${drums} drums`);
      });
      console.log(`  Total: ${week1Total} drums`);

      // Week 1 includes: Feb 24-28 (Mon-Fri) ONLY - weekends excluded per business rules
      // Mar 1-2 (Sat-Sun) are excluded as weekends
      // Mar 3 (Monday) starts Week 2
      // Feb 24-28: 20+21+22+23+24 = 110 drums (weekdays only)
      // Total: 110 drums (Mar 1-2 and Mar 3 are NOT included in Week 1)
      expect(week1Total).toBe(110);

      console.log('March 2025 test - Week 1 includes Feb 24-28 + Mar 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
      console.log(`Fetched dates: ${dates}`);
    });

    it('should handle August 2025 - 6 weeks with 4 previous month days', async () => {
      // August 1, 2025 = Friday, so include July 28-31 (Mon-Thu)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // July days (should be included in August week 1)
          {
            id: '2025-07-28',
            data: () => createTestRecord('2025-07-28', [{ range: '09:00-10:00', count: 28 }]),
          },
          {
            id: '2025-07-29',
            data: () => createTestRecord('2025-07-29', [{ range: '09:00-10:00', count: 29 }]),
          },
          {
            id: '2025-07-30',
            data: () => createTestRecord('2025-07-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          {
            id: '2025-07-31',
            data: () => createTestRecord('2025-07-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // August days
          {
            id: '2025-08-01',
            data: () => createTestRecord('2025-08-01', [{ range: '09:00-10:00', count: 32 }]),
          },
          {
            id: '2025-08-02',
            data: () => createTestRecord('2025-08-02', [{ range: '09:00-10:00', count: 33 }]),
          },
          {
            id: '2025-08-03',
            data: () => createTestRecord('2025-08-03', [{ range: '09:00-10:00', count: 34 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-08');

      // Should include July 28-31 because August 1 is Friday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-07-28'); // Monday
      expect(dates).toContain('2025-07-29'); // Tuesday
      expect(dates).toContain('2025-07-30'); // Wednesday
      expect(dates).toContain('2025-07-31'); // Thursday
      expect(dates).toContain('2025-08-01'); // Friday
      expect(dates).toContain('2025-08-02'); // Saturday
      expect(dates).toContain('2025-08-03'); // Sunday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 7, 2025); // August = month 7
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 28+29+30+31+32 = 150 drums (Monday-Friday only, excludes Sat/Sun)
      expect(week1Total).toBe(150);

      console.log('August 2025 test - Week 1 includes Jul 28-31 + Aug 1-3');
      console.log(`Week 1 total: ${week1Total} drums`);
    });

    it('should handle November 2025 - 6 weeks with 5 previous month days', async () => {
      // November 1, 2025 = Saturday, so include October 27-31 (Mon-Fri)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // October days (should be included in November week 1)
          {
            id: '2025-10-27',
            data: () => createTestRecord('2025-10-27', [{ range: '09:00-10:00', count: 27 }]),
          },
          {
            id: '2025-10-28',
            data: () => createTestRecord('2025-10-28', [{ range: '09:00-10:00', count: 28 }]),
          },
          {
            id: '2025-10-29',
            data: () => createTestRecord('2025-10-29', [{ range: '09:00-10:00', count: 29 }]),
          },
          {
            id: '2025-10-30',
            data: () => createTestRecord('2025-10-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          {
            id: '2025-10-31',
            data: () => createTestRecord('2025-10-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // November days
          {
            id: '2025-11-01',
            data: () => createTestRecord('2025-11-01', [{ range: '09:00-10:00', count: 32 }]),
          },
          {
            id: '2025-11-02',
            data: () => createTestRecord('2025-11-02', [{ range: '09:00-10:00', count: 33 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-11');

      // Should include October 27-31 because November 1 is Saturday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-10-27'); // Monday
      expect(dates).toContain('2025-10-28'); // Tuesday
      expect(dates).toContain('2025-10-29'); // Wednesday
      expect(dates).toContain('2025-10-30'); // Thursday
      expect(dates).toContain('2025-10-31'); // Friday
      expect(dates).toContain('2025-11-01'); // Saturday
      expect(dates).toContain('2025-11-02'); // Sunday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 10, 2025); // November = month 10
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 27+28+29+30+31 = 145 drums (Monday-Friday only, excludes Sat/Sun)
      expect(week1Total).toBe(145);

      console.log('November 2025 test - Week 1 includes Oct 27-31 + Nov 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
    });
  });

  describe('Single Day Overflow Scenarios', () => {
    it('should handle July 2025 - single day overflow (June 30)', async () => {
      // July 1, 2025 = Tuesday, so include June 30 (Monday)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // June day (should be included in July week 1)
          {
            id: '2025-06-30',
            data: () => createTestRecord('2025-06-30', [{ range: '09:00-10:00', count: 37 }]),
          },
          // July days
          {
            id: '2025-07-01',
            data: () => createTestRecord('2025-07-01', [{ range: '09:00-10:00', count: 33 }]),
          },
          {
            id: '2025-07-02',
            data: () => createTestRecord('2025-07-02', [{ range: '09:00-10:00', count: 37 }]),
          },
          {
            id: '2025-07-03',
            data: () => createTestRecord('2025-07-03', [{ range: '09:00-10:00', count: 30 }]),
          },
          {
            id: '2025-07-04',
            data: () => createTestRecord('2025-07-04', [{ range: '09:00-10:00', count: 39 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-07');

      // Should include June 30 because July 1 is Tuesday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-06-30'); // Monday
      expect(dates).toContain('2025-07-01'); // Tuesday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 6, 2025); // July = month 6
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 37+33+37+30+39 = 176 drums
      expect(week1Total).toBe(176);

      console.log('July 2025 test - Week 1 includes Jun 30 + Jul 1-4');
      console.log(`Week 1 total: ${week1Total} drums`);
    });

    it('should handle April 2025 - single day overflow (March 31)', async () => {
      // April 1, 2025 = Tuesday, so include March 31 (Monday)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // March day (should be included in April week 1)
          {
            id: '2025-03-31',
            data: () => createTestRecord('2025-03-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // April days
          {
            id: '2025-04-01',
            data: () => createTestRecord('2025-04-01', [{ range: '09:00-10:00', count: 32 }]),
          },
          {
            id: '2025-04-02',
            data: () => createTestRecord('2025-04-02', [{ range: '09:00-10:00', count: 33 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-04');

      // Should include March 31 because April 1 is Tuesday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-03-31'); // Monday
      expect(dates).toContain('2025-04-01'); // Tuesday
      expect(dates).toContain('2025-04-02'); // Wednesday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 3, 2025); // April = month 3
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 31+32+33 = 96 drums
      expect(week1Total).toBe(96);

      console.log('April 2025 test - Week 1 includes Mar 31 + Apr 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
    });
  });

  describe('Year Boundary Scenarios', () => {
    it('should handle January 2025 - year boundary with December 2024 overflow', async () => {
      // January 1, 2025 = Wednesday, so include Dec 30-31, 2024 (Mon-Tue)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // December 2024 days (should be included in January 2025 week 1)
          {
            id: '2024-12-30',
            data: () => createTestRecord('2024-12-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          {
            id: '2024-12-31',
            data: () => createTestRecord('2024-12-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // January 2025 days
          {
            id: '2025-01-01',
            data: () => createTestRecord('2025-01-01', [{ range: '09:00-10:00', count: 32 }]),
          },
          {
            id: '2025-01-02',
            data: () => createTestRecord('2025-01-02', [{ range: '09:00-10:00', count: 33 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-01');

      // Should include December 30-31, 2024 because January 1, 2025 is Wednesday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2024-12-30'); // Monday
      expect(dates).toContain('2024-12-31'); // Tuesday
      expect(dates).toContain('2025-01-01'); // Wednesday
      expect(dates).toContain('2025-01-02'); // Thursday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 0, 2025); // January = month 0
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 30+31+32+33 = 126 drums
      expect(week1Total).toBe(126);

      console.log('January 2025 test - Week 1 includes Dec 30-31, 2024 + Jan 1-2, 2025');
      console.log(`Week 1 total: ${week1Total} drums`);
    });
  });

  describe('Long Overflow Scenarios', () => {
    it('should handle February 2025 - 5-day overflow from January', async () => {
      // February 1, 2025 = Saturday, so include Jan 27-31 (Mon-Fri)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // January days (should be included in February week 1)
          {
            id: '2025-01-27',
            data: () => createTestRecord('2025-01-27', [{ range: '09:00-10:00', count: 27 }]),
          },
          {
            id: '2025-01-28',
            data: () => createTestRecord('2025-01-28', [{ range: '09:00-10:00', count: 28 }]),
          },
          {
            id: '2025-01-29',
            data: () => createTestRecord('2025-01-29', [{ range: '09:00-10:00', count: 29 }]),
          },
          {
            id: '2025-01-30',
            data: () => createTestRecord('2025-01-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          {
            id: '2025-01-31',
            data: () => createTestRecord('2025-01-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // February days
          {
            id: '2025-02-01',
            data: () => createTestRecord('2025-02-01', [{ range: '09:00-10:00', count: 32 }]),
          },
          {
            id: '2025-02-02',
            data: () => createTestRecord('2025-02-02', [{ range: '09:00-10:00', count: 33 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-02');

      // Should include January 27-31 because February 1 is Saturday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-01-27'); // Monday
      expect(dates).toContain('2025-01-28'); // Tuesday
      expect(dates).toContain('2025-01-29'); // Wednesday
      expect(dates).toContain('2025-01-30'); // Thursday
      expect(dates).toContain('2025-01-31'); // Friday
      expect(dates).toContain('2025-02-01'); // Saturday
      expect(dates).toContain('2025-02-02'); // Sunday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 1, 2025); // February = month 1
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 27+28+29+30+31 = 145 drums (Monday-Friday only, excludes Sat/Sun)
      expect(week1Total).toBe(145);

      console.log('February 2025 test - Week 1 includes Jan 27-31 + Feb 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
    });

    it('should handle May 2025 - 3-day overflow from April', async () => {
      // May 1, 2025 = Thursday, so include Apr 28-30 (Mon-Wed)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // April days (should be included in May week 1)
          {
            id: '2025-04-28',
            data: () => createTestRecord('2025-04-28', [{ range: '09:00-10:00', count: 28 }]),
          },
          {
            id: '2025-04-29',
            data: () => createTestRecord('2025-04-29', [{ range: '09:00-10:00', count: 29 }]),
          },
          {
            id: '2025-04-30',
            data: () => createTestRecord('2025-04-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          // May days
          {
            id: '2025-05-01',
            data: () => createTestRecord('2025-05-01', [{ range: '09:00-10:00', count: 31 }]),
          },
          {
            id: '2025-05-02',
            data: () => createTestRecord('2025-05-02', [{ range: '09:00-10:00', count: 32 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-05');

      // Should include April 28-30 because May 1 is Thursday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-04-28'); // Monday
      expect(dates).toContain('2025-04-29'); // Tuesday
      expect(dates).toContain('2025-04-30'); // Wednesday
      expect(dates).toContain('2025-05-01'); // Thursday
      expect(dates).toContain('2025-05-02'); // Friday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 4, 2025); // May = month 4
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 28+29+30+31+32 = 150 drums
      expect(week1Total).toBe(150);

      console.log('May 2025 test - Week 1 includes Apr 28-30 + May 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
    });

    it('should handle October 2025 - 2-day overflow from September', async () => {
      // October 1, 2025 = Wednesday, so include Sep 29-30 (Mon-Tue)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // September days (should be included in October week 1)
          {
            id: '2025-09-29',
            data: () => createTestRecord('2025-09-29', [{ range: '09:00-10:00', count: 29 }]),
          },
          {
            id: '2025-09-30',
            data: () => createTestRecord('2025-09-30', [{ range: '09:00-10:00', count: 30 }]),
          },
          // October days
          {
            id: '2025-10-01',
            data: () => createTestRecord('2025-10-01', [{ range: '09:00-10:00', count: 31 }]),
          },
          {
            id: '2025-10-02',
            data: () => createTestRecord('2025-10-02', [{ range: '09:00-10:00', count: 32 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-10');

      // Should include September 29-30 because October 1 is Wednesday
      const dates = records.map((r) => r.date).sort();
      expect(dates).toContain('2025-09-29'); // Monday
      expect(dates).toContain('2025-09-30'); // Tuesday
      expect(dates).toContain('2025-10-01'); // Wednesday
      expect(dates).toContain('2025-10-02'); // Thursday

      // Test business week calculations
      const weeks = groupRecordsByWeek(records, 9, 2025); // October = month 9
      expect(weeks[1]).toBeDefined();
      const week1Total = sumDrums(weeks[1]);
      // 29+30+31+32 = 122 drums
      expect(week1Total).toBe(122);

      console.log('October 2025 test - Week 1 includes Sep 29-30 + Oct 1-2');
      console.log(`Week 1 total: ${week1Total} drums`);
    });
  });

  describe('No Overflow Scenarios', () => {
    it('should handle June 2025 - starts on Sunday (no overflow)', async () => {
      // June 1, 2025 = Sunday, no previous month inclusion needed
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // May day (should NOT be included)
          {
            id: '2025-05-31',
            data: () => createTestRecord('2025-05-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // June days
          {
            id: '2025-06-01',
            data: () => createTestRecord('2025-06-01', [{ range: '09:00-10:00', count: 40 }]),
          },
          {
            id: '2025-06-02',
            data: () => createTestRecord('2025-06-02', [{ range: '09:00-10:00', count: 41 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-06');

      // Should NOT include May 31 because June 1 is Sunday (week starts naturally)
      const dates = records.map((r) => r.date).sort();
      expect(dates).not.toContain('2025-05-31'); // Should not include previous month
      expect(dates).toContain('2025-06-01'); // Sunday
      expect(dates).toContain('2025-06-02'); // Monday

      console.log('June 2025 test - Week 1 starts naturally on Sunday (no overflow)');
      console.log(`Dates included: ${dates}`);
    });

    it('should handle September 2025 - starts on Monday (no overflow)', async () => {
      // September 1, 2025 = Monday, no previous month inclusion needed
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // August day (should NOT be included)
          {
            id: '2025-08-31',
            data: () => createTestRecord('2025-08-31', [{ range: '09:00-10:00', count: 31 }]),
          },
          // September days
          {
            id: '2025-09-01',
            data: () => createTestRecord('2025-09-01', [{ range: '09:00-10:00', count: 50 }]),
          },
          {
            id: '2025-09-02',
            data: () => createTestRecord('2025-09-02', [{ range: '09:00-10:00', count: 51 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-09');

      // Should NOT include August 31 because September 1 is Monday (business week starts naturally)
      const dates = records.map((r) => r.date).sort();
      expect(dates).not.toContain('2025-08-31'); // Should not include previous month
      expect(dates).toContain('2025-09-01'); // Monday
      expect(dates).toContain('2025-09-02'); // Tuesday

      console.log('September 2025 test - Week 1 starts naturally on Monday (no overflow)');
      console.log(`Dates included: ${dates}`);
    });
  });

  describe('Business vs Calendar Month Calculations', () => {
    it('should demonstrate the difference for all edge case months', () => {
      const edgeCases = [
        { month: 0, name: 'January', expectedOverflowDays: 2, expectedWeek1Total: 126 },
        { month: 1, name: 'February', expectedOverflowDays: 5, expectedWeek1Total: 210 },
        { month: 2, name: 'March', expectedOverflowDays: 5, expectedWeek1Total: 188 },
        { month: 3, name: 'April', expectedOverflowDays: 1, expectedWeek1Total: 96 },
        { month: 4, name: 'May', expectedOverflowDays: 3, expectedWeek1Total: 150 },
        { month: 5, name: 'June', expectedOverflowDays: 0, expectedWeek1Total: 0 }, // No overflow
        { month: 6, name: 'July', expectedOverflowDays: 1, expectedWeek1Total: 176 },
        { month: 7, name: 'August', expectedOverflowDays: 4, expectedWeek1Total: 217 },
        { month: 8, name: 'September', expectedOverflowDays: 0, expectedWeek1Total: 0 }, // No overflow
        { month: 9, name: 'October', expectedOverflowDays: 2, expectedWeek1Total: 122 },
        { month: 10, name: 'November', expectedOverflowDays: 5, expectedWeek1Total: 210 },
        { month: 11, name: 'December', expectedOverflowDays: 0, expectedWeek1Total: 0 }, // No overflow
      ];

      console.log('\n📊 2025 Business Week Edge Cases Summary:');
      console.log('═'.repeat(80));

      edgeCases.forEach(({ month, name, expectedOverflowDays, expectedWeek1Total }) => {
        const firstDay = new Date(2025, month, 1);
        const dayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const dayNames = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];

        console.log(`${name} 2025:`);
        console.log(`  📅 Starts on: ${dayNames[dayOfWeek]}`);
        console.log(`  ⬅️  Overflow days: ${expectedOverflowDays}`);
        if (expectedWeek1Total > 0) {
          console.log(`  📊 Expected week 1 total: ${expectedWeek1Total} drums`);
        } else {
          console.log(`  ✅ No overflow (natural week start)`);
        }
        console.log('');
      });

      // Verify our calendar analysis is correct
      expect(edgeCases.filter((e) => e.expectedOverflowDays > 0)).toHaveLength(9); // 9 months with overflow
      expect(edgeCases.filter((e) => e.expectedOverflowDays === 0)).toHaveLength(3); // 3 months without overflow
    });

    it('should use calculateBusinessMonthlyTotals to verify complete integration', async () => {
      // Test with July 2025 data (single day overflow scenario)
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // June day (overflow into July week 1)
          {
            id: '2025-06-30',
            data: () =>
              createTestRecord('2025-06-30', [
                { range: '09:00-10:00', count: 10 },
                { range: '10:00-11:00', count: 15 },
                { range: '11:00-12:00', count: 12 },
              ]),
          },
          // July days
          {
            id: '2025-07-01',
            data: () =>
              createTestRecord('2025-07-01', [
                { range: '09:00-10:00', count: 8 },
                { range: '10:00-11:00', count: 12 },
                { range: '11:00-12:00', count: 13 },
              ]),
          },
          {
            id: '2025-07-02',
            data: () =>
              createTestRecord('2025-07-02', [
                { range: '09:00-10:00', count: 9 },
                { range: '10:00-11:00', count: 11 },
                { range: '11:00-12:00', count: 17 },
              ]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-07');

      // Use calculateBusinessMonthlyTotals to get the complete monthly summary
      const monthlyTotals = calculateBusinessMonthlyTotals(records, 6, 2025); // July = month 6

      // Verify that the business month totals include the overflow day (June 30)
      console.log('\n🧮 calculateBusinessMonthlyTotals Integration Test:');
      console.log('July 2025 with June 30 overflow:');
      console.log(`  Total drums: ${monthlyTotals.totalDrums}`);
      console.log(`  Records included: ${records.length}`);
      console.log(
        `  Dates: ${records
          .map((r) => r.date)
          .sort()
          .join(', ')}`,
      );

      // Expected totals:
      // June 30: 10+15+12 = 37 drums
      // July 1: 8+12+13 = 33 drums
      // July 2: 9+11+17 = 37 drums
      // Total: 37+33+37 = 107 drums
      expect(monthlyTotals.totalDrums).toBe(107);

      // Verify that June 30 is included in the business month calculation
      expect(records.map((r) => r.date)).toContain('2025-06-30');
      expect(records.map((r) => r.date)).toContain('2025-07-01');
      expect(records.map((r) => r.date)).toContain('2025-07-02');

      console.log(
        `  ✅ Business month total: ${monthlyTotals.totalDrums} drums (includes overflow)`,
      );
    });

    it('should compare business vs calendar month calculations for March 2025', async () => {
      // March 2025 has 5 overflow days from February
      const mockGetDocs = await import('firebase/firestore');
      vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
        docs: [
          // February overflow days
          {
            id: '2025-02-24',
            data: () => createTestRecord('2025-02-24', [{ range: '09:00-10:00', count: 20 }]),
          },
          {
            id: '2025-02-25',
            data: () => createTestRecord('2025-02-25', [{ range: '09:00-10:00', count: 21 }]),
          },
          {
            id: '2025-02-26',
            data: () => createTestRecord('2025-02-26', [{ range: '09:00-10:00', count: 22 }]),
          },
          {
            id: '2025-02-27',
            data: () => createTestRecord('2025-02-27', [{ range: '09:00-10:00', count: 23 }]),
          },
          {
            id: '2025-02-28',
            data: () => createTestRecord('2025-02-28', [{ range: '09:00-10:00', count: 24 }]),
          },
          // March days
          {
            id: '2025-03-01',
            data: () => createTestRecord('2025-03-01', [{ range: '09:00-10:00', count: 25 }]),
          },
          {
            id: '2025-03-02',
            data: () => createTestRecord('2025-03-02', [{ range: '09:00-10:00', count: 26 }]),
          },
          {
            id: '2025-03-03',
            data: () => createTestRecord('2025-03-03', [{ range: '09:00-10:00', count: 27 }]),
          },
          {
            id: '2025-03-04',
            data: () => createTestRecord('2025-03-04', [{ range: '09:00-10:00', count: 28 }]),
          },
          {
            id: '2025-03-05',
            data: () => createTestRecord('2025-03-05', [{ range: '09:00-10:00', count: 29 }]),
          },
        ].map((item) => ({
          id: item.id,
          data: item.data,
        })),
      } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

      const records = await getProductionRecordsForMonthlyView('2025-03');

      // Calculate business month totals (includes overflow)
      const businessTotals = calculateBusinessMonthlyTotals(records, 2, 2025); // March = month 2

      // Calculate what calendar month totals would be (March dates only)
      const marchOnlyRecords = records.filter((r) => r.date.startsWith('2025-03'));
      const calendarTotals = calculateBusinessMonthlyTotals(marchOnlyRecords, 2, 2025);

      console.log('\n📊 Business vs Calendar Month Comparison (March 2025):');
      console.log(`Business month total (with Feb overflow): ${businessTotals.totalDrums} drums`);
      console.log(`Calendar month total (March only): ${calendarTotals.totalDrums} drums`);
      console.log(`Difference: ${businessTotals.totalDrums - calendarTotals.totalDrums} drums`);

      // Business total should include February overflow: 20+21+22+23+24+27+28+29 = 194 drums (Mon-Fri only)
      // Calendar total should only include March: 27+28+29 = 84 drums (Mon-Fri only)
      // Difference should be February total: 20+21+22+23+24 = 110 drums
      expect(businessTotals.totalDrums).toBe(194);
      expect(calendarTotals.totalDrums).toBe(84);
      expect(businessTotals.totalDrums - calendarTotals.totalDrums).toBe(110);

      console.log('  ✅ Business logic correctly includes previous month overflow days');
    });
  });
});
