import React, { FC } from "react";
import { Weather } from "../model/Weather";
import { MyImage } from '../utils/Loader';
// import { getIconUrl } from '../utils/Request';
// import { convertUnixTimeToDate } from '../utils/Request';

interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) =>
  <div>
    {/* <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div> */}
    <div>
      <strong>{weather.main.temp}°C</strong>
      <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {/* {weather.weather.map(condition =>
      <div key={condition.id}>
        <MyImage src={getIconUrl(condition.icon)}
         width={345} alt={condition.main} /> {condition.main} {condition.description}
      </div>)
    } */}
  </div>;