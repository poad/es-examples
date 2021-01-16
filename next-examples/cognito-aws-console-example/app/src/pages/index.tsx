import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import Layout from '../components/Layout';
import { ICredentials } from '@aws-amplify/core';
import { SigninToken } from '../interfaces';
import { Link, TextField } from '@material-ui/core';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import styles from '../styles/Home.module.css';
import awsconfig from '../aws-config';

Amplify.configure(awsconfig);

const Home = (): JSX.Element => {

  const [signInToken, setSignInToken] = useState<string | undefined>(undefined);

  useEffect(
    () => {
      Auth.currentUserCredentials().then((credentials: ICredentials) => {

        const sessionId = credentials.accessKeyId;
        const sessionKey = credentials.secretAccessKey;
        const sessionToken = credentials.sessionToken;

        if (credentials.authenticated) {
          fetch(`api/?session=${encodeURIComponent(JSON.stringify({ sessionId, sessionKey, sessionToken }))}`)
            .then(async (res: Response) => setSignInToken((await res.json() as SigninToken).signinToken))
            .catch(console.error)
        }
      })
        .catch(console.error);
    }, []
  );

  return (
    <Layout>
      <div className="hero">
        <main className={styles.main}>

          {
            signInToken !== undefined ? (
              <Link href={`https://signin.aws.amazon.com/federation?Action=login&Destination=${encodeURIComponent('https://console.aws.amazon.com/')}&SigninToken=${signInToken}`} target='_blank'>AWS Managed Console</Link>
            ) : (
                ''
              )
          }
          <AmplifySignOut />
        </main>
      </div>

      <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
    </Layout>
  );
}

export default withAuthenticator(Home);
