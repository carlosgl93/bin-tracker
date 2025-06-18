import { Link } from 'react-router';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';

import { useSidebar } from './hooks';

function Sidebar() {
  const { isOpen, open, close } = useSidebar();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={close}
      onOpen={open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      data-pw="sidebar"
    >
      <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
        <ListItem sx={{ p: 0 }} key="home" onClick={close}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* <ListItem sx={{ p: 0 }} key="daily" onClick={close}>
          <ListItemButton component={Link} to="/daily">
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>Diario</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="monthly" onClick={close}>
          <ListItemButton component={Link} to="/monthly">
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>Mensual</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="annual" onClick={close}>
          <ListItemButton component={Link} to="/annual">
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>Anual</ListItemText>
          </ListItemButton>
        </ListItem> */}
        <ListItem sx={{ p: 0 }} key="new-record" onClick={close}>
          <ListItemButton component={Link} to="/new-record">
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>Nuevo registro</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
