import React, { FC, useState } from 'react';
import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";
import { Weather, WeatherLocation } from "../model/Weather";
import { searchLocation } from "../services/WeatherService";
import { ErrorAlert, WarningAlert } from "./Alerts";
import { WeatherSummary } from "./WeatherSummary";
import Header from './Header';
import { CurrentWeather } from './CurrentWeather';
import SideDrawer from './SideDrawer';
import Modal from './Modal';

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

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setShowModal(!showModal);

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


  return (
    <div className="">
      <Header weather={data} isOpen={isOpen} toggle={toggle} setShowModal={setShowModal} modalTitle={'Current Weather'} />
      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <div>
        {userSearches && <LocationTable locations={locations} current={currentLocation} onSelect={setCurrentLocation} />}
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <SideDrawer isOpen={isOpen} toggle={toggle} weather={data}>
          <WeatherSummary location={currentLocation} />
        </SideDrawer>
        <Modal isOpen={showModal} setShowModal={setShowModal} weather={data} toggle={toggleModal} modalTitle={'Current Weather'} modalYesButtonText={'Test'} modalNoButtonText={'Anayltics'}>
          <WeatherSummary location={currentLocation} />
        </Modal>
      </div>
    </div>
  );
};

export default Forecast;