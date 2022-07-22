import React, { FC } from "react";
import { Weather, WeatherLocation } from "../model/Weather";
import { getIconUrl } from "../services/WeatherService";
import { convertUnixTimeToDate } from '../services/TimeService';
import { MyImage } from '../utils/Loader';
import { WeatherEntryProps } from './WeatherEntry';

interface WeatherAppProps {
  data: Weather,
  location: WeatherLocation | null;
}

export const CurrentWeather = ({ data, location }: WeatherAppProps) => {
  console.log(data)
  console.log(location)

  const mainConditions = location?.weather[0]?.main.toUpperCase();
  const description = location?.weather[0]?.description.toUpperCase();
  const icon = getIconUrl(location?.weather[0].icon as string);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-4xl mb-4'>{location?.name} </div>
      <div className='flex flex-col p-10 justify-center items-center shadow-md md:flex-row md:max-w-xl rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <div className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'>
          <MyImage src={icon} alt={mainConditions} width={100} />
          <p>
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="mb-8">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {location?.main?.temp}°C
            </p>
          </div>
          <div className="flex items-center">

            <div className="text-sm">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">({location?.main?.temp_min}°C / {location?.main?.temp_max}°C)</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Humidity: {location?.main?.humidity}%</p>
              <p className='font-normal text-gray-700 dark:text-gray-400'>Current Time: {convertUnixTimeToDate(location?.dt as number).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}