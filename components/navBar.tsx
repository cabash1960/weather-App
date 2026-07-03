"use client";

import React, { useState } from "react";
import { useUnit } from "./unitProvider";
import Image from "next/image";
import { error } from "next/dist/build/output/log";

// type Props = {};

function NavBar() {
  const [open, setIsOpen] = useState(false);
  const { system, toggleSystem } = useUnit();
  // console.log(context);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleToggle(value: string) {
    toggleSystem(value);
    setIsOpen(false);
  }
  return (
    <div className="flex justify-between items-center  font-dm-sans ">
      <div>
        <Image
          alt="weather icon"
          width="150"
          height="150"
          src="/icons/logo.svg"
        />
      </div>
      <div className="relative">
        <button
          onClick={handleClick}
          className="flex gap-2 items-center bg-[#3A3F65]  px-4 py-2 rounded-md cursor-pointer"
        >
          <Image
            alt="weather icon"
            width="12"
            height="12"
            src="/icons/icon-units.svg"
          />

          <span>Units</span>
          <Image
            alt="weather icon"
            width="12"
            height="12"
            src="/icons/icon-dropdown.svg"
          />
        </button>

        {open && (
          <ul className="cursor-pointer w-[150px] z-100 absolute p-4 bg-[#1E2340] border border-[#3A3F65] -left-10 rounded-md mt-2">
            <li
              className={`cursor-pointer  flex flex-col gap-2  `}
              onClick={() => handleToggle("metric")}
            >
              <div
                className={` flex justify-between items-center px-2 py-1 rounded-md ${system === "metric" ? "bg-[#3A3F65] " : ""}`}
              >
                <span>Metric</span>

                {system === "metric" && (
                  <Image
                    alt="weather icon"
                    width="12"
                    height="12"
                    src="/icons/icon-checkmark.svg"
                  />
                )}
              </div>
              <p
                className={` text-nowrap ${system === "metric" ? "text-neutral-400 " : "text-[#3A3F65] "} border-b border-[#3A3F65] flex flex-col text-sm gap-1 px-2 py-1 `}
              >
                <span>km/h</span>
                <span>°C</span>
                <span>mm</span>
                <span>%</span>
              </p>
            </li>

            <li
              className={`cursor-pointer  flex flex-col mt-2`}
              onClick={() => handleToggle("imperial")}
            >
              <div
                className={` flex justify-between items-center px-2 py-1  rounded-md ${system === "imperial" ? "bg-[#3A3F65] " : ""}`}
              >
                <span>Imperial</span>

                <div>
                  {system === "imperial" && (
                    <Image
                      alt="weather icon"
                      width="12"
                      height="12"
                      src="/icons/icon-checkmark.svg"
                    />
                  )}
                </div>
              </div>

              <p
                className={`text-sm text-nowrap ${system === "imperial" ? "text-neutral-400 " : "text-[#3A3F65] "}  border-[#3A3F65] flex flex-col gap-1 px-2 py-1 `}
              >
                <span>mph</span>
                <span>°F</span>
                <span>in </span>
                <span>%</span>
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
