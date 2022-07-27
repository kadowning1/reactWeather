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


// export async function getServerSideProps() {

//   const key: string = '4af16e039a66300f9ce07ec031c6035e'
//   const request = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       weather: request,
//     },
//   };
// }


export const getServerSideProps: GetServerSideProps = async (context) => {
  const key: string = 'AIzaSyDoRHZyX50lAFw5-YqQVYzil0efbP6dS9U'

  const secondKey : string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
  const request = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${key || secondKey}`
  ).then((res) => res.json());

  return {
    props: {
      request,
    },
  }
}