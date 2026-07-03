"use client";

import { fetchData } from "@/libs/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CountryDisplay from "./countryDisplay";
import WeatherDisplay from "./weatherDisplay";
import DailyForcast from "./dailyForcast";
import HourlyForcast from "./hourlyForcast";

function WeatherPage({ searchCity }: { searchCity: string }) {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["weatherData", searchCity],
    queryFn: async () => {
      const data = await fetchData(searchCity);
      return data;
    },
    enabled: !!searchCity,
  });

  if (!searchCity)
    return (
      <div className="font-bold text-center   text-2xl font-bricolage ">
        Please search for a city to see the weather
      </div>
    );

  if (isPending) return "Loading...";

  if (error)
    return (
      <div className="font-bold font-bricolage text-4xl">No Result found</div>
    );

  const { city, country, weatherData } = data;

  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-6">
      <div className="flex flex-col  gap-6 col-span-2">
        <CountryDisplay
          city={city}
          country={country}
          weatherData={weatherData}
        />
        <WeatherDisplay weatherData={weatherData} />
        <DailyForcast weatherData={weatherData} />
      </div>

      <HourlyForcast weatherData={weatherData} />
    </div>
  );
}

export default WeatherPage;
