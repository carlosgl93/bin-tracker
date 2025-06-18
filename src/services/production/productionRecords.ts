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
  console.log(`Fetching production record for date: ${date}`);
  const docRef = doc(db, COLLECTION, date);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as ProductionRecord;
  } else {
    return null;
  }
}

export async function getAllProductionRecords() {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, COLLECTION));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function updateProductionRecordByDate(date: string, data: ProductionRecord) {
  const docRef = doc(db, COLLECTION, date);
  await updateDoc(docRef, data);
}

export async function deleteProductionRecordByDate(date: string) {
  const docRef = doc(db, COLLECTION, date);
  await deleteDoc(docRef);
}
