"use client";

import Image from "next/image";
import React from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Image src="icons/icon-error.svg" alt="error" width={24} height={24} />
      <h2 className="font-bricolage lg:text-4xl text-2xl text-center">
        Something went wrong
      </h2>
      <p className="text-sm flex flex-col gap-1 text-center">
        {`We couldn't connect to the server ${error} . `}
        <span>Please try again in a few moments.</span>
      </p>

      <button
        onClick={reset}
        className="flex gap-2 px-4 py-2 rounded-md bg-[#3A3F65] text-white cursor-pointer"
      >
        <Image src="icons/icon-retry.svg" alt="error" width={12} height={12} />
        <span className="text-sm">Retry</span>
      </button>
    </div>
  );
}

export default Error;
