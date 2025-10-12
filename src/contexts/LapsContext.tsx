import { createContext, useContext, useState } from "react";

import { LapsContext as LapsContextT } from "@src/entities/contexts";
import { LapsProviderProps } from "@src/entities/props";
import { LapsState } from "@src/entities/states";

export const LapsContext = createContext<LapsContextT | null>(null);

export const LapsProvider: React.FunctionComponent<LapsProviderProps> = ({
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
  const context = useContext(LapsContext);
  if (!context) throw new Error("useLapsContext must be used within LapsProvider");
  return context;
};
