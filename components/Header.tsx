import { BadgeCheckIcon, BookmarkAltIcon, BookmarkIcon, CollectionIcon, HomeIcon, LightningBoltIcon, MoonIcon, SearchCircleIcon, SearchIcon, SunIcon, UserIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';
import { isContext } from 'vm';
import React, { useEffect, useState } from 'react';
import { CurrentTime } from './CurrentTime';
import { Weather } from '../model/Weather';
import { useTheme } from 'next-themes';
import { event } from 'nextjs-google-analytics';
import { event_category, event_click } from '../lib/ga';
import { useRouter } from 'next/router';
import Navbar from './Navbar';


interface WeatherEntryProps {
  weather?: Weather;
  /**
  * Is Drawer open
  */
  isOpen?: boolean;
  /**
   * Toggle Drawer open or closed
   */
  toggle?: () => void;
  setShowModal?: (showModal: boolean) => void;
  modalTitle?: string;
}

export const Header = ({ weather, isOpen, toggle, setShowModal, modalTitle }: WeatherEntryProps) => {

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, [])


  const handleRouteChange = (category: string,
    action: string,
    label: string,
  ) => {
    event_click(category, action, label = 'header-click');
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (theme === 'light') {
      handleRouteChange('search', 'dark-mode', 'search-bar');
      setTheme('dark');
      event("submit_form", {
        category: "Contact",
        label: 'Switch to Dark Mode',
      });
    }
    else {
      setTheme('light');
      handleRouteChange('search', 'light-mode', 'search-bar');
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
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <p className='tracking-widest text-5xl'>
        React Weather App
      </p>
      <div className='px-4 flex flex-grow max-w-2xl justify-evenly'>
        <Navbar title={'HOME'} icon={HomeIcon} href='/' />
        <Navbar title={'ABOUT'} icon={LightningBoltIcon as any} href='/about' />
        <Navbar title={'SERVICES'} icon={BadgeCheckIcon} href='/services' />
        <Navbar title={'PRICING'} icon={CollectionIcon} href='/pricing' />
        <Navbar title={'CONTACT'} icon={SearchIcon} href='/contact' />
      </div>
      {renderThemeChanger()}
    </header>
  )
};

export default Header;