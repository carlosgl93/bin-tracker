import { Box, Typography } from '@mui/material';

function MonthlyView() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Resumen de Producción Mensual
      </Typography>
      <Typography variant="body1">
        Consulta aquí los datos de producción agregados por mes.
      </Typography>
    </Box>
  );
}

export default MonthlyView;
