import { BadgeCheckIcon, BookmarkAltIcon, BookmarkIcon, SearchCircleIcon, SunIcon } from '@heroicons/react/solid';
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
  /**
  * Is Drawer open
  */
  isOpen: boolean;
  /**
   * Toggle Drawer open or closed
   */
  toggle: () => void;
}

export const Header = ({ weather, isOpen, toggle }: WeatherEntryProps) => {

  return (
    <header className='flex items-center p-4 justify-evenly'>
      <div className='flex grid-cols-2'>
        <div className=' hover:text-white px-4'>
          {/* <CurrentTime weather={weather} /> */}
          <p className='tracking-widest text-5xl'>
            React Weather App
          </p>
        </div>
        <div className='flex flex-col items-center cursor-pointer group w-40 hover:text-white' onClick={toggle}>

          <BookmarkIcon className='h-9 mb-1 group-hover:animate-bounce' />
          <p className='tracking-widest text-center'>
            {isOpen ? 'Close' : 'Open Recent Locations'}
          </p>

        </div>
      </div>

    </header>
  )
};

export default Header;