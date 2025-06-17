import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { createOrUpdateProductionRecordByDate } from '@/services/production/productionRecords';
import { ProductionRecord } from '@/services/production/types';

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
const bins = [
  { label: 'Inicio', key: 'inicio' },
  { label: 'Chechito', key: 'chechito' },
  { label: 'Don Luis', key: 'donluis' },
  { label: 'Otros', key: 'otros' },
];

function NewProductionRecord() {
  const navigate = useNavigate();
  // Estados para los campos del formulario
  const [fecha, setFecha] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // yyyy-mm-dd
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
  const [binsEstado, setBinsEstado] = useState({
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
  ).reduce((acc, key) => acc + (binsEstado[key] === '' ? 0 : Number(binsEstado[key])), 0);
  const totalFinal = totalExistencia - totalProcesados;

  const mutation = useMutation({
    mutationFn: async (data: ProductionRecord) => {
      await createOrUpdateProductionRecordByDate(data.date, data);
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
      totalExistence: totalExistencia,
      totalProcessed: totalProcesados,
      totalFinal: totalFinal,
      brix: {
        1: brixs[1] === '' ? 0 : Number(brixs[1]),
        2: brixs[2] === '' ? 0 : Number(brixs[2]),
        3: brixs[3] === '' ? 0 : Number(brixs[3]),
        average: isNaN(brixAverage) ? 0 : brixAverage,
      },
      comments: comments.trim() || undefined,
    };
    mutation.mutate(data);
  };

  return (
    <Box p={2} maxWidth={700} mx="auto">
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
                  (stockTambores.inicial === '' ? 0 : Number(stockTambores.inicial)) -
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
                  if (val === '' || Number(val) >= 0) setStockBolsas((s) => ({ ...s, malas: val }));
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
                  (stockBolsas.inicial === '' ? 0 : Number(stockBolsas.inicial)) -
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
                  if (val === '' || Number(val) >= 0) setBinsEstado((s) => ({ ...s, malos: val }));
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
                value={totalExistencia}
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
                value={totalFinal}
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
    </Box>
  );
}

export default NewProductionRecord;
