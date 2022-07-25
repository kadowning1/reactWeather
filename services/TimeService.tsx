export function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export function convertCelciusToFahrenheit(celcius: number): number {
  return celcius * 9 / 5 + 32;
}