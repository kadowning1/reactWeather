import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "./WeatherEntry";
import { Weather, WeatherLocation } from "../model/Weather";
import { readForecast, readWeather } from "../services/WeatherService";
import { CurrentWeather } from './CurrentWeather';
import { convertCelciusToFahrenheit, convertUnixTimeToDate } from '../services/TimeService';

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);

  useEffect(() => {
    (async function () {
      if (location) {
        const [weather, forecast] = await Promise.all([
          readWeather(location.id),
          readForecast(location.id)
        ]);
        setWeather(weather);
        setForecast(forecast);
      }
    })()
  }, [location]);

  if (!location || !weather || !forecast) return null;

  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>{location.name}</h1>
        <p className='text-sm'>{regionNamesInEnglish.of(location.sys.country)}</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-xl'>
          Current Time: {convertUnixTimeToDate(weather.dt).toLocaleTimeString()}
        </p>
        <p className='text-xl'>
          Current Temperature: {convertCelciusToFahrenheit(weather.main.temp).toFixed(2)}
        </p>
        <p className='text-xl'>
          Min Temperature: {convertCelciusToFahrenheit(weather.main.temp_min).toFixed(2)}
        </p>
        <p className='text-xl'>
          Max Temperature: {convertCelciusToFahrenheit(weather.main.temp_max).toFixed(2)}
        </p>
        <p className='text-xl'>
          Humidity: {weather.main.humidity}
        </p>
      </div>
      <div>
        <ol className='p-5 my-10 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 3xl:flex flex-wrap text-center border-r-emerald-700'>
          {forecast.map(timePoint =>
            <li key={timePoint.dt} className='py-3'>
              <WeatherEntry weather={timePoint} />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};