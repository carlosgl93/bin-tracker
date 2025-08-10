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
 * Fetches production records for a monthly view, including any previous/next month days
 * that belong to weeks intersecting with the target month
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

  // Get next month records
  const nextMonth = monthStr === 12 ? 1 : monthStr + 1;
  const nextYear = monthStr === 12 ? year + 1 : year;
  const nextMonthString = `${nextYear}-${String(nextMonth).padStart(2, '0')}`;
  const nextMonthRecords = await getProductionRecordsByMonth(nextMonthString);

  // For now, return all records from adjacent months
  // The filtering will be handled by groupRecordsByWeek logic
  return [...prevMonthRecords, ...currentMonthRecords, ...nextMonthRecords];
}
