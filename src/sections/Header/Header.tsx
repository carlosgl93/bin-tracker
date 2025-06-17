import { useNavigate } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';

import { useSidebar } from '@/sections/Sidebar/hooks';
import { useThemeMode } from '@/theme';

function Header() {
  const { themeMode } = useThemeMode();
  const { open: openSidebar } = useSidebar();

  const router = useNavigate();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={2}
      data-pw={`theme-${themeMode}`}
      enableColorOnDark
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={() => router('/')} color="info" sx={{ minWidth: 0, p: 0 }}>
              <img
                src="/app-logo.png"
                alt="App Logo"
                style={{ height: 40, width: 'auto', display: 'block' }}
              />
            </Button>
          </Stack>
          {/* <Stack direction="row" alignItems="center">
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={toggleThemeMode}
                data-pw="theme-toggle"
              >
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </Stack> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
