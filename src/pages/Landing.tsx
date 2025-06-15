import { useState } from 'react';
import { useNavigate } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fab, Tab, Tabs } from '@mui/material';

import AnnualView from './AnnualView';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';

function Landing() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleCreate = () => navigate('/new-record');

  return (
    <Box p={4} position="relative">
      <Box mt={4}>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Diario" />
          <Tab label="Mensual" />
          <Tab label="Anual" />
        </Tabs>
        <Box mt={3}>
          {tab === 0 && <DailyView />}
          {tab === 1 && <MonthlyView />}
          {tab === 2 && <AnnualView />}
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreate}
        sx={{ mt: 4, display: 'block', mx: 'auto' }}
      >
        Crear nuevo registro
      </Button>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleCreate}
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1200 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default Landing;
