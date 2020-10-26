import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Storage from '@aws-amplify/storage';
import styles from '../styles/Home.module.css';
import awsconfig from '../aws-config';

Amplify.configure(awsconfig);

const Home = (): JSX.Element => {
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);

  const listFiles = () => {
    Promise.all([Storage.list('/',
      { identityId: 'us-west-2:d563eec9-b4d4-479c-886e-b32699ce2ffc' })
      .then((result) => {
        // for debug
        // eslint-disable-next-line no-console
        console.log(result);
      })
    // eslint-disable-next-line no-console
      .catch((err) => console.log(err))]);
  };

  const getUser = async (): Promise<void> => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        if (result !== undefined && result.signInUserSession !== undefined) {
          setUser(result as CognitoUser);
        } else {
          setUser(undefined);
        }
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        setUser(undefined);
      });
  };

  Hub.listen('auth', async (data) => {
    switch (data.payload.event) {
      case 'signIn':
        await getUser();
        break;
      case 'signOut':
        setUser(undefined);
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    if (user !== undefined) {
      listFiles();
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in">
          <div slot="federated-buttons"></div>
          <div slot="secondary-footer-content"></div>
        </AmplifySignIn>

        <main className={styles.main}>
          <div>
            <AmplifySignOut />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </AmplifyAuthenticator>
    </div>
  );
};

export default Home;
