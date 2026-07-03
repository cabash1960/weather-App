import { WeatherData } from "./types";

export async function fetchData(cityName: string) {
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
  );

  const data = await geoResponse.json();

  const { latitude, longitude, name, country } = data.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m,apparent_temperature` +
      `&hourly=temperature_2m,weathercode,precipitation_probability` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode` +
      `&temperature_unit=celsius` +
      `&windspeed_unit=kmh` +
      `&precipitation_unit=mm` +
      `&timezone=auto`,
  );
  const weatherData: WeatherData = await weatherRes.json();

  return { city: `${name}`, country, weatherData };
}
