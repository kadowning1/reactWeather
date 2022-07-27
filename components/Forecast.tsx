import React, { FC, useEffect, useState } from 'react';
import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";
import { Weather, WeatherLocation } from "../model/Weather";
import { getLatandLong, searchLocation } from "../services/WeatherService";
import { ErrorAlert, WarningAlert } from "./Alerts";
import { WeatherSummary } from "./WeatherSummary";
import Header from './Header';
import { CurrentWeather } from './CurrentWeather';
import SideDrawer from './SideDrawer';
import Modal from './Modal';
import Link from 'next/link';
import { useBattery, useGeolocation, useLocation } from 'react-use';

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setShowModal(!showModal);

  const state = useGeolocation();
  const { latitude, longitude } = state;

  useEffect(() => {

    if (latitude && longitude) {
      setLat(latitude);
      setLong(longitude);
    }
  }, [latitude, longitude]);


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

  const setGeoLocation = async () => {
    resetAlerts();
    // setLat(state.latitude || 0);
    // setLong(state.longitude || 0);
    const location = await getLatandLong(lat, long);
    // console.log(location, 'location');
    // console.log(lat, 'lat');
    // console.log(long, 'long');
    if (!location) {
      setError(`No location found at ${state.latitude},${state.longitude}. Please try again.`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${state.latitude},${state.longitude}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
      setUserSearch(true);
    }
  }



  return (
    <div className="">
      <Header weather={data} isOpen={isOpen} toggle={toggle} setShowModal={setShowModal} modalTitle={'Current Weather'} />
      Latitude = {state.latitude}
      <LocationSearch onSearch={addLocation} setGeolocation={setGeoLocation} state={state} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <div>
        {userSearches && <LocationTable locations={locations} current={currentLocation} onSelect={setCurrentLocation} toggle={toggle} setShowModal={setShowModal} />}
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <SideDrawer isOpen={isOpen} toggle={toggle} weather={data}>
          <WeatherSummary location={currentLocation} />
        </SideDrawer>
        <Modal isOpen={showModal} setShowModal={setShowModal} weather={data} toggle={toggleModal} modalTitle={'Current Weather'} modalYesButtonText={'Test'} modalNoButtonText={'Anayltics'}>
          <CurrentWeather data={data} location={currentLocation} />
        </Modal>
      </div>
      <Link href="forecast/location">
        <a className="text-center text-2xl font-bold my-10">
          View Forecast
        </a>
      </Link>
      <div className="flex flex-col justify-center items-center my-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setGeoLocation}>
          Test
        </button>
      </div>
    </div>
  );
};

export default Forecast;