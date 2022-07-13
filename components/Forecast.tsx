import React, { useEffect, useState } from 'react'
import { Props } from '../pages';
import Image from 'next/image';
import { MyImage } from '../utils/Loader';
import { BadgeCheckIcon } from '@heroicons/react/solid'

interface LoginFormDataInterface {
  zipCode: number;
}

export const Forecast = ({ data }: Props) => {

  const [state, updateState] = useState("")
  { console.log(data) }

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      zipCode: HTMLInputElement;
    };
    console.log(formElements.zipCode.value);
    updateState(formElements.zipCode.value)
  };

  const kelvinTemp = data?.main?.temp;
  const celciusTemp = (Math.round(kelvinTemp - 273.15)) + 'ºC';
  const tempF = (Math.round(1.8 * (kelvinTemp - 273) + 32)) + 'ºF';

  return (
    <>
      <div>
        <div className='text-center'>
          <h1 className='text-6xl'>Current Weather App</h1>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <input type='text' maxLength={5} id='zipCode' name='zipCode' className='w-200 my-4 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Zip Code' onChange={e => updateState(e.target.value)} />
            </div>
          </form>
          <p>
            {data.name}
          </p>
          <p>{kelvinTemp}K</p>
          <p>{celciusTemp}</p>
          <p>{tempF}</p>
        </div>
      </div>


      <body className="bg-gray-100 antialiased">
        <div className="container mx-auto h-screen w-screen">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <div className="flex flex-col">
                <div>
                  <h2 className="font-bold text-gray-600">{data.name}</h2>
                </div>
                <div className="my-6">
                  <div className="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span>
                        <svg className="w-20 h-20 fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          {/* eslint-disable-next-line react/no-unknown-property */}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                          </path>
                        </svg>
                      </span>
                    </div>
                    <div id="temp">
                      <h4 className="text-4xl">{celciusTemp}</h4>
                      <p className="text-xs text-gray-500">Feels like {'Text'}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                  <a href="#" className="text-indigo-600 text-xs font-medium">View more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
};

export default Forecast;