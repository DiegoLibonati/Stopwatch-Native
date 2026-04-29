import { createContext } from "react";

import type { CronoContext as CronoContextT } from "@/types/contexts";

export const CronoContext = createContext<CronoContextT | null>(null);
