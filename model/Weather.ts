export interface Coordinates {
  lon: number;
  lat: number;
}

export interface MainWeather {
  temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  feels_like: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  temp_min: number;
  temp_max: number;
  pressure: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
  humidity: number; // Humidity, %
}

export interface WeatherLocation {
  coord: Coordinates;
  id: number;
  name: string;
  main: MainWeather;
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherConditions[];
}

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
  name: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Weather {
  name?: string;
  weather: WeatherConditions[];
  main: MainWeatherData;
  dt: number;
}
