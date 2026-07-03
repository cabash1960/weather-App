"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import Suggestions from "./suggestions";
import { useQuery } from "@tanstack/react-query";
// import useSWR from "swr";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  // Define a more specific type for suggestions
  const [suggestions, setSuggestions] = useState<Array<{ name: string }>>([]);

  const router = useRouter();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["searchData", searchQuery],
    queryFn: async () => {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`,
      );
      const data = await res.json();

      return data;
    },
    enabled: !!searchQuery,
  });

  useEffect(() => {
    if (data?.results) {
      setSuggestions(data.results);
    } else {
      setSuggestions([]);
    }
  }, [data]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/?city=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    setSuggestions([]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleSuggestionClick(cityName: string) {
    router.push(`/?city=${encodeURIComponent(cityName.trim())}`);
    setSearchQuery("");
    setSuggestions([]);
  }

  return (
    <div className="w-full ">
      <form
        onSubmit={handleSearch}
        className="flex md:gap-4 flex-col md:flex-row w-full gap-2 items-center"
      >
        <div className="relative w-full">
          <div className="flex gap-2 items-center  w-full bg-[#3A3F65] py-4 px-6  md:px-4 md:py-2 md:rounded-md rounded-lg">
            <Image
              alt="weather icon"
              width="18"
              height="18"
              src="/icons/icon-search.svg"
            />

            <input
              type="text"
              aria-label="Search"
              className="outline-0 w-full"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search for a place... "
            />
          </div>
          {suggestions && suggestions.length > 0 && (
            <ul className="mt-2  w-full bg-[#1E2340] border absolute  border-[#3A3F65] rounded-md p-2">
              {suggestions.map((item, i) => (
                <li
                  key={i}
                  className="p-2 cursor-pointer hover:bg-[#3A3F65] rounded-md"
                  onClick={() => handleSuggestionClick(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-900 w-full md:w-fit px-4 py-2 md:rounded-md rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
