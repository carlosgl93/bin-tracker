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
