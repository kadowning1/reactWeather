import { BadgeCheckIcon } from '@heroicons/react/solid';
import { MyImage } from '../utils/Loader';
import HeaderItem from './HeaderItem';
import { DatabaseIcon } from '@heroicons/react/solid';

export const Header = () => {

  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
          <BadgeCheckIcon className='h-8 mb-1 group-hover:animate-bounce' />
          <p className='opacity-60 group-hover:opacity-100 tracking-widest'>
            <button type='submit' className='rounded-full shadow-lg'>Get Weather</button>
          </p>
        </div>

      </div>

      <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <BadgeCheckIcon className='h-8 mb-1 group-hover:animate-bounce' />
        <p className='opacity-60 group-hover:opacity-100 tracking-widest'>
          <button type='submit' className='rounded-full shadow-lg'>Get Weather</button>
        </p>
      </div>
      <MyImage
        src={'https://links.papareact.com/ua6'}
        width={200}
        optimized={true}
      />
    </header>
  )
};

export default Header;