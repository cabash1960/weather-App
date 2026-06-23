export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: CurrentUnits;
  current: CurrentWeather;

  hourly_units: HourlyUnits;
  hourly: HourlyWeather;

  daily_units: DailyUnits;
  daily: DailyWeather;
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  weathercode: string;
  windspeed_10m: string;

  relative_humidity_2m: string;
  apparent_temperature: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  weathercode: number;
  windspeed_10m: number;
  precipitation: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  weathercode: string;
  precipitation_probability: string;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
  precipitation_probability?: number[];
}

export interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_sum: string;
  weathercode: string;
}

export interface DailyWeather {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  weathercode: number[];
}

export interface DailyForecast {
  day: string;

  maxTemp: number;
  minTemp: number;

  weatherCode: number;
}
