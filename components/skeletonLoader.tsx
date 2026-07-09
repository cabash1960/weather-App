import React from "react";
import { Skeleton } from "./ui/skeleton";

function SkeletonLoader() {
  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-6">
      <div className="flex flex-col  gap-6 col-span-2">
        {/* countryDisplay */}
        <div className="  px-8 py-14  bg-[#1E2340] border border-[#3A3F65]   flex lg:justify-between flex-col lg:flex-row  lg:rounded-lg rounded-2xl">
          <div className="flex flex-col gap-2 justify-center items-center w-full lg:w-auto">
            <Skeleton className="h-8 w-48 bg-[#3A3F65]/80" />
            <Skeleton className="h-4 w-56 bg-[#3A3F65]/80" />
          </div>
          <div className="flex text-center justify-around items-center gap-4 mt-4 lg:mt-0">
            <Skeleton className="h-24 w-24 rounded-full bg-[#3A3F65]/80" />
            <Skeleton className="h-16 w-24 bg-[#3A3F65]/80" />
          </div>
        </div>

        {/*  weather Display*/}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {["Feels like", "Humidity", "Wind", "Precipitation"].map((val, i) => {
            return (
              <div
                key={i}
                className="flex  flex-col justify-center  bg-[#1E2340] border border-[#3A3F65] gap-2   p-4  rounded-md"
              >
                <p className="text-sm text-neutral-400">{val}</p>
                <p className="text-xl">-</p>
              </div>
            );
          })}
        </div>
        {/* daily forcast */}
        <div className="mt-2 flex flex-col gap-4  ">
          <div>
            {" "}
            <h3>Daily Forecast</h3>
          </div>
          <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {Array.from({ length: 7 }).map((_, i) => {
              return (
                <Skeleton
                  key={i}
                  className="h-28  bg-[#1E2340] border border-[#3A3F65] w-full"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {/* Hourly forcast */}

        <div className="p-4 bg-[#1E2340] flex flex-col gap-4 rounded-lg">
          <div className="flex justify-between items-center relative">
            <h3 className="text-[14px] lg:text-[16px]">Hourly Forecast</h3>
            <div className="">
              <Skeleton className="h-10 w-28 px-4 py-2  bg-[#1E2340] border border-[#3A3F65] rounded-md " />
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              {Array.from({ length: 8 }).map((hour, index) => (
                <li
                  key={index}
                  className="flex justify-between px-4 py-2 rounded-md items-center bg-[#3A3F65]/20 border border-[#3A3F65]"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full bg-[#3A3F65]/80" />
                    <Skeleton className="h-4 w-16 bg-[#3A3F65]/80" />
                  </div>
                  <div className="">
                    <Skeleton className="w-3/4 bg-[#3A3F65]/80" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
