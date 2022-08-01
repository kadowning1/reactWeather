import Head from 'next/head'
import Footer from '../components/Footer';
import Forecast from '../components/Forecast';
import { WeatherEntryProps } from '../components/WeatherEntry';

export default function Home({ weather }: WeatherEntryProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <Forecast data={weather} />
      <Footer />
    </>
  );
}
