import Head from 'next/head'
import Forecast from '../components/Forecast';
import Header from '../components/Header';

export default function Home({ weather, results }: any): JSX.Element {
  console.log(weather)
  console.log(results)
  return (
    <div className=''>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <Forecast data={weather} />
    </div>
  );
}


export async function getServerSideProps() {

  const APIkey: string = '225e9979cafa7faa49ef4c637d23e637'
  const request = await fetch(`
    https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${APIkey}`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
