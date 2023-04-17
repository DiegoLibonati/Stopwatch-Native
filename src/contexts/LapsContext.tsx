import { createContext, useState } from "react";

interface LapsContextProps {
  children: React.ReactNode;
}

export const LapsContext = createContext<null | any>(null);

export const LapsProvider: React.FunctionComponent<LapsContextProps> = ({
  children,
}) => {
  const [laps, setLaps] = useState<Record<string, number | string>[]>([]);

  const handleAddNewLap = (timeLap: string) => {
    return setLaps([
      ...laps,
      {
        lapNumber: laps.length + 1,
        time: timeLap,
      },
    ]);
  };

  const handleClearLaps = () => {
    return setLaps([]);
  };

  return (
    <LapsContext.Provider value={{ laps, handleAddNewLap, handleClearLaps }}>
      {children}
    </LapsContext.Provider>
  );
};
