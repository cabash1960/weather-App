import { WeatherData } from "@/libs/types";
import dayjs from "dayjs";
import React from "react";
import DailyContainer from "./dailyContainer";
import { useUnit } from "./unitProvider";

function DailyForcast({ weatherData }: { weatherData: WeatherData }) {
  const forecast = weatherData.daily.time.map((date, index) => ({
    day: dayjs(date).format("ddd"),
    maxTemp: weatherData.daily.temperature_2m_max[index],
    minTemp: weatherData.daily.temperature_2m_min[index],
    weatherCode: weatherData.daily.weathercode[index],
  }));
  const { system } = useUnit();

  return (
    <div className="mt-2 flex flex-col gap-4 ">
      <h3>Daily Forecast</h3>
      <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {forecast.map((item, index) => {
          return (
            <DailyContainer key={index} weatherData={item} system={system} />
          );
        })}
      </div>
    </div>
  );
}

export default DailyForcast;
