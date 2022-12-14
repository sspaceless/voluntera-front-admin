import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { Layout } from '../components';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Voluntera</title>
      <meta title="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <MantineProvider
      theme={{
        fontFamily: 'Manrope',
        colors: {
          primary: ['#2B2F3B'],
          secondary: ['#67718E'],
          light: ['#959CB2'],
          action: ['#4775FF'],
          disabled: ['#A1ACCE'],
          white: ['#FFFFFF'],
          background: ['#F5F5F5'],
          stroke: ['#D9DDE8'],
          error: ['#d74747'],
          success: ['#4EB828'],
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  </>
);

export default App;
