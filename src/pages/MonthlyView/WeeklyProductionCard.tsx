import { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { format, isValid, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

import { ProductionRecord } from '@/services/production/types';
import { formatNumberES } from '@/utils';
import { binsToKgs, drumsToKgs } from '@/utils/conversionFactors';
import { defectuososPercent, sumBinsMalos, sumRecepcionadosKgs } from '@/utils/monthlyHelper';

interface WeeklyProductionCardProps {
  week: string;
  dateRange: string;
  weekTotalProducedDrumbs: number;
  weekTotalProducedKgs: number;
  finalWeeklyDrumStock: number;
  totalFinalBagStock: number;
  gas: number | null;
  gasPercentage: number | null;
  daysWithProduction: number;
  weekRecords: ProductionRecord[];
  currentWeekInfo: {
    weekNumber: number;
    weekStart: string;
    weekEnd: string;
    businessDaysInTargetMonth: string[];
    weekendDaysInTargetMonth: string[];
    hasData: boolean;
  };
}

export function WeeklyProductionCard({
  week,
  dateRange,
  weekTotalProducedDrumbs,
  weekTotalProducedKgs,
  finalWeeklyDrumStock,
  totalFinalBagStock,
  gas,
  gasPercentage,
  daysWithProduction,
  weekRecords,
  currentWeekInfo,
}: WeeklyProductionCardProps) {
  console.log({ week, dateRange });

  // State for mobile modal
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  // Detect mobile device
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // Create day indicators with tooltips or modal
  const dayIndicators = currentWeekInfo.businessDaysInTargetMonth
    .map((dayId) => {
      // dayId is in "yyyy-MM-dd" format, directly match with record.id
      const record = weekRecords.find((r) => r.id === dayId);
      const hasProduction = !!record;

      // Parse the ISO date for display
      const dayDate = parseISO(dayId);
      if (!isValid(dayDate)) {
        return null;
      }

      console.log({ dayId, record });

      const dayLabel = format(dayDate, 'dd', { locale: es });

      const tooltipContent =
        hasProduction && record ? (
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {format(dayDate, 'dd MMM', { locale: es })}
            </Typography>
            <Typography variant="caption">
              Total tambores producidos:{' '}
              {record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0}
            </Typography>
            <br />
            <Typography variant="caption">
              Kgs:{' '}
              {formatNumberES(
                drumsToKgs(
                  record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0,
                ),
              )}
            </Typography>
            <br />
            <Typography variant="caption">
              Stock tambores: {record.drumStock?.total || 0}
            </Typography>
            <br />
            <Typography variant="caption">Stock bolsas: {record.bagStock?.total || 0}</Typography>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Brixs</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(record.brix).map(([b, i]) => (
                  <tr key={i}>
                    <td>
                      <Typography variant="caption">{`${b}: ${i}`}</Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Bins</th>
                  <th />
                  <th>kgs</th>
                </tr>
              </thead>
              <tbody>
                {record.binsStatus.map((b, i) => (
                  <tr key={i}>
                    <td>
                      <Typography variant="caption">{b.source.toLocaleUpperCase()}</Typography>
                    </td>
                    <td>
                      <Typography variant="caption">{b.quantity}</Typography>
                    </td>
                    <td>
                      <Typography variant="caption">
                        {formatNumberES(binsToKgs(b.quantity || 0))}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <Typography variant="caption">
              Bins Malos: {record.binsMalfunction} /{' '}
              {formatNumberES(binsToKgs(record.binsMalfunction || 0))}
            </Typography>
            <br />
            <Typography variant="caption">
              Total Existencia: {formatNumberES(record.totalExistence || 0)} /{' '}
              {formatNumberES(binsToKgs(record.totalExistence || 0))}
            </Typography>
            <br />
            <Typography variant="caption">
              Total Procesados: {formatNumberES(record.totalProcessed || 0)} /{' '}
              {formatNumberES(binsToKgs(record.totalProcessed || 0))}
            </Typography>
            <br />
            <Typography variant="caption">
              Total Final Proceso: {formatNumberES(record.totalFinal || 0)} /{' '}
              {formatNumberES(binsToKgs(record.totalFinal || 0))}
            </Typography>
            <br />
            <Typography variant="caption">
              {`Gas: ${record.gasControl.reduce((sum, g) => sum + g.percentage, 0)}% ${record.gasControl?.reduce((sum, g) => sum + (g.value || 0), 0) || 0}`}
            </Typography>
          </Box>
        ) : (
          <Typography variant="body2">
            {format(dayDate, 'dd MMM', { locale: es })} - Sin producción
          </Typography>
        );

      // For mobile: render clickable chip that opens modal
      if (isMobile) {
        return (
          <Chip
            key={dayId}
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: hasProduction ? '#4caf50' : '#f44336',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: hasProduction ? '#45a049' : '#d32f2f',
              },
            }}
            onClick={() => {
              setModalContent(tooltipContent);
              setOpenModal(true);
            }}
          />
        );
      }

      // For desktop: render tooltip
      return (
        <Tooltip key={dayId} title={tooltipContent} arrow>
          <Chip
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: hasProduction ? '#4caf50' : '#f44336',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: hasProduction ? '#45a049' : '#d32f2f',
              },
            }}
          />
        </Tooltip>
      );
    })
    .filter(Boolean);

  // Weekend day chips — only shown when a record exists for that day
  const weekendIndicators = currentWeekInfo.weekendDaysInTargetMonth
    .map((dayId) => {
      const record = weekRecords.find((r) => r.id === dayId);
      if (!record) return null; // No red chips for unworked weekends

      const dayDate = parseISO(dayId);
      if (!isValid(dayDate)) return null;

      const dayLabel = format(dayDate, 'dd', { locale: es });

      const tooltipContent = (
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {format(dayDate, 'dd MMM', { locale: es })}
          </Typography>
          <Typography variant="caption">
            Total tambores producidos:{' '}
            {record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0}
          </Typography>
          <br />
          <Typography variant="caption">
            Kgs:{' '}
            {formatNumberES(
              drumsToKgs(
                record.drumProductionByHour?.reduce((sum, h) => sum + (h.count || 0), 0) || 0,
              ),
            )}
          </Typography>
          <br />
          <Typography variant="caption">Stock tambores: {record.drumStock?.total || 0}</Typography>
          <br />
          <Typography variant="caption">Stock bolsas: {record.bagStock?.total || 0}</Typography>
        </Box>
      );

      if (isMobile) {
        return (
          <Chip
            key={dayId}
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#45a049' },
            }}
            onClick={() => {
              setModalContent(tooltipContent);
              setOpenModal(true);
            }}
          />
        );
      }

      return (
        <Tooltip key={dayId} title={tooltipContent} arrow>
          <Chip
            label={dayLabel}
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              minWidth: '32px',
              height: '24px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#45a049' },
            }}
          />
        </Tooltip>
      );
    })
    .filter(Boolean);

  // Items 7-9: weekly KPIs
  const weekRecepcionadosKgs = sumRecepcionadosKgs(weekRecords);
  const weekBinsMalos = sumBinsMalos(weekRecords);
  const weekDefectuososPercent = defectuososPercent(weekRecords);

  return (
    <Box key={week} mb={4}>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          width: '100%',
        }}
      >
        <Box display="flex" alignItems="center" mb={2} sx={{ width: '100%' }}>
          <CalendarMonthIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6" sx={{ mr: 2 }}>
            Semana {week}
          </Typography>
        </Box>
        {/* Vertical flow using Stack */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 0.5, mx: 2, flexWrap: 'wrap' }}>
            {dayIndicators}
            {weekendIndicators.length > 0 && (
              <>
                <Box sx={{ width: '4px' }} />
                {weekendIndicators}
              </>
            )}
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>
            {daysWithProduction} días con producción
          </Typography>
        </Box>
        <Stack spacing={2}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Tambores producidos
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Suma de los tambores producidos
            </Typography>
            <Typography variant="h6" align="center">
              {weekTotalProducedDrumbs}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,253,231,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Kgs producidos
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Tambores {weekTotalProducedDrumbs} * 240
            </Typography>
            <Typography variant="h6" align="center">
              {formatNumberES(weekTotalProducedKgs)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,253,245,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Kilogramos recepcionados
            </Typography>
            {/* <Typography variant="caption" color="text.secondary">
              Suma bins Chechito + Don Luis + Otros, * 700
            </Typography> */}
            <Typography variant="h6" align="center">
              {formatNumberES(weekRecepcionadosKgs)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,240,230,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Bins malos
            </Typography>
            {/* <Typography variant="caption" color="text.secondary">
              Suma binsMalfunction de la semana
            </Typography> */}
            <Typography variant="h6" align="center">
              {formatNumberES(weekBinsMalos)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(255,240,230,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              % defectuosos
            </Typography>
            {/* <Typography variant="caption" color="text.secondary">
              binsMalfunction / (OK + malos) * 100
            </Typography> */}
            <Typography variant="h6" align="center">
              {weekDefectuososPercent.toFixed(1)}%
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Stock Tambores
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Cantidad para el siguiente lunes
            </Typography>
            <Typography variant="h6" align="center">
              {finalWeeklyDrumStock}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Stock Bolsas
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Cantidad para el siguiente lunes
            </Typography>
            <Typography variant="h6" align="center">
              {totalFinalBagStock}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Gas (valor)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Último valor registrado
            </Typography>
            <Typography variant="h6" align="center">
              {gas == null ? 'No ingresado' : formatNumberES(gas)}
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(232,245,253,0.6)', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Gas (%)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Último porcentaje registrado
            </Typography>
            <Typography variant="h6" align="center">
              {gasPercentage == null ? 'No ingresado' : `${formatNumberES(gasPercentage)}%`}
            </Typography>
          </Paper>
        </Stack>

        {/* Mobile modal for tooltip content */}
        <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth maxWidth="xs">
          <DialogTitle>
            Detalle de producción
            <IconButton
              aria-label="close"
              onClick={() => setOpenModal(false)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>{modalContent}</DialogContent>
        </Dialog>
      </Paper>
    </Box>
  );
}
