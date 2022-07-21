import { BadgeCheckIcon, BookmarkAltIcon, BookmarkIcon, MoonIcon, SearchCircleIcon, SunIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';
import { isContext } from 'vm';
import { useEffect, useState } from 'react';
import { CurrentTime } from './CurrentTime';
import { Weather } from '../model/Weather';
import { useTheme } from 'next-themes';
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
  setShowModal: (showModal: boolean) => void;
  modalTitle: string;
}

export const Header = ({ weather, isOpen, toggle, setShowModal, modalTitle }: WeatherEntryProps) => {

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }
    else {
      return (
        <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
  };

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
        {renderThemeChanger()}
      </div>
      <div>
        <button
          className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {modalTitle}
        </button>
      </div>

    </header>
  )
};

export default Header;