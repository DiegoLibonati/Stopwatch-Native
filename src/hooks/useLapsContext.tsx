import { useContext } from "react";

import type { UseLapsContext } from "@/types/hooks";

import { LapsContext } from "@/contexts/LapsContext/LapsContext";

export const useLapsContext = (): UseLapsContext => {
  const context = useContext(LapsContext);
  if (!context) throw new Error("useLapsContext must be used within LapsProvider");
  return context;
};
