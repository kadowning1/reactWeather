import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import { WeatherLocation } from '../model/Weather';
// import Image from 'next/image'
import { Weather } from '../model/Weather';
// import { searchLocation } from '../services/WeatherService';


export default function Home({ weather }: any): JSX.Element {
  console.log(weather)
  return (
    <div className='bg-green-600'>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Forecast data={weather} />
    </div>
  );
}
