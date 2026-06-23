import React from "react";

function Container({
  value,
  label,
  unit,
  system,
}: {
  value: number;
  label: string;
  unit: { metric: string; imperial: string };
  system: string;
}) {
  return (
    <div className="flex flex-col justify-center  bg-[#1E2340] border border-[#3A3F65] gap-2   p-4  rounded-md">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className="text-xl">
        {value}
        {`${system === "metric" ? unit.metric : unit.imperial}`}{" "}
      </p>
    </div>
  );
}

export default Container;
