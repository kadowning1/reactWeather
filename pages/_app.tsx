import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics, usePagesViews, usePageViews } from 'nextjs-google-analytics';

import { event } from "nextjs-google-analytics";
// import * as ga from '../lib/ga'
import * as gtag from '../lib/ga'
import Script from 'next/script';


export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(
    name,
    {
      category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      label: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    },
    // gaMeasurementId
  );
}

const App = ({ Component, pageProps }: any) => {
  usePagesViews();
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  const key: string = process.env.NEXT_PUBLIC_GA_ID || ''


  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-31NBZE0N2R`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31NBZE0N2R', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider enableSystem={true} attribute='class'>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

