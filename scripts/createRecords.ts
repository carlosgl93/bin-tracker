import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  connectFirestoreEmulator,
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

// Types from your project
import type { DrumProductionByHour, ProductionRecord } from '../src/services/production/types';

// Firebase config for emulator
const firebaseConfig = {
  apiKey: 'fake-api-key',
  authDomain: 'localhost',
  projectId: 'bintracer-fd72d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Connect to emulators
connectFirestoreEmulator(db, 'localhost', 8081);

const drumWeight = 240;
const maxGas = 6000;

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number, decimals = 1) {
  const factor = Math.pow(10, decimals);
  return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}

async function seed() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed
  const days = getDaysInMonth(year, month);

  for (let day = 1; day <= days; day++) {
    const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;

    // Randomize gasControl
    const gasValue = randomInt(5000, maxGas);
    const gasPercentage = randomInt(80, 100);

    // Randomize drumProductionByHour
    const drumProductionByHour: DrumProductionByHour[] = [];
    let totalDrums = 0;
    for (let h = 8; h < 17; h++) {
      const count = randomInt(8, 15);
      totalDrums += count;
      drumProductionByHour.push({
        range: `${pad(h)}-${pad(h + 1)}`,
        count,
      });
    }

    // Randomize drumStock
    const drumInitial = randomInt(0, 10);
    const drumUsed = totalDrums;
    const drumTotal = drumInitial + drumUsed;

    // Randomize bagStock
    const bagInitial = randomInt(0, 20);
    const bagUsed = drumUsed * 2 + randomInt(-5, 5);
    const bagDamaged = randomInt(0, 5);
    const bagTotal = bagInitial + bagUsed - bagDamaged;

    // Randomize binsStatus
    const binsSources = ['inicio', 'chechito', 'donluis', 'otros', 'malos'] as const;
    let binsLeft = randomInt(15, 25);
    const binsStatus = binsSources.map((source, idx) => {
      let quantity =
        idx === binsSources.length - 1
          ? binsLeft
          : randomInt(1, binsLeft - (binsSources.length - idx - 1));
      binsLeft -= quantity;
      return { source, quantity };
    });

    // Randomize binsMalfunction
    const binsMalfunction = randomInt(0, 2);

    // Randomize brix
    const brix1 = randomFloat(11, 14, 1);
    const brix2 = randomFloat(11, 14, 1);
    const brix3 = randomFloat(11, 14, 1);
    const brixAvg = Math.round(((brix1 + brix2 + brix3) / 3) * 10) / 10;

    const record: ProductionRecord = {
      date: dateStr,
      startTime: '08:00',
      endTime: '17:00',
      gasControl: [{ day: dateStr, percentage: gasPercentage, value: gasValue }],
      drumProductionByHour,
      drumStock: { initial: drumInitial, used: drumUsed, total: drumTotal },
      bagStock: { initial: bagInitial, used: bagUsed, damaged: bagDamaged, total: bagTotal },
      binsStatus,
      binsMalfunction,
      totalExistence: drumTotal,
      totalProcessed: drumUsed,
      totalFinal: drumTotal,
      brix: { 1: brix1, 2: brix2, 3: brix3, average: brixAvg },
      totalDrumsWeight: drumUsed * drumWeight,
      comments: 'Auto-generated record',
    };

    // Store with date as document ID
    await setDoc(doc(db, 'productionRecords', dateStr), record);
    console.log(`Inserted record for ${dateStr}`);
  }
  console.log('Done!');
}

seed().catch(console.error);
