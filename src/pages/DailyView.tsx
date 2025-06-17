import { useMemo } from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatIcon from '@mui/icons-material/Chat';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import InventoryIcon from '@mui/icons-material/Inventory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import WorkIcon from '@mui/icons-material/Work';
import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { ProductionRecord } from '@/services/production/types';
import { formatDate } from '@/utils';

interface DailyViewProps {
  record?: ProductionRecord | null;
  date: string;
  isLoading: boolean;
}

function DailyView({ record, date, isLoading }: DailyViewProps) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const formattedDate = useMemo(() => formatDate(date), [date]);
  const totalTambores = useMemo(() => {
    if (!record) return 0;
    return record.drumProductionByHour.reduce((sum, hour) => sum + hour.count, 0);
  }, [record]);

  if (isLoading) {
    return (
      <Box p={4} textAlign="center">
        <CircularProgress size={50} />
      </Box>
    );
  }

  if (!record) {
    return (
      <Box p={4}>
        <Typography variant="h5" gutterBottom>
          Vista Diaria
        </Typography>
        <Typography variant="body1" gutterBottom>
          No hay registros para la fecha seleccionada.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Vista Diaria
      </Typography>
      <Typography variant="body1" mb={3}>
        Selecciona una fecha para ver los datos de producción
      </Typography>

      {/* Información del Proceso */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <AccessTimeIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Información del Proceso</Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: 'rgba(240, 247, 255, 0.6)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Fecha
              </Typography>
              <Typography variant="subtitle1" align="center">
                {formattedDate}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: 'rgba(232, 255, 243, 0.6)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Hora de Inicio
              </Typography>
              <Typography variant="subtitle1" align="center">
                {record.startTime}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: 'rgba(255, 248, 225, 0.6)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Hora de Término
              </Typography>
              <Typography variant="subtitle1" align="center">
                {record.endTime}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Tambores y Horarios */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <Inventory2Icon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Tambores y Horarios</Typography>
        </Box>

        <Grid container spacing={1}>
          {record.drumProductionByHour.map((hour) => (
            <Grid item xs={6} sm={4} md={2.4} key={hour.range}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: 'rgba(255, 253, 231, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 1,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {hour.range}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {hour.count}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" px={4}>
          <Typography fontWeight="bold">Kgs: {record.totalDrumsWeight}</Typography>
          <Typography fontWeight="bold">Total: {totalTambores}</Typography>
        </Box>
      </Paper>

      {/* Stock de Tambores y Bolsas */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              height: '100%',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <InventoryIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Stock de Tambores</Typography>
            </Box>

            <Stack spacing={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Stock Inicial:</Typography>
                <Typography fontWeight="bold">{record.drumStock.initial}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Tambores Usados:</Typography>
                <Typography fontWeight="bold">{record.drumStock.used}</Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ bgcolor: 'rgba(232, 245, 253, 0.6)', p: 1, borderRadius: 1 }}
              >
                <Typography>Total:</Typography>
                <Typography fontWeight="bold">{record.drumStock.total}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              height: '100%',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <InventoryIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Stock de Bolsas</Typography>
            </Box>

            <Stack spacing={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Stock Inicial:</Typography>
                <Typography fontWeight="bold">{record.bagStock.initial}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Bolsas Usadas:</Typography>
                <Typography fontWeight="bold">{record.bagStock.used}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Bolsas Malas:</Typography>
                <Typography fontWeight="bold">{record.bagStock.damaged}</Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ bgcolor: 'rgba(232, 245, 253, 0.6)', p: 1, borderRadius: 1 }}
              >
                <Typography>Total:</Typography>
                <Typography fontWeight="bold">{record.bagStock.total}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              height: '100%',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <InventoryIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Brixs</Typography>
            </Box>

            <Stack spacing={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>1:</Typography>
                <Typography fontWeight="bold">{record?.brix?.[1]}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>2:</Typography>
                <Typography fontWeight="bold">{record?.brix?.[2]}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>3:</Typography>
                <Typography fontWeight="bold">{record?.brix?.[3]}</Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ bgcolor: 'rgba(232, 245, 253, 0.6)', p: 1, borderRadius: 1 }}
              >
                <Typography>Promedio:</Typography>
                <Typography fontWeight="bold">
                  {(() => {
                    const b1 = Number(record?.brix?.[1]);
                    const b2 = Number(record?.brix?.[2]);
                    const b3 = Number(record?.brix?.[3]);
                    const valid = [b1, b2, b3].filter((v) => !isNaN(v));
                    if (valid.length === 0) return '-';
                    return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2);
                  })()}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Estado de Bins */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <WorkIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Estado de Bins</Typography>
        </Box>
        {/* Responsive container for Estado de Bins */}
        {isMobile ? (
          <Stack spacing={3}>
            {record.binsStatus.map((bin) => (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={'space-between'}
                alignItems="center"
                key={bin.source}
              >
                <Typography color="text.secondary">{bin.source}:</Typography>
                <Typography variant="h6">{bin.quantity}</Typography>
              </Box>
            ))}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={'space-between'}
              alignItems="center"
            >
              <Typography color="text.secondary">Bins Malos:</Typography>
              <Typography variant="h6">{record.binsMalfunction}</Typography>
            </Box>
            <Stack spacing={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Total Existencia:</Typography>
                <Typography fontWeight="bold">{record.totalExistence}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Total Procesados:</Typography>
                <Typography fontWeight="bold">{record.totalProcessed}</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ bgcolor: 'rgba(232, 245, 253, 0.6)', p: 1, borderRadius: 1 }}
              >
                <Typography>Total Final Proceso:</Typography>
                <Typography fontWeight="bold">{record.totalFinal}</Typography>
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {record.binsStatus.map((bin) => (
                  <Grid item xs={6} sm={3} key={bin.source}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="caption" color="text.secondary">
                        {bin.source}:
                      </Typography>
                      <Typography variant="h6">{bin.quantity}</Typography>
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={6} sm={3}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      Bins Malos:
                    </Typography>
                    <Typography variant="h6">{record.binsMalfunction}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography>Total Existencia:</Typography>
                  <Typography fontWeight="bold">{record.totalExistence}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography>Total Procesados:</Typography>
                  <Typography fontWeight="bold">{record.totalProcessed}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ bgcolor: 'rgba(232, 245, 253, 0.6)', p: 1, borderRadius: 1 }}
                >
                  <Typography>Total Final Proceso:</Typography>
                  <Typography fontWeight="bold">{record.totalFinal}</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Paper>
      {/* Control de Gas Diario */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          my: 3,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Box display="flex" alignItems="center" my={2}>
          <GasMeterIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Control de Gas Diario</Typography>
        </Box>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Día</TableCell>
                <TableCell align="center">Porcentaje</TableCell>
                <TableCell align="right">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {record.gasControl.map((item) => (
                <TableRow key={item.day}>
                  <TableCell>{item.day}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={`${item.percentage}%`}
                      size="small"
                      color={item.percentage > 0 ? 'primary' : 'default'}
                      variant={item.percentage > 0 ? 'filled' : 'outlined'}
                    />
                  </TableCell>
                  <TableCell align="right">{item.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* Comentarios */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <ChatIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6">Comentarios</Typography>
        </Box>
        <Typography variant="body1" color={record.comments ? 'text.primary' : 'text.secondary'}>
          {record.comments ? record.comments : 'No hay comentarios para este día.'}
        </Typography>
      </Paper>
    </Box>
  );
}

export default DailyView;
