import React, { FC, useState } from 'react';

import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";
import { Weather, WeatherLocation } from "../model/Weather";
import { searchLocation } from "../services/WeatherService";
import { ErrorAlert, WarningAlert } from "./Alerts";
import { WeatherSummary } from "./WeatherSummary";

const Forecast = ({ weather }: Weather) => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    }
    // else if (locations.find(item => item.id == location.id)) {
    //   setWarning(`Location '${term}' is already in the list.`);
    // } 
    else {
      setLocations([location as any, ...locations]);
    }
  };

  console.log(weather);

  return (
    <div className="container">
      <h1>Weather Forecast</h1>

      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <LocationTable locations={locations}
        current={currentLocation}
        onSelect={location => setCurrentLocation(location)} />

      <WeatherSummary location={currentLocation} />
    </div>
  );
};

export default Forecast;