import React, { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable = ({ locations, onSelect, current }: LocationTableProps) => {

  const tempF = (temp: number) => {
    return Math.round((temp - 273.15) * 1.8 + 32);
  }

  return (
    <div className="flex flex-col justify-end">
      <div className='overflow-x-auto relative text-center'>
        <h2>Locations</h2>
        <table className="w-300 text-sm text-gray-500 dark:text-gray-400 text-center">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='py-3 px-6' scope='col'>Name</th>
              <th className='py-3 px-6' scope='col'>Current Temperature</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location =>
              <tr key={location.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer'
                onClick={() => onSelect(location)}>
                <td className='py-4 px-6'>{location.name}</td>
                <td className='py-4 px-6'>{tempF(location.main?.temp)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
