import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { pixelToRem } from '@/helpers/pixelToRem';
import { colors } from './colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: colors.funBlue.dark,
      main: colors.funBlue.main,
      light: colors.funBlue.light
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.edelweissGray.light,
    },
    text: {
      primary: colors.edelweissGray.light,
      secondary: colors.pickledBlue.dark,
    },
    divider: '#000'
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Open Sans',
    h1: {
      fontSize: pixelToRem(36),
      lineHeight: pixelToRem(42),
      fontFamily: 'Open Sans',
    },
    h2: {
      // h1
      fontSize: pixelToRem(30),
      lineHeight: pixelToRem(36),
      fontFamily: 'Open Sans',
    },
    h3: {
      // h2
      fontSize: pixelToRem(20),
      lineHeight: pixelToRem(30),
      fontFamily: 'Open Sans',
      textTransform: 'none',
    },
    h4: {
      // h3
      fontSize: pixelToRem(16),
      textTransform: 'uppercase',
      lineHeight: pixelToRem(24),
      fontFamily: 'Open Sans',
      letterSpacing: pixelToRem(1.5),
    },
    body1: {
      // body uppercase
      fontSize: pixelToRem(24),
      lineHeight: pixelToRem(20),
      fontFamily: 'Open Sans',
      textTransform: 'uppercase',
    },
    body2: {
      // body
      fontSize: pixelToRem(16),
      lineHeight: pixelToRem(20),
      fontFamily: 'Open Sans',
      textTransform: 'none'
    },
    subtitle1: {
      // paragraph uppercase
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(16),
      fontFamily: 'Open Sans',
      textTransform: 'uppercase',
    },
    subtitle2: {
      // paragraph
      fontSize: pixelToRem(12),
      lineHeight: pixelToRem(16),
      fontFamily: 'Open Sans',
      textTransform: 'none',
    },
    overline: {
      // overline
      fontWeight: 700,
      fontFamily: 'Open Sans',
      fontSize: pixelToRem(10),
      lineHeight: pixelToRem(14),
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 400,
      fontFamily: 'Open Sans',
      borderRadius: '4px',
      fontSize: pixelToRem(13),
      lineHeight: pixelToRem(16),
      letterSpacing: 'normal',
      textTransform: 'none',
    },
  },
});

export default theme;
