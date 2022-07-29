import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Script from 'next/script';
import * as ga from '../lib/ga'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import Header from '../components/Header';

const App = ({ Component, pageProps }: any) => {
  const router = useRouter()

  usePageViews();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const key: string = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${key}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${key}');
        `}
      </Script>

      <ThemeProvider enableSystem={true} attribute='class'>
        <GoogleAnalytics />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

