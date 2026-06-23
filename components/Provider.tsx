"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import UnitProvider from "./unitProvider";

function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <UnitProvider>{children}</UnitProvider>
    </QueryClientProvider>
  );
}

export default Provider;
