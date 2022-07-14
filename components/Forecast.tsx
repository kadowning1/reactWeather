import React, { FC, useState } from 'react';
import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";
import { WeatherLocation } from "../model/Weather";
import { ErrorAlert, WarningAlert } from "./Alerts";
import { WeatherSummary } from './WeatherSummary';
import { searchLocation } from '../utils/Request';
import { Props } from '../pages';

const Forecast: FC = ({ data, zipCode }: Props) => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  console.log(data, zipCode)

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      {JSON.stringify(data)}

      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <LocationTable locations={locations} />
    </div>
  );
};

export default Forecast;