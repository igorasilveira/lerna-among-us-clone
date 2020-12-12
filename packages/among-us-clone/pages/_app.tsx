import {AppProps} from 'next/app'
import '../styles/global.css'
export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}