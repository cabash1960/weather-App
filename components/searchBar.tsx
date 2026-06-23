"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// type Props = {};

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/?city=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="flex md:gap-4 flex-col md:flex-row w-full gap-2 items-center"
      >
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
            className="outline-0 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a place... "
          />
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
