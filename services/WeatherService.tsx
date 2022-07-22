import { Weather, WeatherLocation } from '../model/Weather';



const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || '';


if (API_KEY === undefined) {
  console.log('No Open Weather API API_KEY defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_API_KEY')
}

const keyQuery = `appid=${API_KEY}`
const server = 'http://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string): Promise<WeatherLocation | undefined> {
  const result = await (await fetch(`${server}/weather?q=${term}&${keyQuery}`)).json()
  if (result.cod === '404') {
    return undefined
  } else {
    // console.log(result.error, 'result', result)
    // console.log(process.env)
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

export enum TempUnit {
  CELCIUS,
  FAHRENHEIT,
}

export function kelvinToCelcius(num: number) {
  return Math.round(num - 273.15);
}

export function celciusToFahrenheit(c: number) {
  return Math.round(c * (9 / 5) + 32);
}

export function fahrenheitToCelcius(f: number) {
  return Math.round(((f - 32) * 5) / 9);
}

export function kmToMile(n: number) {
  return Math.round(n / 1.60934);
}

export function mileToKm(n: number) {
  return Math.round(n * 1.60934);
}