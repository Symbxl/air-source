import { createTheme } from '@mui/material/styles';

const FONT_DISPLAY = '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

// Mirrors the Allatoona design tokens from src/index.css
const theme = createTheme({
  palette: {
    primary: {
      main: '#0b2545',       // brand navy
      light: '#1e3a66',
      dark: '#061934',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1e88e5',       // accent blue
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    cool: { main: '#0ea5e9' },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0a1628',
      secondary: '#4c5a6e',
    },
    divider: '#e3e8f0',
  },
  typography: {
    fontFamily: FONT_DISPLAY,
    h1: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05 },
    h2: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.08 },
    h3: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h4: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          paddingInline: 24,
          paddingBlock: 12,
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedSecondary: {
          background: '#1e88e5',
          boxShadow: '0 8px 24px -8px rgba(30,136,229,0.55)',
          '&:hover': { background: '#1565c0' },
        },
        containedPrimary: {
          background: '#0b2545',
          '&:hover': { background: '#061934' },
        },
        outlined: {
          borderWidth: '1.5px',
          borderColor: '#cfd8e3',
          color: '#0b2545',
          '&:hover': { borderWidth: '1.5px', borderColor: '#0b2545', background: '#f5f7fb' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #e3e8f0',
          boxShadow: '0 1px 2px rgba(10,22,40,0.04), 0 12px 32px -12px rgba(10,22,40,0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
  },
});

export default theme;
