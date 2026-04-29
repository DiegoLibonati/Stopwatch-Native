import { useState } from "react";

import type { JSX } from "react";
import type { LapsProviderProps } from "@/types/props";
import type { LapsState } from "@/types/states";

import { LapsContext } from "@/contexts/LapsContext/LapsContext";

export const LapsProvider: React.FunctionComponent<LapsProviderProps> = ({
  children,
}): JSX.Element => {
  const [lapsState, setLapsState] = useState<LapsState>({
    laps: [],
  });

  const addNewLap = (timeLap: string): void => {
    setLapsState((state) => ({
      ...state,
      laps: [
        ...state.laps,
        {
          lapNumber: state.laps.length + 1,
          time: timeLap,
        },
      ],
    }));
  };

  const clearLaps = (): void => {
    setLapsState((state) => ({ ...state, laps: [] }));
  };

  return (
    <LapsContext.Provider
      value={{
        lapsState: lapsState,
        addNewLap: addNewLap,
        clearLaps: clearLaps,
      }}
    >
      {children}
    </LapsContext.Provider>
  );
};
