import { Box, Button, Typography } from '@mui/material';

function NewProductionRecord() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        New Production Record
      </Typography>
      <Typography variant="body1" gutterBottom>
        (Form for entering production data will go here.)
      </Typography>
      <Button variant="outlined" color="secondary" href="/daily">
        Cancel
      </Button>
    </Box>
  );
}

export default NewProductionRecord;
