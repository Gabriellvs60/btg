import Head from 'next/head';
import { AppProps } from 'next/app';
import theme from '@/styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import '../src/styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { styledTheme } from '@/styles/styledTheme';

interface MyAppProps extends AppProps {}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={{ ...theme }}>
        <EmotionThemeProvider theme={styledTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
