// Script to analyze which months in 2025 have 5 or 6 weeks
// and identify potential business week overflow scenarios

function getWeeksInMonth(year: number, month: number): number {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Get the day of week for first and last day (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDay.getDay();
  const lastDayOfMonth = lastDay.getDate();

  // Calculate how many weeks span this month
  // If month starts on Sunday (0), it's at the beginning of a week
  // If month starts on Monday (1), it's also at the beginning of a business week
  const daysFromPreviousMonth = firstDayOfWeek === 0 ? 0 : firstDayOfWeek;
  const totalDaysInCalendar = daysFromPreviousMonth + lastDayOfMonth;
  const weeks = Math.ceil(totalDaysInCalendar / 7);

  return weeks;
}

function getMonthName(month: number): string {
  const names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return names[month];
}

function analyzeBusinessWeekOverflow(
  year: number,
  month: number,
): {
  hasOverflow: boolean;
  overflowDays: string[];
  details: string;
} {
  const firstDay = new Date(year, month, 1);
  const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Business weeks start on Monday (1)
  // If the month starts on Tuesday-Sunday, there will be overflow from previous month
  const hasOverflow = firstDayOfWeek !== 1 && firstDayOfWeek !== 0;

  const overflowDays: string[] = [];
  if (hasOverflow) {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const lastDayOfPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

    // Calculate how many days from previous month are in the first week
    const daysToInclude = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    for (let i = daysToInclude; i >= 1; i--) {
      const day = lastDayOfPrevMonth - i + 1;
      const dateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      overflowDays.push(dateStr);
    }
  }

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const details = `${getMonthName(month)} 1, ${year} falls on ${dayNames[firstDayOfWeek]}`;

  return { hasOverflow, overflowDays, details };
}

console.log('📅 2025 Calendar Analysis: Months with 5+ weeks and Business Week Overflow\n');

for (let month = 0; month < 12; month++) {
  const weeks = getWeeksInMonth(2025, month);
  const overflow = analyzeBusinessWeekOverflow(2025, month);
  const monthName = getMonthName(month);

  console.log(`${monthName} 2025:`);
  console.log(`  📊 Weeks in calendar: ${weeks}`);
  console.log(`  📅 ${overflow.details}`);

  if (overflow.hasOverflow) {
    console.log(`  ⚠️  Business week overflow: YES`);
    console.log(`  📋 Previous month days in week 1: ${overflow.overflowDays.join(', ')}`);
  } else {
    console.log(`  ✅ Business week overflow: NO`);
  }

  if (weeks >= 5) {
    console.log(`  🔍 ${weeks === 5 ? 'NORMAL' : 'EXTENDED'} month (${weeks} weeks)`);
  }
  console.log('');
}

console.log('🎯 SUMMARY - Months with Business Week Overflow:');
console.log('═'.repeat(60));

interface OverflowMonth {
  month: string;
  days: string[];
  details: string;
}

const overflowMonths: OverflowMonth[] = [];
for (let month = 0; month < 12; month++) {
  const overflow = analyzeBusinessWeekOverflow(2025, month);
  if (overflow.hasOverflow) {
    overflowMonths.push({
      month: getMonthName(month),
      days: overflow.overflowDays,
      details: overflow.details,
    });
  }
}

overflowMonths.forEach((item, index) => {
  console.log(`${index + 1}. ${item.month}:`);
  console.log(`   ${item.details}`);
  console.log(`   Previous month days: ${item.days.join(', ')}`);
  console.log('');
});

console.log('🧪 RECOMMENDED TEST SCENARIOS:');
console.log('═'.repeat(60));
console.log('For comprehensive testing, consider these months:');
overflowMonths.forEach((item, index) => {
  console.log(`${index + 1}. ${item.month} - Test with ${item.days.length} overflow day(s)`);
});

console.log('\n💡 Current Implementation:');
console.log('- ✅ June/July overflow is already implemented and tested');
console.log('- 🔍 Consider adding tests for other overflow scenarios above');
