import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, Fab, Tab, Tabs, TextField } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import { addDays } from 'date-fns';

import { getProductionRecordByDate } from '@/services/production/productionRecords';

import AnnualView from './AnnualView';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';

function Landing() {
  const { state } = useLocation();

  const [tab, setTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    if (state?.createdDate) {
      return new Date(state.createdDate).toISOString().split('T')[0]; // yyyy-mm-dd
    }
    const today = new Date();
    return today.toISOString().split('T')[0]; // yyyy-mm-dd
  });
  const navigate = useNavigate();

  const { data: productionRecord, isLoading } = useQuery({
    queryKey: ['productionRecord', selectedDate],
    queryFn: () => getProductionRecordByDate(selectedDate),
    enabled: !!selectedDate,
  });

  const handleCreate = () => {
    navigate('/new-record', {
      state: {
        productionRecord: productionRecord ? productionRecord : undefined,
        date: selectedDate,
      },
    });
  };

  const goToPreviousDay = () => {
    const currentDate = new Date(selectedDate);
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);
    setSelectedDate(previousDay.toISOString().split('T')[0]);
  };

  const goToNextDay = () => {
    const currentDate = new Date(selectedDate);
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setSelectedDate(nextDay.toISOString().split('T')[0]);
  };

  return (
    <Box p={4} position="relative">
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={2}>
          <Button size="small" variant="outlined" onClick={goToPreviousDay} disabled={isLoading}>
            Ayer
          </Button>
          <TextField
            type="date"
            label="Seleccionar fecha"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            size="small"
          />
          <Button
            size="small"
            variant="outlined"
            onClick={goToNextDay}
            disabled={isLoading || addDays(new Date(selectedDate), 1) > new Date()}
          >
            Mañana
          </Button>
        </Box>
        {isLoading && (
          <Box textAlign="center">
            <CircularProgress size={50} />
          </Box>
        )}

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
          {tab === 0 && (
            <>
              <DailyView record={productionRecord} date={selectedDate} isLoading={isLoading} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreate}
                sx={{ mt: 4, display: 'block', mx: 'auto' }}
              >
                Crear nuevo registro
              </Button>
              <Fab
                color="primary"
                aria-label="add"
                onClick={handleCreate}
                sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1200 }}
              >
                <AddIcon />
              </Fab>
            </>
          )}
          {tab === 1 && <MonthlyView />}
          {tab === 2 && <AnnualView />}
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
