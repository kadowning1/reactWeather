import React, { FC, useState } from "react";
import { GeoLocationSensorState } from 'react-use/lib/useGeolocation';
// import { GeoLocation } from '../model/Weather';
import { event } from "nextjs-google-analytics";

interface LocationSearchProps {
  onSearch: (search: string) => void;
  hasSearched?: boolean;
  setGeolocation?: (geolocation: any) => void;
  state?: GeoLocationSensorState
}

export const LocationSearch = ({ onSearch, hasSearched, setGeolocation, state }: LocationSearchProps) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';
  const [message, setMessage] = useState('');

  // console.log(state, 'location')

  const addLocation = () => {
    onSearch(locationSearch);
    setMessage(locationSearch);
    setLocationSearch('');
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('handleSubmit')
    addLocation();
    event("submit_form", {
      category: "Contact",
      label: message,
      value: 40,
    });
    console.log("message search", message);
    setMessage("");
  };

  return (
    <div className='my-6'>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative justify-center lg:w-2/3 sm:w-full">
          {/* {!state?.loading &&
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setGeolocation}>
              Test
            </button>
          } */}
          <input type="text" value={locationSearch} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City Name" required onChange={e => setLocationSearch(e.target.value)} />
          <button type="submit" className="cursor-pointer text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-black opacity-0 md:opacity-100 lg:w-1/6" onClick={handleSubmit} disabled={disableSearch}>Search</button>
        </div>
        <div className='relative justify-center lg:w-1/2 sm:w-full'>
          <button type="submit" className="cursor-pointer mt-4 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-black opacity-100 md:opacity-0 lg:w-1/6" onClick={handleSubmit} disabled={disableSearch}>Search</button>
        </div>
      </form>
    </div>
  );
}