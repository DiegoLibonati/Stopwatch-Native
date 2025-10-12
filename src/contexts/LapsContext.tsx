import { createContext, useContext, useState } from "react";

import { LapsContext as LapsContextT } from "@src/entities/contexts";
import { LapsContextProps } from "@src/entities/props";
import { LapsState } from "@src/entities/states";

export const LapsContext = createContext<LapsContextT | null>(null);

export const LapsProvider: React.FunctionComponent<LapsContextProps> = ({
  children,
}) => {
  const [lapsState, setLapsState] = useState<LapsState>({
    laps: [],
  });

  const addNewLap = (timeLap: string): void => {
    return setLapsState((state) => ({
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
    return setLapsState((state) => ({ ...state, laps: [] }));
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

export const useLapsContext = (): LapsContextT => {
  return useContext(LapsContext)!;
};
