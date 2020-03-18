import * as React from 'react';
import App from 'next/app';
import { withAuthenticator } from 'aws-amplify-react';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (<Component {...pageProps} />)
    }
}

export default withAuthenticator(MyApp)
