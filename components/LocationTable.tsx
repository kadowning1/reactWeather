import { BookmarkIcon } from '@heroicons/react/solid';
import React, { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
  toggle: () => void;
  setShowModal: (showModal: boolean) => void;
}

export const LocationTable = ({ locations, onSelect, current, toggle, setShowModal }: LocationTableProps) => {

  const tempF = (temp: number) => {
    return Math.round((temp - 273.15) * 1.8 + 32);
  }

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className='overflow-x-auto relative text-center'>
        <table className="w-300 text-sm text-gray-500 dark:text-gray-400 text-center">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:text-center'>
            <tr>
              <th className='py-3 px-6' scope='col'>Name</th>
              <th className='py-3 px-6' scope='col'>Current Temperature</th>
              <th className='py-3 px-6' scope='col'>Current Weather</th>
              <th className='py-3 px-6' scope='col'>Extended Forecast</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location =>
              <tr key={location.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer'
                onClick={() => onSelect(location)}>
                <td className='py-4 px-6'>{location.name}</td>
                <td className='py-4 px-6'>{tempF(location.main?.temp)}</td>
                <td className='py-4 px-6'>
                  <button
                    className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    {location.weather?.map(weather => weather.main).join(', ')}
                  </button>
                </td>
                <td>
                  <div className='flex flex-col items-center cursor-pointer group w-40 hover:text-white' onClick={toggle}>
                    <p className='tracking-widest text-center text-xs text-gray-500 dark:text-gray-400'>EXTENDED FORECAST FOR {location.name}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
