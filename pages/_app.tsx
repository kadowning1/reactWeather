import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/Header';

import { pageview } from '../lib/ga';

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    // if (typeof window !== 'undefined') {
    //   console.log("init GTM")
    //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID as string });
    // } else {
    //   console.log("GTM server side - ignorning")
    // }

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=GTM-WHKQ4PS'+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','');
      `}
      </Script>

      <ThemeProvider enableSystem={true} attribute='class'>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

