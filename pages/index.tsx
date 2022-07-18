import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import { WeatherLocation } from '../model/Weather';
// import Image from 'next/image'
import { Weather } from '../model/Weather';
// import { searchLocation } from '../utils/Request';


export default function Home({ weather }: any): JSX.Element {
  return (
    <div className=''>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Forecast weather={weather} main={weather} dt={0} />
    </div>
  );
}

// export default Home;

const newKey = '225e9979cafa7faa49ef4c637d23e637'
const keyQuery = `appid=${newKey}`
const server = 'https://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string) {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`).then((res) => res.json());

  // if (result.status === 404) return undefined;
  // if (result.status !== 200) console.log(`Error: ${result.status}`);
  // console.log(result);
  // return await result.json();
  return {
    props: {
      weather: result
    }
  }
}