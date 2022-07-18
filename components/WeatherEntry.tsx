import React, { FC } from "react";
import { Weather } from "../model/Weather";
import { getIconUrl } from "../services/WeatherService";
import { convertUnixTimeToDate } from '../services/TimeService';
import { MyImage } from '../utils/Loader';

interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) => {
  { console.log(weather) }
  return (
    <div>
      <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
      <div>
        <strong>{weather.main.temp}°C</strong>
        <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
      </div>
      <div>Humidity: {weather.main.humidity}%</div>
      {weather.weather.map(condition =>
        <div key={condition.id}>
          <MyImage src={getIconUrl(condition.icon)} alt={condition.main} width={100} /> {condition.main} {condition.description}
        </div>)
      }
    </div>
  )
}