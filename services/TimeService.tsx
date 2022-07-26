export function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export function convertCelciusToFahrenheit(celcius: number): number {
  return celcius * 9 / 5 + 32;
}

export function convertKelvinToFahrenheit(kelvin: number): number {
  return convertCelciusToFahrenheit(kelvin - 273.15);
}