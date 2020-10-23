const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string,
  clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET as string,
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI as string,
};

export default auth0Config;
