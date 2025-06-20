import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useMutation, useQuery } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import {
  createOrUpdateProductionRecordByDate,
  getProductionRecordByDate,
} from '@/services/production/productionRecords';
import {
  BinKey,
  DrumProductionByHour,
  GasControl,
  ProductionRecord,
} from '@/services/production/types';

const dias = [
  { label: 'Lunes', key: 'lunes' },
  { label: 'Martes', key: 'martes' },
  { label: 'Miércoles', key: 'miercoles' },
  { label: 'Jueves', key: 'jueves' },
  { label: 'Viernes', key: 'viernes' },
];
const horas = [
  '09:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '12:00-13:00',
  '13:00-14:00',
  '14:00-15:00',
  '15:00-16:00',
  '16:00-17:00',
  '17:00-18:00',
  '18:00-19:00',
];

const bins: { key: BinKey; label: string }[] = [
  { label: 'Inicio', key: 'inicio' },
  { label: 'Chechito', key: 'chechito' },
  { label: 'Don Luis', key: 'donluis' },
  { label: 'Otros', key: 'otros' },
];

function getInitialFormState(record?: ProductionRecord) {
  if (!record) {
    return null;
  }
  return {
    fecha: record.date,
    horaInicio: record.startTime || '',
    horaFin: record.endTime || '',
    gas:
      record.gasControl?.map((g: GasControl) => ({
        porcentaje: g.percentage?.toString() ?? '',
        valor: g.value?.toString() ?? '',
      })) || [],
    tambores:
      record.drumProductionByHour?.map((d: DrumProductionByHour) => d.count?.toString() ?? '') ||
      [],
    stockTambores: {
      inicial: record.drumStock?.initial?.toString() ?? '',
      usados: record.drumStock?.used?.toString() ?? '',
    },
    stockBolsas: {
      inicial: record.bagStock?.initial?.toString() ?? '',
      usadas: record.bagStock?.used?.toString() ?? '',
      malas: record.bagStock?.damaged?.toString() ?? '',
    },
    binsEstado: {
      inicio: record.binsStatus?.[0]?.quantity?.toString() ?? '',
      chechito: record.binsStatus?.[1]?.quantity?.toString() ?? '',
      donluis: record.binsStatus?.[2]?.quantity?.toString() ?? '',
      otros: record.binsStatus?.[3]?.quantity?.toString() ?? '',
      malos: record.binsMalfunction?.toString() ?? '',
    },
    totalProcesados: record.totalProcessed ?? 0,
    brixs: {
      1: record.brix?.[1]?.toString() ?? '',
      2: record.brix?.[2]?.toString() ?? '',
      3: record.brix?.[3]?.toString() ?? '',
    },
    comments: record.comments ?? '',
  };
}

// Helper to normalize undefined values in ProductionRecord
function normalizeProductionRecord(data: ProductionRecord): ProductionRecord {
  return {
    ...data,
    startTime: data.startTime ?? '',
    endTime: data.endTime ?? '',
    gasControl:
      data.gasControl?.map((g) => ({
        ...g,
        percentage: g.percentage ?? '',
        value: g.value ?? '',
      })) ?? [],
    drumProductionByHour:
      data.drumProductionByHour?.map((d) => ({
        ...d,
        count: d.count ?? '',
      })) ?? [],
    totalDrumsWeight: data.totalDrumsWeight ?? 0,
    drumStock: {
      initial: data.drumStock?.initial ?? '',
      used: data.drumStock?.used ?? '',
      total: data.drumStock?.total ?? '',
    },
    bagStock: {
      initial: data.bagStock?.initial ?? '',
      used: data.bagStock?.used ?? '',
      damaged: data.bagStock?.damaged ?? '',
      total: data.bagStock?.total ?? '',
    },
    binsStatus:
      data.binsStatus?.map((b) => ({
        ...b,
        quantity: b.quantity ?? '',
      })) ?? [],
    binsMalfunction: data.binsMalfunction ?? '',
    totalExistence: data.totalExistence ?? '',
    totalProcessed: data.totalProcessed ?? '',
    totalFinal: data.totalFinal ?? '',
    brix: {
      1: data.brix?.[1] ?? '',
      2: data.brix?.[2] ?? '',
      3: data.brix?.[3] ?? '',
      average: data.brix?.average ?? '',
    },
    comments: data.comments ?? '',
  };
}

