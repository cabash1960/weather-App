"use client";

import React from "react";

import { WeatherData } from "@/libs/types";
import { useUnit } from "./unitProvider";
import Container from "./container";

function WeatherDisplay({ weatherData }: { weatherData: WeatherData }) {
  const { system } = useUnit();
  const celsius = weatherData?.current?.apparent_temperature ?? 0;
  // Convert Celsius to Fahrenheit: (C * 9/5) + 32
  const temperature =
    system === "metric" ? celsius : +((celsius * 9) / 5 + 32).toFixed();

  const humidity = weatherData?.current?.relative_humidity_2m ?? 0;

  const wind = +(weatherData?.current?.windspeed_10m ?? 0).toFixed(2);
  const formattedWind = system === "metric" ? wind : +(wind * 2.237).toFixed();

  const precipitation = +(weatherData?.current?.precipitation ?? 0).toFixed(2);
  const formattedPrecipitation =
    system === "metric" ? precipitation : precipitation * 2.237;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Container
        value={temperature}
        label={"Feels Like"}
        unit={{ metric: "°", imperial: "°" }}
        system={system}
      />
      <Container
        value={humidity}
        label={"Humidity"}
        unit={{ metric: "%", imperial: "%" }}
        system={system}
      />
      <Container
        value={formattedWind}
        label={"Wind"}
        unit={{ metric: " km/h", imperial: " mph" }}
        system={system}
      />
      <Container
        value={formattedPrecipitation}
        label={"Precipitation"}
        unit={{ metric: " mm", imperial: " in" }}
        system={system}
      />
    </div>
  );
}

export default WeatherDisplay;
