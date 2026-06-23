"use client";

import React, { useState, createContext, ReactNode, useContext } from "react";

type UnitType = "metric" | "imperial";

interface UnitSystem {
  system: UnitType;
  toggleSystem: (value: string) => void;
}

const UnitContext = createContext<UnitSystem | undefined>(undefined);

function UnitProvider({ children }: { children: ReactNode }) {
  const [system, setSystem] = useState<UnitType>("metric");

  const toggleSystem = (value: string) => {
    setSystem(value as UnitType);
  };

  return (
    <UnitContext.Provider value={{ system, toggleSystem }}>
      {children}
    </UnitContext.Provider>
  );
}

export default UnitProvider;

export function useUnit() {
  const context = useContext(UnitContext);
  if (context === undefined) {
    throw new Error("useUnit must be used within a UnitProvider");
  }
  return context;
}
