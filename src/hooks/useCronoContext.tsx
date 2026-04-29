import { useContext } from "react";

import type { UseCronoContext } from "@/types/hooks";

import { CronoContext } from "@/contexts/CronoContext/CronoContext";

export const useCronoContext = (): UseCronoContext => {
  const context = useContext(CronoContext);
  if (!context) throw new Error("useCronoContext must be used within CronoProvider");
  return context;
};
