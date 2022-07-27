import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { useGeolocation } from 'react-use';
import Footer from '../components/Footer';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import { WeatherEntryProps } from '../components/WeatherEntry';

export default function Home({ weather }: WeatherEntryProps, { request }: any) {
  // console.log(weather)
  console.log(request);
  return (
    <>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div className=''>
        {/* <Header /> */}
        <Forecast data={weather} />
        <Footer />
      </div>
    </>
  );
}
