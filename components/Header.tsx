import { BadgeCheckIcon, BookmarkAltIcon, BookmarkIcon, CollectionIcon, HomeIcon, LightningBoltIcon, MoonIcon, SearchCircleIcon, SearchIcon, SunIcon, UserIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';
import { isContext } from 'vm';
import React, { useEffect, useState } from 'react';
import { CurrentTime } from './CurrentTime';
import { Weather } from '../model/Weather';
import { useTheme } from 'next-themes';
// import { event_click } from '../lib/ga';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface WeatherEntryProps {
  weather?: Weather; // the weather data
  isOpen?: boolean;  // is the side drawer open
  toggle?: () => void; // toggle the drawer open or closed
  setShowModal?: (showModal: boolean) => void; // toggle the modal
  modalTitle?: string;  // the title of the modal
}

export const Header = () => {

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const tagManagerArgs = {
    gtmId: 'GTM-WHKQ4PS',
    events: {
      sendUserInfo: 'userInfo'
    }
  }



  useEffect(() => {
    setMounted(true);
  }, [])


  // const handleRouteChange = (category: string,
  //   action: string,
  //   label: string,
  // ) => {
  //   event_click(category, action, label);
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (theme === 'light') {
      // handleRouteChange('search', 'dark-mode', 'search-bar');
      setTheme('dark');
    }
    else {
      setTheme('light');
      // handleRouteChange('search', 'light-mode', 'search-bar');
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
      <Link href='/'>
        <p className='tracking-widest text-5xl'>
          React Weather App
        </p>
      </Link>
      <div className='flex flex-grow justify-evenly'>
        <HeaderItem title={'HOME'} icon={HomeIcon} href='/' />
        <HeaderItem title={'ABOUT'} icon={LightningBoltIcon} href='/about' />
        <HeaderItem title={'SERVICES'} icon={BadgeCheckIcon} href='/services' />
        <HeaderItem title={'PRICING'} icon={CollectionIcon} href='/pricing' />
        <HeaderItem title={'CONTACT'} icon={SearchIcon} href='/contact' />
        {renderThemeChanger()}
      </div>
    </header>
  )
};

export default Header;