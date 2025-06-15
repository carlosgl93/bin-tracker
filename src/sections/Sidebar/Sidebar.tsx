import { Link } from 'react-router';

import DefaultIcon from '@mui/icons-material/Deblur';
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
              <DefaultIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="daily" onClick={close}>
          <ListItemButton component={Link} to="/daily">
            <ListItemIcon>
              <DefaultIcon />
            </ListItemIcon>
            <ListItemText>Daily</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="monthly" onClick={close}>
          <ListItemButton component={Link} to="/monthly">
            <ListItemIcon>
              <DefaultIcon />
            </ListItemIcon>
            <ListItemText>Monthly</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="annual" onClick={close}>
          <ListItemButton component={Link} to="/annual">
            <ListItemIcon>
              <DefaultIcon />
            </ListItemIcon>
            <ListItemText>Annual</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key="new-record" onClick={close}>
          <ListItemButton component={Link} to="/new-record">
            <ListItemIcon>
              <DefaultIcon />
            </ListItemIcon>
            <ListItemText>New Record</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
