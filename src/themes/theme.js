import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      light: '#EFF6FF',
      dark: '#1945A4'
    },
    dark: {
      main: '#313552',
      light: '#F3F5F9'
    },
    red: {
      main: '#B8405E'
    },
    yellow: {
      main: '#FFFBEB'
    },
    orange: {
      main: '#FBBF24'
    },
    green: {
      main: '#2EB086'
    },
    error: {
      main: red.A400
    },
    optional: {
      main: '#1E1E1E',
      contrastText: '#FFFFFF'
    }
  },

  typography: {
    // 14 by default
    // fontSize: 14,
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h5: {
      fontSize: '12.5px',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: '10px',
      fontWeight: 'bold'
    },
    body1: {
      fontSize: '10px'
    }
  }
});

export default theme;
