import {
  DocumentData,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { db } from '@/firebase';

import { ProductionRecord } from './types';

export const COLLECTION = 'productionRecords';

export async function createOrUpdateProductionRecordByDate(date: string, data: ProductionRecord) {
  const docRef = doc(db, COLLECTION, date);
  await setDoc(docRef, data, { merge: true });
  return date;
}

export async function getProductionRecordByDate(date: string) {
  const docRef = doc(db, COLLECTION, date);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as ProductionRecord;
  } else {
    return null;
  }
}

export async function getAllProductionRecords(): Promise<ProductionRecord[]> {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, COLLECTION));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as ProductionRecord);
}

export async function updateProductionRecordByDate(date: string, data: ProductionRecord) {
  const docRef = doc(db, COLLECTION, date);
  await updateDoc(docRef, data);
}

export async function deleteProductionRecordByDate(date: string) {
  const docRef = doc(db, COLLECTION, date);
  await deleteDoc(docRef);
}

export async function getProductionRecordsByMonth(month: string): Promise<ProductionRecord[]> {
  // month format: 'YYYY-MM'
  const allRecords = await getAllProductionRecords();
  return allRecords.filter(
    (rec: ProductionRecord) => typeof rec.date === 'string' && rec.date.startsWith(month),
  );
}

/**
 * Fetches production records for a monthly view, including any previous month days
 * that belong to the first week of the target month
 */
export async function getProductionRecordsForMonthlyView(
  month: string,
): Promise<ProductionRecord[]> {
  // month format: 'YYYY-MM'
  const [year, monthStr] = month.split('-').map(Number);

  // Get current month records
  const currentMonthRecords = await getProductionRecordsByMonth(month);

  // Get previous month records
  const prevMonth = monthStr === 1 ? 12 : monthStr - 1;
  const prevYear = monthStr === 1 ? year - 1 : year;
  const prevMonthString = `${prevYear}-${String(prevMonth).padStart(2, '0')}`;
  const prevMonthRecords = await getProductionRecordsByMonth(prevMonthString);

  // Determine which previous month days should be included in the target month's first week
  const firstDayOfTargetMonth = new Date(year, monthStr - 1, 1);
  const firstDayWeekday = firstDayOfTargetMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // If the first day is not Monday (1), we need to include previous month days
  const relevantPrevMonthRecords: ProductionRecord[] = [];

  if (firstDayWeekday > 1) {
    // First day is Tuesday or later
    const daysBack = firstDayWeekday - 1; // How many days back to Monday
    const mondayOfFirstWeek = new Date(year, monthStr - 1, 1 - daysBack);

    // Filter previous month records that fall in the first week of target month
    relevantPrevMonthRecords.push(
      ...prevMonthRecords.filter((rec) => {
        const [recYear, recMonth, recDay] = rec.date.split('-').map(Number);
        const recordDate = new Date(recYear, recMonth - 1, recDay);
        return recordDate >= mondayOfFirstWeek && recordDate < firstDayOfTargetMonth;
      }),
    );
  }

  // Combine and return all relevant records
  return [...relevantPrevMonthRecords, ...currentMonthRecords];
}
