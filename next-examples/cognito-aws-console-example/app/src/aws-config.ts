const awsconfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION as string,
    userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID as string,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_WEB_CLIENT_ID as string,
    identityPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_ID_POOL_ID as string,
    oauth: {
      domain: process.env.NEXT_PUBLIC_AWS_COGNITO_OAUTH_DOMAIN as string,
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: process.env.NEXT_PUBLIC_AWS_COGNITO_OAUTH_REDIRECT_SIGNIN as string,
      redirectSignOut: process.env.NEXT_PUBLIC_AWS_COGNITO_OAUTH_REDIRECT_SIGNOUT as string,
      responseType: 'code',
    },
  },
};

export default awsconfig;