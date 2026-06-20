// Annual view (PRD items 10-12).
import { Suspense, lazy, useMemo, useState } from 'react';

import {
  Box,
  CircularProgress,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import { getAllProductionRecords } from '@/services/production/productionRecords';
import { formatNumberES } from '@/utils';
import { MonthlySummary, getMonthlySummary, getYearlyTotals } from '@/utils/annualSummary';

const AnnualCharts = lazy(() => import('./AnnualView/AnnualCharts'));

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);

function ChartFallback() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={4}>
      <CircularProgress size={40} />
    </Box>
  );
}

function AnnualView() {
  const [year, setYear] = useState<number>(CURRENT_YEAR);

  const { data: records = [], isLoading } = useQuery({
    queryKey: ['allProductionRecords'],
    queryFn: getAllProductionRecords,
  });

  const summary: MonthlySummary[] = useMemo(
    () => getMonthlySummary(records, year),
    [records, year],
  );
  const totals = useMemo(() => getYearlyTotals(summary), [summary]);

  return (
    <Box p={2} maxWidth={1100} mx="auto">
      <Typography variant="h5" gutterBottom>
        Resumen de Producción Anual
      </Typography>
      <Typography variant="body1" mb={3}>
        Visualiza la producción agregada por mes para un año seleccionado
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <Typography variant="subtitle1">Año:</Typography>
        <Select
          size="small"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          sx={{ minWidth: 120 }}
          inputProps={{ 'aria-label': 'selector de año' }}
        >
          {YEAR_OPTIONS.map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      {isLoading ? (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Paper variant="outlined" sx={{ p: 2, mb: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Resumen mensual
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Mes</TableCell>
                    <TableCell align="right">Bins entrados</TableCell>
                    <TableCell align="right">Kg entrados</TableCell>
                    <TableCell align="right">Tambores salidos</TableCell>
                    <TableCell align="right">Kg salidos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {summary.map((m) => (
                    <TableRow key={m.month}>
                      <TableCell>{m.monthLabel}</TableCell>
                      <TableCell align="right">{formatNumberES(m.binsEntrados)}</TableCell>
                      <TableCell align="right">{formatNumberES(m.kgEntrados)}</TableCell>
                      <TableCell align="right">{formatNumberES(m.tamboresSalidos)}</TableCell>
                      <TableCell align="right">{formatNumberES(m.kgSalidos)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                      {formatNumberES(totals.binsEntrados)}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                      {formatNumberES(totals.kgEntrados)}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                      {formatNumberES(totals.tamboresSalidos)}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                      {formatNumberES(totals.kgSalidos)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Suspense fallback={<ChartFallback />}>
            <AnnualCharts summary={summary} />
          </Suspense>
        </>
      )}
    </Box>
  );
}

export default AnnualView;
