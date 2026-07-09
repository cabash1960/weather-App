import { HourlyWeather, WeatherData } from "@/libs/types";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { weatherIcons } from "@/libs/icon";

function HourlyForcast({ weatherData }: { weatherData: WeatherData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(weatherData.daily.time[0]);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  const hourlyData = useMemo(() => {
    return weatherData.hourly.time.map((time, index) => {
      return {
        time: time,
        temperature_2m: weatherData.hourly.temperature_2m[index],
        weatherCode: weatherData.hourly.weathercode[index],
      };
    });
  }, [weatherData]);
  // const currentTime = new Date();
  // const formattedTime = dayjs(currentTime.getTime() - 360000).format("h A");
  // // const listedTime = dayjs(time).format("h A");
  // console.log(formattedTime);

  const formattedDay = dayjs(selectedDay).format("dddd");

  // const selectedDayHour = useMemo(() => {
  //   const filteredDay = hourlyData.filter((hour) =>
  //     hour.time.startsWith(selectedDay),
  //   );
  //   const sortedDay = filteredDay.map;

  //   return;
  // }, [hourlyData, selectedDay]);
  const selectedDayHour = useMemo(() => {
    const sortedDay = hourlyData.filter((hour) =>
      hour.time.startsWith(selectedDay),
    );

    return sortedDay.slice(6, 14);
  }, [hourlyData, selectedDay]);

  // function sortedTime(time: string) {}
  // console.log(selectedDayHour);
  return (
    <div className="p-4 bg-[#1E2340] flex flex-col gap-4 rounded-lg">
      <div className="flex justify-between items-center relative">
        <h3 className="text-[14px] lg:text-[16px]">Hourly Forecast</h3>
        <div className="relative">
          <button
            onClick={handleClick}
            className="flex gap-2 text-[14px] lg:text-[16px] items-center bg-[#3A3F65]  px-4 py-2 rounded-md cursor-pointer"
          >
            {formattedDay}
            <Image
              src="/icons/icon-dropdown.svg"
              alt="dropdown"
              width={12}
              height={12}
            />
          </button>

          {isOpen && (
            <ul
              className="cursor-pointer flex px-4 py-2 flex-col gap-2 w-[150px] absolute bg-[#1E2340] border border-[#3A3F65] rounded-md mt-2 right-0 z-10"
              onMouseLeave={() => setIsOpen(!isOpen)}
            >
              {weatherData.daily.time.map((day, index) => {
                return (
                  <li
                    className="cursor-pointer hover:text-neutral-400 "
                    key={index}
                    onClick={() => {
                      setSelectedDay(day);
                      setIsOpen(false);
                    }}
                  >
                    {dayjs(day).format("dddd")}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          {selectedDayHour.map((hour, index) => (
            <li
              key={index}
              className="flex justify-between px-4 py-2 rounded-md items-center bg-[#3A3F65]/20 border transition-all duration-300 hover:scale-105 border-[#3A3F65]"
            >
              {" "}
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={weatherIcons[hour.weatherCode]}
                  alt="weather-icons"
                  aria-label="weather-icon"
                  className="w-fit"
                  width={12}
                  height={12}
                />{" "}
                <p className="text-[14px] lg:text-[16px]">
                  {dayjs(hour.time).format("h A")}
                </p>
              </div>
              <div className="text-[12px]">
                {hour.temperature_2m.toFixed()}°
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HourlyForcast;
