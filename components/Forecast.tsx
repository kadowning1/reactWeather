import React, { FC, useState } from 'react';
import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";
import { Weather, WeatherLocation } from "../model/Weather";
import { searchLocation } from "../services/WeatherService";
import { ErrorAlert, WarningAlert } from "./Alerts";
import { WeatherSummary } from "./WeatherSummary";
import Header from './Header';
import { CurrentWeather } from './CurrentWeather';

interface WeatherAppProps {
  data: Weather,
  userSearch?: boolean
}

const Forecast = ({ data, userSearch }: WeatherAppProps) => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
  const [userSearches, setUserSearch] = useState(false);

  const resetAlerts = () => {
    setError('');
    setWarning('');
    setUserSearch(false);
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called ${term}. Please try again.`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
      setUserSearch(true);
    }
  };

  console.log(data)

  return (
    <div className="">
      <Header weather={data} />
      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <CurrentWeather weather={data} />
      {/* {userSearch && */}
      <div>
        <WeatherSummary location={currentLocation} />
        <LocationTable locations={locations}
          current={currentLocation}
          onSelect={location => setCurrentLocation(location)} />
      </div>
      {/* } */}


    </div>
  );
};

export default Forecast;