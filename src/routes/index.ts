import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
  {
    component: asyncComponentLoader(() => import('../pages/Landing')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  {
    component: asyncComponentLoader(() => import('../pages/DailyView')),
    path: '/daily',
    title: 'Daily',
    icon: CalendarTodayIcon,
  },
  {
    component: asyncComponentLoader(() => import('../pages/MonthlyView')),
    path: '/monthly',
    title: 'Monthly',
    icon: DateRangeIcon,
  },
  {
    component: asyncComponentLoader(() => import('../pages/AnnualView')),
    path: '/annual',
    title: 'Annual',
    icon: TimelineIcon,
  },
  {
    component: asyncComponentLoader(() => import('../pages/NewProductionRecord')),
    path: '/new-record',
    title: 'New Record',
    icon: AddCircleIcon,
  },
];

export default routes;
