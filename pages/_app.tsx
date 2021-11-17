import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PhotosContextProvider from '../context/PhotosContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My solution for the challenge 'My unsplash' of the website https://devchallenges.io/"
        />
        <meta
          name="keywords"
          content="React, NextJs, challenge, My unsplash, devchallenges"
        />
        <link rel="icon" href="/favicon.svg" />
        <title>My unsplash by jeyofdev</title>
      </Head>
      <PhotosContextProvider>
        <Component {...pageProps} />;
      </PhotosContextProvider>
    </>
  );
}

export default MyApp;
