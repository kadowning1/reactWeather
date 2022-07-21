// import { pageview, event } from '../../lib/ga';
import { useState } from 'react'
import Forecast from '../../components/Forecast';
import { WeatherEntryProps } from '../../components/WeatherEntry';


export const Analytics = () => {


  // const search = () => {
  //   event({
  //     action: "search",
  //     params: {
  //       search_term: query
  //     }
  //   })
  // }
  { console.log('weather') }


  return (
    <p>Analytics</p>
    // <div>
    //   <div>
    //     <input type="text" onChange={(event) => setQuery(event.target.value)} />
    //   </div>
    //   <Forecast data={weather} />
    //   <div>
    //     <button className='text-blue-900' onClick={() => search()}>Search</button>
    //   </div>
    // </div>
  )
}