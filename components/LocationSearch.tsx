import { SearchCircleIcon } from '@heroicons/react/solid';
import React, { FC, useState } from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
  hasSearched?: boolean;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch, hasSearched }) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  return (
    <div className="">
      <form className='flex flex-col justify-center items-center'>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative justify-center w-1/2">
          <input type="text" value={locationSearch} className="justify-evenly text-center block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City Name" required onChange={e => setLocationSearch(e.target.value)} />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addLocation} disabled={disableSearch}>Search</button>
        </div>
      </form>
    </div>
  );
}