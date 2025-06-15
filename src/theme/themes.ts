import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { ThemeMode } from './types';

const sharedTheme = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: 4,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
        head: {
          fontWeight: 600,
        },
      },
    },
  },
};

// to explore all the options, check out https://mui.com/material-ui/customization/default-theme/
const themes: Record<ThemeMode, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#f5f7fa',
        paper: '#fff',
      },
      primary: {
        main: '#3f51b5',
        light: '#7986cb',
        dark: '#303f9f',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111827',
        paper: '#1f2937',
      },
      primary: {
        main: '#7986cb',
      },
    },
  }),
};

export default themes;
