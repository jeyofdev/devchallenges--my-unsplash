import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PhotosContextProvider from '../context/PhotosContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PhotosContextProvider>
      <Component {...pageProps} />;
    </PhotosContextProvider>
  );
}

export default MyApp;
