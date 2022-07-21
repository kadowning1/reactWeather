import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics, usePagesViews, usePageViews } from 'nextjs-google-analytics';

import { event } from "nextjs-google-analytics";
import * as ga from '../lib/ga'


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

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class'>

        <GoogleAnalytics strategy='lazyOnload' />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
