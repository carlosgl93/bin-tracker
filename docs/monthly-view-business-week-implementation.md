# MonthlyView Business Week Logic Implementation

## Overview

This document summarizes the implementation of business week overflow logic in the MonthlyView component, ensuring consistent calculations between weekly and monthly views.

## Problem Statement

The MonthlyView component was showing inconsistent "Stock Mensual" totals compared to weekly views when business weeks spanned across month boundaries. Specifically:

- **June 30, 2025 (Monday)** should be included in July's first week
- Weekly view showed 176 drums total, but Stock Mensual showed 139 drums
- Gas consumption and stock values were also inconsistent

## Solution Implemented

### 1. Enhanced Data Fetching (`productionRecords.ts`)

- **Function**: `getProductionRecordsForMonthlyView(yearMonth: string)`
- **Logic**: Fetches both target month and previous month records
- **Business Rule**: Includes previous month days in week 1 if they fall in the same calendar week
- **Test Coverage**: 63.33% coverage with 6 comprehensive tests

### 2. Helper Functions (`monthlyHelper.ts`)

- **Function**: `calculateBusinessMonthlyTotals()` - Uses business week logic (includes overflow)
- **Function**: `calculateCalendarMonthlyTotals()` - Uses strict calendar month logic  
- **Logic**: Provides both calculation methods for flexibility
- **Test Coverage**: 65.77% coverage with 9 comprehensive tests

### 3. Updated MonthlyView Component (`MonthlyView.tsx`)

- **Change**: Now uses `getProductionRecordsForMonthlyView()` instead of basic monthly fetch
- **Calculation**: Uses business week logic for all monthly totals (Stock Mensual, gas, etc.)
- **Consistency**: Weekly totals and Stock Mensual now match exactly
- **Test Coverage**: 5 comprehensive component tests

## Test Data Generation (`createRecords.ts`)

- **Deterministic Data**: Always generates June and July 2025 data
- **Key Test Scenario**:
  - June 30, 2025: 37 drums (Monday)
  - July 1-4, 2025: 33, 37, 30, 39 drums (Tue-Fri)
  - **Total Week 1**: 176 drums (37+33+37+30+39)

## Test Coverage Summary

### Unit Tests (29 total tests - 100% pass rate)

- **monthlyHelper.test.ts**: 9 tests - Helper logic, business vs calendar calculations
- **MonthlyView.test.tsx**: 5 tests - Component logic, Stock Mensual consistency
- **MonthlyView.integration.test.ts**: 5 tests - Business logic, edge cases
- **productionRecords.test.ts**: 6 tests - Data fetching logic
- **insertIf.spec.ts**: 4 tests - Utility function

### Code Coverage

- **productionRecords.ts**: 63.33% coverage
- **monthlyHelper.ts**: 65.77% coverage
- **Overall business logic**: Strong coverage of critical paths

## Key Test Scenarios Verified

### 1. Business Week Overflow

```typescript
// June 30 (Monday) + July 1-4 (Tue-Fri) = Week 1
expect(weeklyTotal).toBe(176); // 37+33+37+30+39
expect(monthlyTotal).toBe(176); // Now matches weekly view
```

### 2. Stock Mensual Consistency

```typescript
// Before: Stock Mensual = 139 drums, Weekly = 176 drums ❌
// After:  Stock Mensual = 176 drums, Weekly = 176 drums ✅
expect(stockMensualDrums).toBe(weeklyDrums);
```

### 3. Gas Consumption Consistency

```typescript
// Includes June 30 gas consumption in July totals
expect(businessWeekGas).toBe(calendarMonthGas + june30Gas);
```

### 4. Edge Cases

- Months starting on Sunday (no overflow)
- Months starting on Monday (overflow scenario)
- Real Firestore data integration

## Business Logic Verification

### Before Implementation

- **Weekly View**: 176 drums (includes June 30)
- **Stock Mensual**: 139 drums (excludes June 30)
- **Inconsistency**: 37 drums difference

### After Implementation  

- **Weekly View**: 176 drums (includes June 30)
- **Stock Mensual**: 176 drums (includes June 30)
- **Consistency**: ✅ Perfect match

## Files Modified

### Core Implementation

- `src/services/production/productionRecords.ts` - Enhanced data fetching
- `src/utils/monthlyHelper.ts` - Business week calculation helpers
- `src/pages/MonthlyView.tsx` - Updated to use business week logic

### Test Files

- `src/utils/monthlyHelper.test.ts` - Helper function tests
- `src/pages/MonthlyView.test.tsx` - Component logic tests  
- `src/pages/MonthlyView.integration.test.ts` - Integration tests
- `src/services/production/productionRecords.test.ts` - Data fetching tests

### Test Data

- `scripts/createRecords.ts` - Deterministic test data generation

## Commands to Verify Implementation

```bash
# Generate test data
npx tsx scripts/createRecords.ts

# Run all business logic tests
npx vitest run src/utils/monthlyHelper.test.ts src/pages/MonthlyView.test.tsx src/pages/MonthlyView.integration.test.ts src/services/production/productionRecords.test.ts

# Check code coverage  
npx vitest run src --coverage
```

## Results

- ✅ All 29 tests passing (100% success rate)
- ✅ Business week overflow logic correctly implemented
- ✅ Stock Mensual consistency achieved
- ✅ Gas consumption calculations aligned
- ✅ Deterministic test data for reliable testing
- ✅ Strong code coverage (63-66%) for business logic files

## Business Impact

- **User Experience**: Consistent numbers between weekly and monthly views
- **Data Integrity**: Accurate business week calculations for production tracking
- **Maintainability**: Comprehensive test coverage ensures future reliability
- **Flexibility**: Support for both business week and calendar month calculations
