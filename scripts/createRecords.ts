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

// Deterministic data for edge case testing
function getTestDrumData(dateStr: string): DrumProductionByHour[] {
  const testData: Record<string, DrumProductionByHour[]> = {
    // JULY 2025 - Original test case (July 1 = Tuesday, includes June 30)
    '2025-06-30': [{ range: '09:00-10:00', count: 37 }], // Monday = 37 drums
    '2025-07-01': [{ range: '09:00-10:00', count: 33 }], // Tuesday = 33 drums
    '2025-07-02': [{ range: '09:00-10:00', count: 37 }], // Wednesday = 37 drums
    '2025-07-03': [{ range: '09:00-10:00', count: 30 }], // Thursday = 30 drums
    '2025-07-04': [{ range: '09:00-10:00', count: 39 }], // Friday = 39 drums
    // July week 1 total: 37+33+37+30+39 = 176 drums

    // MARCH 2025 - 6 weeks case (March 1 = Saturday, includes 5 days from February)
    '2025-02-24': [{ range: '09:00-10:00', count: 20 }], // Monday = 20 drums
    '2025-02-25': [{ range: '09:00-10:00', count: 21 }], // Tuesday = 21 drums
    '2025-02-26': [{ range: '09:00-10:00', count: 22 }], // Wednesday = 22 drums
    '2025-02-27': [{ range: '09:00-10:00', count: 23 }], // Thursday = 23 drums
    '2025-02-28': [{ range: '09:00-10:00', count: 24 }], // Friday = 24 drums
    '2025-03-01': [{ range: '09:00-10:00', count: 25 }], // Saturday = 25 drums
    '2025-03-02': [{ range: '09:00-10:00', count: 26 }], // Sunday = 26 drums
    // March week 1 total: 20+21+22+23+24+25+26 = 161 drums

    // AUGUST 2025 - 6 weeks case (August 1 = Friday, includes 4 days from July)
    '2025-07-28': [{ range: '09:00-10:00', count: 28 }], // Monday = 28 drums
    '2025-07-29': [{ range: '09:00-10:00', count: 29 }], // Tuesday = 29 drums
    '2025-07-30': [{ range: '09:00-10:00', count: 30 }], // Wednesday = 30 drums
    '2025-07-31': [{ range: '09:00-10:00', count: 31 }], // Thursday = 31 drums
    '2025-08-01': [{ range: '09:00-10:00', count: 32 }], // Friday = 32 drums
    '2025-08-02': [{ range: '09:00-10:00', count: 33 }], // Saturday = 33 drums
    '2025-08-03': [{ range: '09:00-10:00', count: 34 }], // Sunday = 34 drums
    // August week 1 total: 28+29+30+31+32+33+34 = 217 drums

    // NOVEMBER 2025 - 6 weeks case (November 1 = Saturday, includes 5 days from October)
    '2025-10-27': [{ range: '09:00-10:00', count: 27 }], // Monday = 27 drums
    '2025-10-28': [{ range: '09:00-10:00', count: 28 }], // Tuesday = 28 drums
    '2025-10-29': [{ range: '09:00-10:00', count: 29 }], // Wednesday = 29 drums
    '2025-10-30': [{ range: '09:00-10:00', count: 30 }], // Thursday = 30 drums
    '2025-10-31': [{ range: '09:00-10:00', count: 31 }], // Friday = 31 drums
    '2025-11-01': [{ range: '09:00-10:00', count: 32 }], // Saturday = 32 drums
    '2025-11-02': [{ range: '09:00-10:00', count: 33 }], // Sunday = 33 drums
    // November week 1 total: 27+28+29+30+31+32+33 = 210 drums

    // APRIL 2025 - Single day overflow (April 1 = Tuesday, includes March 31)
    '2025-03-31': [{ range: '09:00-10:00', count: 31 }], // Monday = 31 drums
    '2025-04-01': [{ range: '09:00-10:00', count: 32 }], // Tuesday = 32 drums
    '2025-04-02': [{ range: '09:00-10:00', count: 33 }], // Wednesday = 33 drums
    // April week 1 total: 31+32+33 = 96 drums

    // JANUARY 2025 - Year boundary (January 1 = Wednesday, includes Dec 30-31, 2024)
    '2024-12-30': [{ range: '09:00-10:00', count: 30 }], // Monday = 30 drums
    '2024-12-31': [{ range: '09:00-10:00', count: 31 }], // Tuesday = 31 drums
    '2025-01-01': [{ range: '09:00-10:00', count: 32 }], // Wednesday = 32 drums
    '2025-01-02': [{ range: '09:00-10:00', count: 33 }], // Thursday = 33 drums
    // January week 1 total: 30+31+32+33 = 126 drums

    // FEBRUARY 2025 - Long overflow (February 1 = Saturday, includes 5 days from January)
    '2025-01-27': [{ range: '09:00-10:00', count: 27 }], // Monday = 27 drums
    '2025-01-28': [{ range: '09:00-10:00', count: 28 }], // Tuesday = 28 drums
    '2025-01-29': [{ range: '09:00-10:00', count: 29 }], // Wednesday = 29 drums
    '2025-01-30': [{ range: '09:00-10:00', count: 30 }], // Thursday = 30 drums
    '2025-01-31': [{ range: '09:00-10:00', count: 31 }], // Friday = 31 drums
    '2025-02-01': [{ range: '09:00-10:00', count: 32 }], // Saturday = 32 drums
    '2025-02-02': [{ range: '09:00-10:00', count: 33 }], // Sunday = 33 drums
    // February week 1 total: 27+28+29+30+31+32+33 = 210 drums

    // JUNE 2025 - No overflow (June 1 = Sunday, starts naturally)
    '2025-06-01': [{ range: '09:00-10:00', count: 40 }], // Sunday = 40 drums
    '2025-06-02': [{ range: '09:00-10:00', count: 41 }], // Monday = 41 drums
    // June week 1 total: 40+41+... = no previous month overflow

    // SEPTEMBER 2025 - No overflow (September 1 = Monday, starts naturally)
    '2025-09-01': [{ range: '09:00-10:00', count: 50 }], // Monday = 50 drums
    '2025-09-02': [{ range: '09:00-10:00', count: 51 }], // Tuesday = 51 drums
    // September week 1 total: 50+51+... = no previous month overflow

    // MAY 2025 - Medium overflow (May 1 = Thursday, includes 3 days from April)
    '2025-04-28': [{ range: '09:00-10:00', count: 28 }], // Monday = 28 drums
    '2025-04-29': [{ range: '09:00-10:00', count: 29 }], // Tuesday = 29 drums
    '2025-04-30': [{ range: '09:00-10:00', count: 30 }], // Wednesday = 30 drums
    '2025-05-01': [{ range: '09:00-10:00', count: 31 }], // Thursday = 31 drums
    '2025-05-02': [{ range: '09:00-10:00', count: 32 }], // Friday = 32 drums
    // May week 1 total: 28+29+30+31+32 = 150 drums

    // OCTOBER 2025 - Medium overflow (October 1 = Wednesday, includes 2 days from September)
    '2025-09-29': [{ range: '09:00-10:00', count: 29 }], // Monday = 29 drums
    '2025-09-30': [{ range: '09:00-10:00', count: 30 }], // Tuesday = 30 drums
    '2025-10-01': [{ range: '09:00-10:00', count: 31 }], // Wednesday = 31 drums
    '2025-10-02': [{ range: '09:00-10:00', count: 32 }], // Thursday = 32 drums
    // October week 1 total: 29+30+31+32 = 122 drums
  };

  return testData[dateStr] || [];
}

