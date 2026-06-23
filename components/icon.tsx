"use client";
import React from "react";
import Image from "next/image";

function Icon({
  href,
  className,
  width = 100,
  height = 100,
}: {
  href: string;
  className: string;
  width: number;
  height: number;
}) {
  return (
    <div>
      {" "}
      <Image
        src={href}
        className={`${className}`}
        alt="icon"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Icon;
