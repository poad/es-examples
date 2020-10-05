import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import axios from 'axios';

import Amplify from 'aws-amplify';

import gql from 'graphql-tag';

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { CSSProperties } from '@material-ui/styles';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { StoreObject } from 'apollo-cache-inmemory/lib/types';
import { createTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';
import awsExports from '../aws-exports';

import { ToDo } from '../types';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

import auth0Config from '../lib/auth0Config';
// import { withAuthenticator} from 'aws-amplify-react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

Amplify.configure(awsExports);
// Auth.configure(awsExports);

type ListTodos = {
  listTodos: {
    items: ToDo[]
  }
};

type CreateTodoInput = {
  id?: string | never,
  name: string,
  description: string,
};

interface NormalizedCacheObject {
  [dataId: string]: StoreObject;
}

const Home = (): JSX.Element => {
  const [auth0] = useState<Auth0Client>(new Auth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
  }));

  const [token, setToken] = useState<string>();

  const classes = useStyles();

  const [todos, setTodos] = useState([] as ToDo[]);

  const [client, setClient] = useState<AWSAppSyncClient<NormalizedCacheObject>>();

  const getToken = () => {
    Promise.all([axios({
      url: `https://${auth0Config.domain}/oauth/token`,
      method: 'POST',
      data: {
        grant_type: 'client_credentials',
        client_id: `${auth0Config.clientId}`,
        client_secret: `${auth0Config.clientSecret}`,
        audience: `https://${auth0Config.domain}/api/v2/`,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => setToken(response.data.access_token))]);
  };

  const newClient = () => {
    if (token !== undefined && client === undefined) {
      const c: AWSAppSyncClient<NormalizedCacheObject> = new AWSAppSyncClient({
        url: awsExports.aws_appsync_graphqlEndpoint,
        region: awsExports.aws_appsync_region,
        auth: {
          type: AUTH_TYPE.OPENID_CONNECT,
          jwtToken: () => token,
        },
      });
      setClient(c);
    }
  };

  const fetchTodos = () => {
    try {
      if (token !== undefined) {
        newClient();

        const query = gql(`${listTodos.toString()}`);
        if (client !== undefined) {
          Promise.all([
            client.query<ListTodos>({ query })
              .then((result) => {
                setTodos(result.data.listTodos.items);
              }),
          ]);
        } else {
          // eslint-disable-next-line no-console
          console.error('client is undefined');
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.dir(err);
    }
  };

  useEffect(() => {
    getToken();
    fetchTodos();
  }, [client]);

  const addTodo = async (name: string, description: string) => {
    try {
      const todo = { name, description } as CreateTodoInput;

      setTodos([...todos, todo]);

      if (token !== undefined) {
        newClient();

        const mutation = gql(`${createTodo.toString()}`);
        if (client !== undefined) {
          Promise.all([
            client.mutate({ mutation, variables: { input: todo } }),
          ]);
        } else {
          // eslint-disable-next-line no-console
          console.error('client is undefined');
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('error creating todo:', err);
    }
  };

  const styles = {
    container: {
      width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20,
    } as CSSProperties,
    todo: { marginBottom: 15 },
    input: {
      border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18,
    },
    button: {
      backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px',
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {
            token !== undefined ? (
              <Button color="inherit" onClick={() => auth0.logout()}>
                <ExitToAppOutlinedIcon /><Typography variant="h6" className={classes.title}>Sign Out</Typography>
              </Button>
            ) : (
              <Button color="inherit" onClick={() => auth0.loginWithRedirect()}>
                <Typography variant="h6" className={classes.title}>Sign In</Typography>
              </Button>
            )
          }
        </Toolbar>
      </AppBar>
      <div style={styles.container}>
        {
          token !== undefined ? (
            <React.Fragment>
              <ToDoForm onSubmit={addTodo} />
              <ToDoList todos={todos} />
            </React.Fragment>
          ) : 'Please sign in'
        }
      </div>
    </div>
  );
};

// export default withAuthenticator(Home);
export default Home;
