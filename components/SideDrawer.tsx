import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import { Weather } from '../model/Weather';

interface SideDrawerProps {
  isOpen: boolean;  // is the drawer open
  toggle: () => void; // toggle is a function that closes the drawer
  children: React.ReactNode; // children are the contents of the drawer
  weather: Weather; // weather is the current weather
}

export default function SideDrawer({ children, isOpen, toggle, weather }: SideDrawerProps) {
  // console.log(weather)
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform dark:bg-slate-600" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <button className="justify-end text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={toggle}>
            <XIcon height={50} width={50} />

          </button>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={toggle}
      ></section>
    </main>
  );
}
