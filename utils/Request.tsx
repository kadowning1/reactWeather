import { WeatherLocation } from '../model/Weather';

const apiLink = '225e9979cafa7faa49ef4c637d23e637'
const key: string = apiLink as string;
if (key === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY')
}

const keyQuery = `appid=${key}`
const server = 'http://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string): Promise<WeatherLocation | undefined> {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);

  if (result.status === 404) {
    {
      console.log('No location found');
    }
    return undefined
  } else if (result.status !== 200) throw new Error('Failed to read location data');

  return await result.json();
}