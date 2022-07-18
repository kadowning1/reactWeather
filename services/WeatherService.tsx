import { Weather, WeatherLocation } from '../model/Weather';

// const key: string = process.env.API_KEY as string;
// if (key === undefined) {
//   console.log('API_KEY is not defined');
// }

const newKey = '225e9979cafa7faa49ef4c637d23e637'
const keyQuery = `appid=${newKey}`
const server = 'https://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string) {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`).then((res) => res.json());

  if (result.status === 404) return undefined;
  if (result.status !== 200) console.log(`Error: ${result.status}`);
  console.log(result);
  // return await result.json();
  return {
    props: {
      weather: result
    }
  }
}

export async function readWeather(locationId: number): Promise<Weather> {
  const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`).then((res) => res.json());

  if (current.status !== 200) console.log(`Error: ${current.status}`);
  console.log(current.status);
  return await current.json();
}

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}
