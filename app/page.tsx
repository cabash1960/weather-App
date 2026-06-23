import Image from "next/image";
import SearchBar from "@/components/searchBar";

import WeatherPage from "@/components/weatherPage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const resolveParams = await searchParams;
  const searchCity = resolveParams?.city || "";

  return (
    <div className=" flex flex-col items-center  gap-6">
      <div className=" flex flex-col items-center gap-12">
        <h1 className="font-bricolage leading-tight  text-center lg:text-4xl text-6xl">{`How's the sky looking today?`}</h1>

        <SearchBar />
      </div>

      <WeatherPage searchCity={searchCity} />
    </div>
  );
}
