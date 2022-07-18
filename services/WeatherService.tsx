import { Weather, WeatherLocation } from '../model/Weather';

const key: string = '4af16e039a66300f9ce07ec031c6035e'
if (key === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY')
}

const keyQuery = `appid=${key}`
const server = 'http://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string): Promise<WeatherLocation | undefined> {
  const result = await (await fetch(`${server}/weather?q=${term}&${keyQuery}`)).json()
  if (result.cod === '404') {
    return undefined
  } else {
    console.log(result)
    return result
  }
}

export async function readWeather(locationId: number): Promise<Weather> {
  const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`);

  if (current.status !== 200) console.log('Failed to read location data');

  return await current.json();
}

export async function readForecast(locationId: number): Promise<Weather[]> {
  const forecast = await fetch(`${server}/forecast?id=${locationId}&${keyQuery}&units=metric&cnt=8`);

  if (forecast.status !== 200) console.log('Failed to read location data');

  return (await forecast.json()).list;
}

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}