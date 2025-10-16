import { useContext } from "react";

import { UseCronoContext } from "@src/entities/hooks";

import { CronoContext } from "@src/contexts/CronoContext";

export const useCronoContext = (): UseCronoContext => {
  const context = useContext(CronoContext);
  if (!context)
    throw new Error("useCronoContext must be used within CronoProvider");
  return context;
};