// Helper to get an empty form state
function getEmptyFormState(date: string) {
  return {
    fecha: date,
    horaInicio: '',
    horaFin: '',
    gas: Array(5).fill({ porcentaje: '', valor: '' }),
    tambores: Array(10).fill(''),
    stockTambores: { inicial: '', usados: '' },
    stockBolsas: { inicial: '', usadas: '', malas: '' },
    binsEstado: {
      inicio: '',
      chechito: '',
      donluis: '',
      otros: '',
      malos: '',
    },
    totalProcesados: 0,
    brixs: { 1: '', 2: '', 3: '' },
    comments: '',
  };
}

function NewProductionRecord() {
  const navigate = useNavigate();
  const {
    state: { productionRecord, date: selectedDate },
  } = useLocation();
  // Estados para los campos del formulario
  const [fecha, setFecha] = useState(() => {
    return selectedDate;
  });
  const [horaInicio, setHoraInicio] = useState('11:30');
  const [horaFin, setHoraFin] = useState('19:00');
  const [gas, setGas] = useState([
    { porcentaje: '', valor: '' },
    { porcentaje: '', valor: '' },
    { porcentaje: '', valor: '' },
    { porcentaje: '', valor: '' },
    { porcentaje: '', valor: '' },
  ]);
  const [tambores, setTambores] = useState(Array(10).fill(''));
  const totalTambores = tambores.reduce((a, b) => a + (b === '' ? 0 : Number(b)), 0);
  const [totalProcesados, setTotalProcesados] = useState(0);
  const [stockTambores, setStockTambores] = useState({ inicial: '', usados: '' });
  const [stockBolsas, setStockBolsas] = useState({ inicial: '', usadas: '', malas: '' });
  const [binsEstado, setBinsEstado] = useState<{
    inicio: string;
    chechito: string;
    donluis: string;
    otros: string;
    malos: string;
    [key: string]: string; // <-- Add this line
  }>({
    inicio: '',
    chechito: '',
    donluis: '',
    otros: '',
    malos: '',
  });
  const [brixs, setBrixs] = useState({
    1: '',
    2: '',
    3: '',
  });
  const [comments, setComments] = useState('');

  const totalExistencia = (
    ['inicio', 'chechito', 'donluis', 'otros'] as (keyof typeof binsEstado)[]
  ).reduce((acc, key) => Number(acc) + (binsEstado[key] === '' ? 0 : Number(binsEstado[key])), 0);
  const totalFinal = Number(totalExistencia) - totalProcesados;

  const mutation = useMutation({
    mutationFn: async (data: ProductionRecord) => {
      console.log('Guardando registro de producción:', data);
      const normalizedPayload = normalizeProductionRecord(data);
      await createOrUpdateProductionRecordByDate(data.date, normalizedPayload);
    },
    onSuccess: () => {
      toast.success('Registro de producción guardado exitosamente');
      navigate('/', {
        state: {
          createdDate: fecha,
        },
      });
    },
    onError: (error) => {
      console.error('Error al guardar el registro de producción:', error);
      if (error instanceof FirebaseError) {
        if (error.code === 'permission-denied') {
          toast.error('No tienes permisos para guardar registros de producción');
          return;
        }
        if (error.code === 'unavailable') {
          toast.error('El servicio de Firebase no está disponible. Inténtalo más tarde.');
          return;
        }
        if (error.code === 'not-found') {
          toast.error('El registro de producción no fue encontrado. Verifica la fecha.');
          return;
        }
        if (error.code === 'invalid-argument') {
          toast.error('Los datos proporcionados son inválidos. Verifica los campos.');
          return;
        }
      }
      toast.error(
        `Error al guardar el registro: ${error instanceof Error ? error.message : 'Desconocido'}`,
      );
    },
  });

  // Fetch existing record for the selected date
  const { data: existingRecord, isLoading: isLoadingExistingRecord } = useQuery({
    queryKey: ['productionRecord', fecha],
    queryFn: () => getProductionRecordByDate(fecha),
    enabled: !!fecha,
    refetchOnMount: true,
  });

  // Populate form fields if existingRecord changes
  useEffect(() => {
    if (productionRecord && fecha === productionRecord?.id) {
      console.log(
        'populating state with rec from props',
        productionRecord,
        fecha,
        productionRecord?.id,
      );
      const initial = getInitialFormState(productionRecord);
      if (initial) {
        // Do NOT setFecha(initial.fecha); // <-- Remove this line to allow user to change date
        setHoraInicio(initial.horaInicio);
        setHoraFin(initial.horaFin);
        setGas(initial.gas);
        setTambores(initial.tambores);
        setStockTambores(initial.stockTambores);
        setStockBolsas(initial.stockBolsas);
        setBinsEstado(initial.binsEstado);
        setTotalProcesados(initial.totalProcesados);
        setBrixs(initial.brixs);
        setComments(initial.comments);
      }
      return;
    }

    if (existingRecord) {
      // Populate form with fetched record
      console.log('populating state with rec from db', existingRecord);

      const fallbackRecord: ProductionRecord = {
        ...existingRecord,
        gasControl: dias.map((_dia, i) => ({
          day: dias[i].label,
          percentage: existingRecord.gasControl?.[i]?.percentage,
          value: existingRecord.gasControl?.[i]?.value,
        })),
        drumProductionByHour: horas.map((range, i) => ({
          range,
          count: existingRecord.drumProductionByHour?.[i]?.count,
        })),
      };
      const initial = getInitialFormState(fallbackRecord);
      if (initial) {
        setHoraInicio(initial.horaInicio);
        setHoraFin(initial.horaFin);
        setGas(initial.gas);
        setTambores(initial.tambores);
        setStockTambores(initial.stockTambores);
        setStockBolsas(initial.stockBolsas);
        setBinsEstado(initial.binsEstado);
        setTotalProcesados(initial.totalProcesados);
        setBrixs(initial.brixs);
        setComments(initial.comments);
      }
    } else if (fecha) {
      // No record found, reset to empty form
      console.log('No existing record found, resetting to empty form state');
      const empty = getEmptyFormState(fecha);
      setHoraInicio(empty.horaInicio);
      setHoraFin(empty.horaFin);
      setGas(empty.gas);
      setTambores(empty.tambores);
      setStockTambores(empty.stockTambores);
      setStockBolsas(empty.stockBolsas);
      setBinsEstado(empty.binsEstado);
      setTotalProcesados(empty.totalProcesados);
      setBrixs(empty.brixs);
      setComments(empty.comments);
    }
  }, [fecha, existingRecord, productionRecord]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const brixAverage = (Number(brixs[1]) + Number(brixs[2]) + Number(brixs[3])) / 3;

    const data: ProductionRecord = {
      date: fecha,
      startTime: horaInicio,
      endTime: horaFin,
      gasControl: dias.map((dia, i) => ({
        day: dia.label,
        percentage: gas[i].porcentaje === '' ? 0 : Number(gas[i].porcentaje),
        value: gas[i].valor === '' ? 0 : Number(gas[i].valor),
      })),
      drumProductionByHour: horas.map((range, i) => ({
        range,
        count: tambores[i] === '' ? 0 : Number(tambores[i]),
      })),
      totalDrumsWeight: totalTambores * 240,
      drumStock: {
        initial: stockTambores.inicial === '' ? 0 : Number(stockTambores.inicial),
        used: stockTambores.usados === '' ? 0 : Number(stockTambores.usados),
        total:
          (stockTambores.inicial === '' ? 0 : Number(stockTambores.inicial)) -
          (stockTambores.usados === '' ? 0 : Number(stockTambores.usados)),
      },
      bagStock: {
        initial: stockBolsas.inicial === '' ? 0 : Number(stockBolsas.inicial),
        used: stockBolsas.usadas === '' ? 0 : Number(stockBolsas.usadas),
        damaged: stockBolsas.malas === '' ? 0 : Number(stockBolsas.malas),
        total:
          (stockBolsas.inicial === '' ? 0 : Number(stockBolsas.inicial)) -
          (stockBolsas.usadas === '' ? 0 : Number(stockBolsas.usadas)) -
          (stockBolsas.malas === '' ? 0 : Number(stockBolsas.malas)),
      },
      binsStatus: bins.map((b) => ({
        source: b.label,
        quantity:
          binsEstado[b.key as keyof typeof binsEstado] === ''
            ? 0
            : Number(binsEstado[b.key as keyof typeof binsEstado]),
      })),
      binsMalfunction: binsEstado.malos === '' ? 0 : Number(binsEstado.malos),
      totalExistence: Number(totalExistencia),
      totalProcessed: totalProcesados,
      totalFinal: totalFinal,
      brix: {
        1: brixs[1] === '' ? 0 : Number(brixs[1]),
        2: brixs[2] === '' ? 0 : Number(brixs[2]),
        3: brixs[3] === '' ? 0 : Number(brixs[3]),
        average: isNaN(brixAverage) ? 0 : brixAverage,
      },
      comments: comments.trim() || '',
    };
    mutation.mutate(data);
  };

  return (
    <Box p={2} maxWidth={700} mx="auto">
      {isLoadingExistingRecord ? (
        <Box display="flex" flexDirection={'column'} alignContent={'center'}>
          <CircularProgress size={25} />
        </Box>
      ) : (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="h5" gutterBottom>
            Nuevo Registro de Producción
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ingresa los datos de producción para el día seleccionado
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2" mb={2}>
              Fecha del Registro
            </Typography>
            <TextField
              type="date"
              label="Fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Horarios del Proceso</Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <TextField
                  label="Hora de Inicio"
                  type="time"
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Hora de Término"
                  type="time"
                  value={horaFin}
                  onChange={(e) => setHoraFin(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Tambores y Horarios</Typography>
            <Typography variant="body2" mb={1}>
              Ingresa la cantidad por cada hora (09:00 - 19:00)
            </Typography>
            <Grid container spacing={2}>
              {horas.map((h, i) => (
                <Grid item xs={6} md={2.4} key={h}>
                  <Typography>{h}</Typography>
                  <TextField
                    type="number"
                    value={tambores[i]}
                    onChange={(e) => {
                      const v = [...tambores];
                      const val = e.target.value;
                      if (val === '' || Number(val) >= 0) v[i] = val;
                      setTambores(v);
                    }}
                    fullWidth
                    size="small"
                    inputProps={{ min: 0 }}
                  />
                </Grid>
              ))}
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent={'center'} mt={2}>
              <Typography fontWeight="bold">{totalTambores * 240} Kgs</Typography>
              <Typography fontWeight="bold">Total: {totalTambores}</Typography>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Stock de Tambores</Typography>
            <Stack direction={'column'} spacing={2} mt={2}>
              <Box>
                <TextField
                  label="Stock Inicial"
                  type="number"
                  value={stockTambores.inicial}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setStockTambores((s) => ({ ...s, inicial: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="Tambores Usados"
                  type="number"
                  value={stockTambores.usados}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setStockTambores((s) => ({ ...s, usados: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="Total"
                  value={
                    stockTambores.inicial === '' && stockTambores.usados === ''
                      ? ''
                      : (stockTambores.inicial === '' ? 0 : Number(stockTambores.inicial)) -
                        (stockTambores.usados === '' ? 0 : Number(stockTambores.usados))
                  }
                  fullWidth
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Stock de Bolsas</Typography>
            <Stack direction={'column'} spacing={2} mt={2}>
              <Box>
                <TextField
                  label="Stock Inicial"
                  type="number"
                  value={stockBolsas.inicial}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setStockBolsas((s) => ({ ...s, inicial: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="Bolsas Usadas"
                  type="number"
                  value={stockBolsas.usadas}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setStockBolsas((s) => ({ ...s, usadas: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="Bolsas Malas"
                  type="number"
                  value={stockBolsas.malas}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setStockBolsas((s) => ({ ...s, malas: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="Total"
                  value={
                    stockBolsas.inicial === '' &&
                    stockBolsas.usadas === '' &&
                    stockBolsas.malas === ''
                      ? ''
                      : (stockBolsas.inicial === '' ? 0 : Number(stockBolsas.inicial)) -
                        (stockBolsas.usadas === '' ? 0 : Number(stockBolsas.usadas)) -
                        (stockBolsas.malas === '' ? 0 : Number(stockBolsas.malas))
                  }
                  fullWidth
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Estado de Bins</Typography>
            <Stack direction={'column'} gap={2} mt={2}>
              {bins.map((b) => (
                <Box key={b.key}>
                  <TextField
                    label={b.label}
                    type="number"
                    value={binsEstado[b.key as keyof typeof binsEstado]}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '' || Number(val) >= 0)
                        setBinsEstado((s) => ({ ...s, [b.key]: val }));
                    }}
                    fullWidth
                    size="small"
                    inputProps={{ min: 0 }}
                  />
                </Box>
              ))}
              <Box>
                <TextField
                  label="Bins Malos"
                  type="number"
                  value={binsEstado.malos}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0)
                      setBinsEstado((s) => ({ ...s, malos: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Stack direction={'column'} spacing={2} mt={2}>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  label="Total Existencia"
                  value={
                    ['inicio', 'chechito', 'donluis', 'otros'].every(
                      (key) => binsEstado[key] === '',
                    )
                      ? ''
                      : totalExistencia
                  }
                  fullWidth
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Total Procesados"
                  value={totalProcesados}
                  fullWidth
                  size="small"
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0) {
                      setTotalProcesados(Number(val));
                    }
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Total Final Proceso"
                  value={
                    ['inicio', 'chechito', 'donluis', 'otros'].every(
                      (key) => binsEstado[key] === '',
                    ) && totalProcesados === 0
                      ? ''
                      : totalFinal
                  }
                  fullWidth
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Brixs</Typography>
            <Stack direction={'column'} spacing={2} mt={2}>
              <Box>
                <TextField
                  label="1"
                  type="number"
                  value={brixs[1]}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0) setBrixs((b) => ({ ...b, 1: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="2"
                  type="number"
                  value={brixs[2]}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0) setBrixs((b) => ({ ...b, 2: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
              <Box>
                <TextField
                  label="3"
                  type="number"
                  value={brixs[3]}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || Number(val) >= 0) setBrixs((b) => ({ ...b, 3: val }));
                  }}
                  fullWidth
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Box>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Control de Gas Diario</Typography>
            <Grid container spacing={2} mt={1}>
              {dias.map((dia, i) => (
                <Grid item xs={12} md={2.4} key={dia.key}>
                  <Typography fontWeight="bold">{dia.label}</Typography>
                  <TextField
                    label="Porcentaje"
                    type="number"
                    value={gas[i].porcentaje}
                    onChange={(e) => {
                      const v = [...gas];
                      const val = e.target.value;
                      if (val === '' || Number(val) >= 0) v[i].porcentaje = val;
                      setGas(v);
                    }}
                    fullWidth
                    InputProps={{
                      endAdornment: <InputAdornment position="end">%</InputAdornment>,
                      inputProps: { min: 0, step: 'any' },
                    }}
                    size="small"
                    sx={{ mb: 1 }}
                    placeholder=""
                  />
                  <TextField
                    label="Valor"
                    type="number"
                    value={gas[i].valor}
                    onChange={(e) => {
                      const v = [...gas];
                      const val = e.target.value;
                      if (val === '' || Number(val) >= 0) v[i].valor = val;
                      setGas(v);
                    }}
                    fullWidth
                    size="small"
                    inputProps={{ min: 0, step: 'any' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2">Comentarios</Typography>
            <TextField
              label="Comentarios"
              multiline
              minRows={3}
              maxRows={6}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              fullWidth
              size="small"
              placeholder="Agrega cualquier comentario adicional aquí..."
            />
          </Paper>
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button variant="outlined" color="secondary" href="/">
              Cancelar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Guardar Registro
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
}

export default NewProductionRecord;
