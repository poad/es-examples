import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import '../styles/globals.css'

const components = {
  img: Image,
  p: Text,
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout children={(<Component {...pageProps} />)} />
  );
}
export default MyApp
