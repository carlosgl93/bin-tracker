import { Fragment } from 'react';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { es } from 'date-fns/locale/es';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';

import Pages from './routes/Pages';
import Header from './sections/Header';
import HotKeys from './sections/HotKeys';
import Sidebar from './sections/Sidebar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <HotKeys />
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <ToastContainer />
          <Header />
          <Sidebar />
          <Pages />
        </LocalizationProvider>
      </BrowserRouter>
    </Fragment>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
