import { AppProps } from 'next/app';
import { GameProvider } from '../context/GameContext';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
