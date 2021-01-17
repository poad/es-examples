import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { AuthProvider } from 'use-auth0';

interface HistoryState {
  targetUrl: string;
}

interface Auth0Config {
  domain: string;
  clientId: string;
  callbackUrl: string;
}

interface Auth0Param {
  domain: string;
  clientId: string;
  redirectUri: string;
}

const auth0Config: Auth0Config = {
  domain: process.env.AUTH0_DOMAIN as string,
  clientId: process.env.AUTH0_CLIENT_ID as string,
  callbackUrl: process.env.CALLBACK_URL as string,
};

const auth0Param: Auth0Param = {
  domain: process.env.AUTH0_DOMAIN as string,
  clientId: process.env.AUTH0_CLIENT_ID as string,
  redirectUri: process.env.CALLBACK_URL as string,
};

class MyApp extends App {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  onRedirectCallback = (appState: HistoryState): void => {
    history.state.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
  };

  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider
          navigate={(route: string) => router.push(route)}
          auth0_domain={auth0Config.domain}
          auth0_client_id={auth0Config.clientId}
          auth0_params={auth0Param}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}

          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
