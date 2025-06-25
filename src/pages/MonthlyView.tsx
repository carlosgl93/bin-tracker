import { useEffect, useMemo, useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { getProductionRecordsByMonth } from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';
import { formatNumberES } from '@/utils/formatNumberES';
import {
  calculateMonthlyGasConsumption,
  groupRecordsByWeek,
  sumDrums,
  sumStock,
} from '@/utils/monthlyHelper';

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
    getProductionRecordsByMonth(monthString).then((data) => {
      setRecords(data);
      setIsLoading(false);
    });
  }, [monthString]);

  const weeks = useMemo(() => (records ? groupRecordsByWeek(records) : {}), [records]);
  const totalFinalDrumStock = useMemo(
    () => (records ? sumStock(records, 'drumStock', 'final') : 0),
    [records],
  );
  const totalFinalBagStock = useMemo(
    () => (records ? sumStock(records, 'bagStock', 'final') : 0),
    [records],
  );

  const totalMonthlyGasConsumption = useMemo(
    () => (records ? calculateMonthlyGasConsumption(records) : 0),
    [records],
  );

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
              const drums = sumDrums(weekRecords);
              const kgs = drums * 240;
              const drumStock = sumStock(weekRecords, 'drumStock', 'final');
              const bagStock = sumStock(weekRecords, 'bagStock', 'final');
              // Use the last record's gasControl value for the week (usually Friday)
              const lastRecord = weekRecords[weekRecords.length - 1];
              const gas =
                lastRecord && lastRecord.gasControl && lastRecord.gasControl.length > 0
                  ? lastRecord.gasControl[0].value
                  : 0;
              return (
                <Box key={week} mb={4}>
                  <Paper
                    variant="outlined"
                    sx={{ p: 2, mb: 3, borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
                  >
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarMonthIcon sx={{ mr: 1 }} color="primary" />
                      <Typography variant="h6">Semana {week}</Typography>
                    </Box>
                    {/* Vertical flow using Stack */}
                    <Stack spacing={2}>
                      <Paper
                        elevation={0}
                        sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          Tambores
                        </Typography>
                        <Typography variant="h6" align="center">
                          {drums}
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          Kgs
                        </Typography>
                        <Typography variant="h6" align="center">
                          {formatNumberES(kgs)}
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          Stock Tambores
                        </Typography>
                        <Typography variant="h6" align="center">
                          {drumStock}
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          Stock Bolsas
                        </Typography>
                        <Typography variant="h6" align="center">
                          {bagStock}
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          Gas (valor)
                        </Typography>
                        <Typography variant="h6" align="center">
                          {formatNumberES(gas)}
                        </Typography>
                      </Paper>
                    </Stack>
                  </Paper>
                </Box>
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
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Stock Final de Tambores:</Typography>
            <Typography fontWeight="bold">{formatNumberES(totalFinalDrumStock)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Stock Final de Bolsas:</Typography>
            <Typography fontWeight="bold">{formatNumberES(totalFinalBagStock)}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="space-between"
            alignItems="left"
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography>Total Gas (valor):</Typography>

              <Typography fontWeight="bold">
                {formatNumberES(totalMonthlyGasConsumption)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography>Total Gas (%):</Typography>
              <Typography fontWeight="bold">
                {formatNumberES((totalMonthlyGasConsumption / 6000) * 100)}%
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default MonthlyView;
