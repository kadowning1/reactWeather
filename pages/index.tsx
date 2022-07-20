import Head from 'next/head'
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import { WeatherEntryProps } from '../components/WeatherEntry';

export default function Home({ weather }: WeatherEntryProps) {
  console.log(weather)
  return (
    <div className=''>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      {/* <Header /> */}
      <Forecast data={weather} />
    </div>
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
