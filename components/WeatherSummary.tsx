import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "./WeatherEntry";
import { Weather, WeatherLocation } from "../model/Weather";
import { readForecast, readWeather } from "../services/WeatherService";
import { CurrentWeather } from './CurrentWeather';
import { convertUnixTimeToDate } from '../services/TimeService';

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

  return (
    <div>
      <div className='my-5 text-center'>
        {/* <CurrentWeather data={weather} /> */}
        {JSON.stringify(weather)}
        <p className='text-xl'>
          Current Time: {convertUnixTimeToDate(weather.dt).toLocaleTimeString()}
          {/* {console.log(weather.dt.toLocaleString())} */}
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