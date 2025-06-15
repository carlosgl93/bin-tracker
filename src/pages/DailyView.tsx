import { Box, Button, Typography } from '@mui/material';

function DailyView() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Resumen de Producción Diaria
      </Typography>
      <Typography variant="body1" gutterBottom>
        Selecciona una fecha para ver o agregar registros de producción.
      </Typography>
      <Button variant="contained" color="primary" href="/new-record">
        Agregar Nuevo Registro de Producción
      </Button>
    </Box>
  );
}

export default DailyView;
