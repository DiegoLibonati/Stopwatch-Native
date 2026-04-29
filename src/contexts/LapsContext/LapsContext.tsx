import { createContext } from "react";

import type { LapsContext as LapsContextT } from "@/types/contexts";

export const LapsContext = createContext<LapsContextT | null>(null);
