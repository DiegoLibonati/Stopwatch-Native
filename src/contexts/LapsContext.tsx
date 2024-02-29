import { createContext, useState } from "react";
import { Lap, LapsContextProps, LapsContextT } from "../types/entities";

export const LapsContext = createContext<LapsContextT | null>(null);

export const LapsProvider: React.FunctionComponent<LapsContextProps> = ({
  children,
}) => {
  const [laps, setLaps] = useState<Lap[]>([]);

  const handleAddNewLap = (timeLap: string): void => {
    return setLaps([
      ...laps,
      {
        lapNumber: laps.length + 1,
        time: timeLap,
      },
    ]);
  };

  const handleClearLaps = (): void => {
    return setLaps([]);
  };

  return (
    <LapsContext.Provider value={{ laps, handleAddNewLap, handleClearLaps }}>
      {children}
    </LapsContext.Provider>
  );
};
