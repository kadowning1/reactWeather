import { BadgeCheckIcon, SearchCircleIcon, SunIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';
import { isContext } from 'vm';
import { useEffect, useState } from 'react';
import { CurrentTime } from './CurrentTime';
import { Weather } from '../model/Weather';
// import weather.jpeg from '../public/weather.jpeg';

interface WeatherEntryProps {
  weather: Weather;
}

export const Header = ({ weather }: WeatherEntryProps) => {

  return (
    <header className='flex items-center p-4 justify-evenly'>
      <div className='flex grid-cols-2'>
        <div className=' hover:text-white px-4'>
          {/* <CurrentTime weather={weather} /> */}
          <p className='tracking-widest text-5xl'>
            React Weather App
          </p>
        </div>
        <div className='flex flex-row items-center cursor-pointer group hover:text-white'>
          <BadgeCheckIcon className='h-8 mb-1 group-hover:animate-bounce' />
          <p className='opacity-60 group-hover:opacity-100 tracking-widest'>
            <button type='submit' className='rounded-full shadow-lg'>Get Weather</button>
          </p>
        </div>
      </div>

    </header>
  )
};

export default Header;