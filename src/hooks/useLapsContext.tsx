import { useContext } from "react";

import { UseLapsContext } from "@src/entities/hooks";

import { LapsContext } from "@src/contexts/LapsContext";

export const useLapsContext = (): UseLapsContext => {
  const context = useContext(LapsContext);
  if (!context)
    throw new Error("useLapsContext must be used within LapsProvider");
  return context;
};
