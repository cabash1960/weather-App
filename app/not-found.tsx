import Image from "next/image";
import { weatherIcons } from "@/libs/icon";

export default function NotFound() {
  return (
    <div className="flex justify-center leading-tight flex-col p-8 items-center font-bricolage   text-4xl  ">
      <div className="text-6xl flex gap justify-center items-center ">
        <span>4</span>
        <Image
          src={`${weatherIcons[0]}`}
          alt="weather-icon"
          width={100}
          height={100}
          className=""
        />
        <span>4</span>
      </div>
      <p>Page not found</p>
    </div>
  );
}
