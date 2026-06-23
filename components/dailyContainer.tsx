import { weatherIcons } from "@/libs/icon";
import { DailyForecast } from "@/libs/types";
import Image from "next/image";
import React from "react";

function DailyContainer({
  weatherData,
  system,
}: {
  weatherData: DailyForecast;
  system: string;
}) {
  const maxCelsius = weatherData?.maxTemp ?? 0;
  const minCelsius = weatherData?.minTemp ?? 0;

  const maxTemperature =
    system === "metric" ? maxCelsius : (maxCelsius * 9) / 5 + 32;
  const minTemperature =
    system === "metric" ? minCelsius : (minCelsius * 9) / 5 + 32;

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#1E2340] border border-[#3A3F65] p-2 rounded-md">
      <p className="text-sm">{weatherData.day}</p>
      <Image
        alt="weather icon"
        width={60}
        height={60}
        src={weatherIcons[weatherData?.weatherCode] ?? "/icons/icon-sunny.webp"}
      />
      <div className="flex justify-between items-center w-full text-[12px]">
        <p>{maxTemperature.toFixed()}°</p>
        <p>{minTemperature.toFixed()}°</p>
      </div>
    </div>
  );
}

export default DailyContainer;
