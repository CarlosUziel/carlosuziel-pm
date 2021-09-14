import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../src/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Loader from '@/components/Loader';
import { DefaultSeo } from 'next-seo';
import PlausibleProvider from 'next-plausible';
import AppLayout from '@/components/AppLayout';
import theme from '../src/theme';
import MDXComponents from '@/components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.documentElement.lang = `en-GB`;
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on(`routeChangeStart`, start);
    Router.events.on(`routeChangeComplete`, end);
    Router.events.on(`routeChangeError`, end);
    return () => {
      Router.events.off(`routeChangeStart`, start);
      Router.events.off(`routeChangeComplete`, end);
      Router.events.off(`routeChangeError`, end);
    };
  }, []);

  return (
    <>
      <DefaultSeo
        defaultTitle='Carlos Uziel'
        titleTemplate='%s | Carlos Uziel PM'
        openGraph={{
          title: `Carlos Uziel`,
          type: `website`,
          site_name: `Carlos Uziel`,
          images: [
            {
              url: `https://www.carlosuziel-pm.vercel.app/static/images/portrait_nobg.png`,
              alt: `Profile Picture`,
            },
          ],
        }}
        description='Personal portfolio website.'
      />
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MDXProvider components={MDXComponents}>
            {loading ? (
              <Loader />
            ) : (
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            )}
          </MDXProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
