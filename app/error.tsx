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
      <h2>Something went wrong</h2>
      <p>
        {`We couldn't connecy to the server ${error}. Please try again in a few moments.`}{" "}
      </p>
      <button>
        <Image src="icons/icon-retry.svg" alt="error" width={24} height={24} />{" "}
        Retry
      </button>
    </div>
  );
}

export default Error;
