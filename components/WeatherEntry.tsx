import React, { FC } from "react";
import { Weather } from "../model/Weather";
import { getIconUrl } from "../services/WeatherService";
import { convertCelciusToFahrenheit, convertUnixTimeToDate } from '../services/TimeService';
import { MyImage } from '../utils/Loader';

export interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) => {
  const mainConditions = weather.weather[0]?.main.toUpperCase();
  const description = weather.weather[0]?.description.toUpperCase();
  const icon = getIconUrl(weather.weather[0]?.icon);
  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      <div className='pt-3 block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <div className='text-2xl pb-2'>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
        <div>
          <strong>
            {convertCelciusToFahrenheit(weather.main.temp).toFixed(2)}
          </strong>
          <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
        </div>
        <div>Humidity: {weather.main.humidity}%</div>
        {weather.weather.map(condition =>
          <div key={condition.id}>
            <MyImage src={icon} alt={mainConditions} width={100} /> <p>
              {description}
            </p>
          </div>)
        }
      </div>
    </div>
  )
}