import { Box, Typography } from '@mui/material';

function AnnualView() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Resumen de Producción Anual
      </Typography>
      <Typography variant="body1">
        Consulta aquí los datos de producción agregados por año.
      </Typography>
    </Box>
  );
}

export default AnnualView;
