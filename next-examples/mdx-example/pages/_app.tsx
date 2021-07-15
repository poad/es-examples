import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout children={(<Component {...pageProps} />)} />
  );
}
export default App;
