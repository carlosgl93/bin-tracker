import { useEffect, useMemo, useState } from 'react';

import InventoryIcon from '@mui/icons-material/Inventory';
import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { getProductionRecordsForMonthlyView } from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';
import { formatNumberES } from '@/utils/formatNumberES';
import {
  weeklyProduction as calcWeeklyProduction,
  calculateBusinessMonthlyTotals,
  getWeekInfo,
  groupRecordsByWeek,
} from '@/utils/monthlyHelper';

import { WeeklyProductionCard } from './MonthlyView/WeeklyProductionCard';

function MonthlyView() {
  const [records, setRecords] = useState<ProductionRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Store month as Date object
  const [month, setMonth] = useState<Date>(() => {
    const now = new Date();
    // Set to first day of current month
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // Format for API: YYYY-MM
  const monthString = useMemo(() => {
    return `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
  }, [month]);

  useEffect(() => {
    setIsLoading(true);
    getProductionRecordsForMonthlyView(monthString).then((data) => {
      setRecords(data);
      setIsLoading(false);
    });
  }, [monthString]);

  const weeks = useMemo(() => {
    if (!records) return {};
    // Pass the target month and year to filter records properly
    const targetMonth = month.getMonth(); // 0-based
    const targetYear = month.getFullYear();
    console.log({ records, targetMonth, targetYear });
    return groupRecordsByWeek(records, targetMonth, targetYear);
  }, [records, month]);

  const weekInfo = useMemo(() => {
    const targetMonth = month.getMonth(); // 0-based
    const targetYear = month.getFullYear();
    return getWeekInfo(targetMonth, targetYear);
  }, [month]);

  // Calculate monthly totals using business week logic (includes previous month overflow)
  const businessMonthlyTotals = useMemo(() => {
    if (!records) return { totalDrums: 0, totalKgs: 0, totalGasConsumption: 0, lastRecord: null };
    const targetMonth = month.getMonth(); // 0-based
    const targetYear = month.getFullYear();
    return calculateBusinessMonthlyTotals(records, targetMonth, targetYear);
  }, [records, month]);

  const monthlyTotalDrums = businessMonthlyTotals.totalDrums;
  const monthlyTotalKgs = businessMonthlyTotals.totalKgs;
  const totalMonthlyGasConsumption = businessMonthlyTotals.totalGasConsumption;
  const lastRecord = businessMonthlyTotals.lastRecord;
  const lastDrumStockTotal = lastRecord?.drumStock?.total ?? 0;
  const lastBagStockTotal = lastRecord?.bagStock?.total ?? 0;

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Resumen de Producción Mensual
      </Typography>
      {/* Show month name in Spanish */}
      {/* <Typography variant="h6" mb={1}>
        {formattedMonthName}
      </Typography> */}
      <Typography variant="body1" mb={3}>
        Selecciona un mes para ver el resumen semanal de producción
      </Typography>
      {/* Month selector */}
      <Box mb={3}>
        <DatePicker
          views={['month', 'year']}
          value={month}
          onChange={(date) => {
            if (date) setMonth(date);
          }}
        />
      </Box>
      {isLoading ? (
        <Box p={4} textAlign="center">
          <CircularProgress size={40} />
        </Box>
      ) : (
        <>
          {/* Weekly summary */}
          {Object.keys(weeks).length === 0 ? (
            <Typography variant="body1">No hay registros para este mes.</Typography>
          ) : (
            Object.entries(weeks).map(([week, weekRecords]) => {
              const {
                gas,
                dateRange,
                countCurrentWeekWithProduction,
                totalFinalBagStock,
                finalWeeklyDrumStock,
                weekTotalProducedKgs,
                weekTotalProducedDrumbs,
                currentWeekInfo,
              } = calcWeeklyProduction(weekRecords, weekInfo, week);
              return (
                <WeeklyProductionCard
                  key={week}
                  week={week}
                  dateRange={dateRange}
                  weekTotalProducedDrumbs={weekTotalProducedDrumbs}
                  weekTotalProducedKgs={weekTotalProducedKgs}
                  finalWeeklyDrumStock={finalWeeklyDrumStock}
                  totalFinalBagStock={totalFinalBagStock}
                  gas={gas}
                  daysWithProduction={countCurrentWeekWithProduction}
                  weekRecords={weekRecords}
                  currentWeekInfo={
                    currentWeekInfo || {
                      weekNumber: parseInt(week),
                      weekStart: '',
                      weekEnd: '',
                      businessDaysInTargetMonth: [],
                      hasData: false,
                    }
                  }
                />
              );
            })
          )}
        </>
      )}
      <Paper
        variant="outlined"
        sx={{ p: 2, mb: 3, borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <InventoryIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Stock Mensual</Typography>
        </Box>
        {/* Vertical flow using Stack */}
        <Stack spacing={2}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Tambores producidos
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Total de tambores producidos en el mes
            </Typography>
            <Typography variant="h6" align="center">
              {monthlyTotalDrums}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Kg
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Total de kg producidos en el mes
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES(monthlyTotalKgs)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Stock tambores
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Último número ingresado
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES(lastDrumStockTotal)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Stock bolsas
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Último número ingresado
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES(lastBagStockTotal)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Gas (valor)
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES(totalMonthlyGasConsumption)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Gas (%)
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES((totalMonthlyGasConsumption / 6000) * 100)}%
            </Typography>
          </Paper>
        </Stack>
      </Paper>
    </Box>
  );
}

export default MonthlyView;
