import React, { FC } from "react";
import { Weather } from "../model/Weather";
import { getIconUrl } from "../services/WeatherService";
import { convertUnixTimeToDate } from '../services/TimeService';
import { MyImage } from '../utils/Loader';
import { WeatherEntryProps } from './WeatherEntry';

export const CurrentWeather = ({ weather }: WeatherEntryProps) => {
  console.log(weather)

  return (
    <>
      <div>
        <strong>{weather?.main?.temp}°C</strong>
        <div>({weather?.main?.temp_min}°C / {weather?.main?.temp_max}°C)</div>
      </div>
    </>
  )
}