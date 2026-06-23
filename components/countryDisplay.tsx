import { WeatherData } from "@/libs/types";
import React from "react";
import { useUnit } from "./unitProvider";
import { weatherIcons } from "@/libs/icon";
import Image from "next/image";
import dayjs from "dayjs";

function CountryDisplay({
  city,
  country,
  weatherData,
}: {
  city: string;
  country: string;
  weatherData: WeatherData;
}) {
  const { system } = useUnit();

  const celsius = weatherData?.current?.temperature_2m ?? 0;
  // Convert Celsius to Fahrenheit: (C * 9/5) + 32
  const temperature = system === "metric" ? celsius : (celsius * 9) / 5 + 32;
  const time = weatherData?.current?.time;
  const formattedTime = dayjs(time).format("dddd, MMM D, YYYY");
  // console.log(formattedTime);

  return (
    <div className="bg-[url('/icons/bg-today-large.svg')] bg-cover bg-center bg-no-repeat px-8 py-14  flex lg:justify-between flex-col lg:flex-row  lg:rounded-lg rounded-2xl">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="text-4xl lg:text-2xl font-bold">
          {city}, {country}
        </div>
        <div className="lg:text-sm text-md text-center text-neutral-400">
          {formattedTime}
        </div>
      </div>
      <div className="flex text-center justify-around items-center gap-2">
        <div>
          <Image
            alt="weather icon"
            width={100}
            height={100}
            src={
              weatherIcons[weatherData?.current?.weathercode] ??
              "/icons/icon-sunny.webp"
            }
          />
        </div>
        <div className="lg:text-6xl font-bold text-7xl italic">{`${Math.round(temperature)}°`}</div>
      </div>
    </div>
  );
}

export default CountryDisplay;