async function createRecordForDate(year: number, month: number, day: number) {
  const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;

  // Use deterministic test data if available, otherwise generate random data
  let drumProductionByHour = getTestDrumData(dateStr);

  if (drumProductionByHour.length === 0) {
    // Generate random data for other dates
    for (let h = 8; h < 17; h++) {
      const count = randomInt(8, 15);
      drumProductionByHour.push({
        range: `${pad(h)}:00-${pad(h + 1)}:00`,
        count,
      });
    }
  }

  const totalDrums = drumProductionByHour.reduce((sum, entry) => sum + entry.count, 0);

  // Randomize gasControl
  const gasValue = randomInt(5000, maxGas);
  const gasPercentage = randomInt(80, 100);

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
    comments: `Auto-generated record for ${dateStr}`,
  };

  // Store with date as document ID
  await setDoc(doc(db, 'productionRecords', dateStr), record);
  console.log(`Inserted record for ${dateStr} (${totalDrums} drums)`);
}

async function seed() {
  const year = 2025;

  console.log('Creating comprehensive test records for 2025 edge cases...');
  console.log('This will generate test data for all business week overflow scenarios:');
  console.log('');

  // Edge case months with their characteristics
  const edgeCases = [
    { month: 0, name: 'January', note: 'Year boundary (includes Dec 30-31, 2024)' },
    { month: 1, name: 'February', note: 'Long overflow (includes Jan 27-31)' },
    { month: 2, name: 'March', note: '6 weeks (includes Feb 24-28)' },
    { month: 3, name: 'April', note: 'Single day overflow (includes Mar 31)' },
    { month: 4, name: 'May', note: 'Medium overflow (includes Apr 28-30)' },
    { month: 5, name: 'June', note: 'No overflow (starts Sunday)' },
    { month: 6, name: 'July', note: 'Single day overflow (includes Jun 30)' },
    { month: 7, name: 'August', note: '6 weeks (includes Jul 28-31)' },
    { month: 8, name: 'September', note: 'No overflow (starts Monday)' },
    { month: 9, name: 'October', note: 'Medium overflow (includes Sep 29-30)' },
    { month: 10, name: 'November', note: '6 weeks (includes Oct 27-31)' },
    { month: 11, name: 'December', note: 'No overflow (starts Monday)' },
  ];

  // Create records for all months in 2025
  for (const { month, name, note } of edgeCases) {
    console.log(`Creating ${name} 2025 records... (${note})`);
    const daysInMonth = getDaysInMonth(year, month);

    for (let day = 1; day <= daysInMonth; day++) {
      await createRecordForDate(year, month, day);
    }
  }

  // Create December 2024 records for year boundary testing
  console.log('Creating December 2024 records for year boundary testing...');
  const decemberDays = getDaysInMonth(2024, 11); // December 2024
  for (let day = 1; day <= decemberDays; day++) {
    await createRecordForDate(2024, 11, day);
  }

  console.log('');
  console.log('✅ Done! Created comprehensive test records for 2025');
  console.log('');
  console.log('Key test scenarios created:');
  console.log('');
  console.log('📊 6-Week Months (Extended):');
  console.log('- March 2025: Week 1 = 188 drums (Feb 24-28 + Mar 1-3)');
  console.log('- August 2025: Week 1 = 217 drums (Jul 28-31 + Aug 1-3)');
  console.log('- November 2025: Week 1 = 210 drums (Oct 27-31 + Nov 1-2)');
  console.log('');
  console.log('📅 Single Day Overflows:');
  console.log('- July 2025: Week 1 = 176 drums (Jun 30 + Jul 1-4)');
  console.log('- April 2025: Week 1 = 96 drums (Mar 31 + Apr 1-2)');
  console.log('');
  console.log('🔄 Year Boundary:');
  console.log('- January 2025: Week 1 = 126 drums (Dec 30-31, 2024 + Jan 1-2)');
  console.log('');
  console.log('📈 Long Overflows:');
  console.log('- February 2025: Week 1 = 210 drums (Jan 27-31 + Feb 1-2)');
  console.log('- May 2025: Week 1 = 150 drums (Apr 28-30 + May 1-2)');
  console.log('- October 2025: Week 1 = 122 drums (Sep 29-30 + Oct 1-2)');
  console.log('');
  console.log('✅ No Overflow Cases:');
  console.log('- June 2025: Week 1 starts Sunday (no previous month)');
  console.log('- September 2025: Week 1 starts Monday (no previous month)');
  console.log('- December 2025: Week 1 starts Monday (no previous month)');
  console.log('');
  console.log('This data can be used to test:');
  console.log('1. All business week overflow scenarios');
  console.log('2. 6-week month calculations');
  console.log('3. Year boundary handling');
  console.log('4. Months with no overflow');
  console.log('5. Various overflow lengths (1-5 days)');
}

seed().catch(console.error);
