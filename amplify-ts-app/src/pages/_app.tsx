import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { Auth0Provider } from '@auth0/auth0-react';
import theme from '../styles/theme';
// import auth0Config from '../lib/auth0Config';

class MyApp extends App {
  componentDidMount = (): void => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* ThemeProvider makes the theme available down the React
            tree thanks to React context. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
