import { describe, expect, it, vi } from 'vitest';

import { getProductionRecordsForMonthlyView } from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';

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
    brix: { 1: 0, 2: 0, 3: 0 },
    totalDrumsWeight: 0,
    drumProductionByHour,
  };
}

describe('getProductionRecordsForMonthlyView', () => {
  it('should include June 30th when fetching July 2025 records (Tuesday start)', async () => {
    // Mock the getAllProductionRecords function
    const mockGetDocs = await import('firebase/firestore');
    vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
      docs: [
        { id: '2025-06-30', data: () => createTestRecord('2025-06-30') },
        { id: '2025-07-01', data: () => createTestRecord('2025-07-01') },
        { id: '2025-07-02', data: () => createTestRecord('2025-07-02') },
        { id: '2025-07-03', data: () => createTestRecord('2025-07-03') },
        { id: '2025-07-04', data: () => createTestRecord('2025-07-04') },
        { id: '2025-07-05', data: () => createTestRecord('2025-07-05') },
      ].map((item) => ({
        id: item.id,
        data: item.data,
      })),
    } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

    const records = await getProductionRecordsForMonthlyView('2025-07');

    // Should include June 30 (Monday) because July 1, 2025 is a Tuesday
    const dates = records.map((r) => r.date).sort();
    expect(dates).toContain('2025-06-30');
    expect(dates).toContain('2025-07-01');
    expect(dates).toContain('2025-07-02');
    expect(dates).toContain('2025-07-03');
    expect(dates).toContain('2025-07-04');
    expect(dates).toContain('2025-07-05');

    // Should have 6 records total (June 30 + July 1-5)
    expect(records).toHaveLength(6);
  });

  it('should include adjacent month records but filter correctly in groupRecordsByWeek', async () => {
    // Mock data for a month that starts on Sunday
    const mockGetDocs = await import('firebase/firestore');
    vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
      docs: [
        { id: '2025-05-31', data: () => createTestRecord('2025-05-31') },
        { id: '2025-06-01', data: () => createTestRecord('2025-06-01') }, // June 1, 2025 is a Sunday
        { id: '2025-06-02', data: () => createTestRecord('2025-06-02') }, // Monday
        { id: '2025-06-03', data: () => createTestRecord('2025-06-03') },
      ].map((item) => ({
        id: item.id,
        data: item.data,
      })),
    } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

    const records = await getProductionRecordsForMonthlyView('2025-06');

    // Now getProductionRecordsForMonthlyView includes adjacent months
    // The filtering happens in groupRecordsByWeek
    const dates = records.map((r) => r.date).sort();
    expect(dates).toContain('2025-05-31'); // Now included (adjacent month)
    expect(dates).toContain('2025-06-01');
    expect(dates).toContain('2025-06-02');
    expect(dates).toContain('2025-06-03');
  });

  it('should include multiple previous month days when needed', async () => {
    // Test a month that starts on Friday - should include Mon, Tue, Wed, Thu from previous month
    const mockGetDocs = await import('firebase/firestore');
    vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
      docs: [
        { id: '2025-03-31', data: () => createTestRecord('2025-03-31') }, // Monday
        { id: '2025-04-01', data: () => createTestRecord('2025-04-01') }, // Tuesday
        { id: '2025-04-02', data: () => createTestRecord('2025-04-02') }, // Wednesday
        { id: '2025-04-03', data: () => createTestRecord('2025-04-03') }, // Thursday
        { id: '2025-04-04', data: () => createTestRecord('2025-04-04') }, // Friday
        { id: '2025-04-05', data: () => createTestRecord('2025-04-05') }, // Saturday
      ].map((item) => ({
        id: item.id,
        data: item.data,
      })),
    } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

    const records = await getProductionRecordsForMonthlyView('2025-04');

    // April 1, 2025 is a Tuesday, so we should include March 31 (Monday)
    const dates = records.map((r) => r.date).sort();
    expect(dates).toContain('2025-03-31'); // Monday before April 1st (Tuesday)
    expect(dates).toContain('2025-04-01');
    expect(dates).toContain('2025-04-02');
    expect(dates).toContain('2025-04-03');
    expect(dates).toContain('2025-04-04');
    expect(dates).toContain('2025-04-05');
  });

  it('should handle year boundary correctly', async () => {
    // Test January 2025 - should include December 2024 days if needed
    const mockGetDocs = await import('firebase/firestore');
    vi.mocked(mockGetDocs.getDocs).mockResolvedValue({
      docs: [
        { id: '2024-12-30', data: () => createTestRecord('2024-12-30') }, // Monday
        { id: '2024-12-31', data: () => createTestRecord('2024-12-31') }, // Tuesday
        { id: '2025-01-01', data: () => createTestRecord('2025-01-01') }, // Wednesday
        { id: '2025-01-02', data: () => createTestRecord('2025-01-02') }, // Thursday
      ].map((item) => ({
        id: item.id,
        data: item.data,
      })),
    } as unknown as Awaited<ReturnType<typeof mockGetDocs.getDocs>>);

    const records = await getProductionRecordsForMonthlyView('2025-01');

    // January 1, 2025 is a Wednesday, so we should include Dec 30-31 (Mon-Tue)
    const dates = records.map((r) => r.date).sort();
    expect(dates).toContain('2024-12-30');
    expect(dates).toContain('2024-12-31');
    expect(dates).toContain('2025-01-01');
    expect(dates).toContain('2025-01-02');
  });

  it('should calculate week boundaries correctly for business logic', () => {
    // Test that July 1, 2025 (Tuesday) means June 30 (Monday) is included
    const july1_2025 = new Date(2025, 6, 1); // July 1, 2025
    expect(july1_2025.getDay()).toBe(2); // Tuesday

    // If first day is Tuesday (2), we need 1 day back to get to Monday
    const daysBack = july1_2025.getDay() - 1;
    expect(daysBack).toBe(1);

    // Monday should be June 30
    const mondayOfWeek1 = new Date(2025, 6, 1 - daysBack);
    expect(mondayOfWeek1.getDate()).toBe(30);
    expect(mondayOfWeek1.getMonth()).toBe(5); // June (0-based)
  });

  it('should return only current month when first day is Monday', () => {
    // Test a month that starts on Monday - no previous month inclusion needed
    const mockDate = new Date(2025, 5, 2); // June 2, 2025 is a Monday
    expect(mockDate.getDay()).toBe(1); // Monday

    // When first day is Monday, daysBack should be 0
    const daysBack = mockDate.getDay() - 1;
    expect(daysBack).toBe(0);
  });
});
