import { BadgeCheckIcon, BookmarkAltIcon, BookmarkIcon, MoonIcon, SearchCircleIcon, SunIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';
import { isContext } from 'vm';
import { useEffect, useState } from 'react';
import { CurrentTime } from './CurrentTime';
import { Weather } from '../model/Weather';
import { useTheme } from 'next-themes';
import {event} from 'nextjs-google-analytics';


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



  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (theme === 'light') {
      setTheme('dark');
      event("submit_form", {
        category: "Contact",
        label: 'Switch to Dark Mode',
      });
    }
    else {
      setTheme('light');
      event("submit_form", {
        category: "Contact",
        label: 'Switch to Dark Mode',
      });
    }
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <div className='"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={handleSubmit} />
        </div>
      )
    }
    else {
      return (
        <div className='"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
          <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={handleSubmit} />
        </div>
      )
    }
  };

  return (
    <header className='flex items-center p-4 justify-between'>

      <div className='flex grid-cols-2'>
        <div className=' hover:text-white px-4'>
          {/* <CurrentTime weather={weather} /> */}
          <p className='tracking-widest text-5xl'>
            React Weather App
          </p>
        </div>
      </div>
      <div className='flex grid-flow-row'>
        {renderThemeChanger()}
      </div>
    </header>
  )
};

export default Header;