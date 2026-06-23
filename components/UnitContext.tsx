"use client";

import React, { createContext, useContext, useState } fro "react";

type UnitSystem = "metric" | "imperial";

interface UnitContextType {
  system: UnitSystem;
  toggleSystem: () => void;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export function UnitProvider({ children }: { children: React.ReactNode }) {
  const [system, setSystem] = useState<UnitSystem>("metric");

  const toggleSystem = () => {
    setSystem((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <UnitContext.Provider value={{ system, toggleSystem }}>
      {children}
    </UnitContext.Provider>
  );
}
