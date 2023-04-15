import { createContext, useState } from "react";

interface CronoContextProps {
  children: React.ReactNode;
}

export const CronoContext = createContext<null | any>(null);

export const CronoProvider: React.FunctionComponent<CronoContextProps> = ({
  children,
}) => {
  const [crono, setCrono] = useState("00:00:00");

  const startCrono = () => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const interval = setInterval(() => {
      seconds += 1;

      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }

      if (minutes === 60) {
        hours += 1;
        minutes = 0;
      }

      const secondsAux = seconds < 10 ? `0${seconds}` : seconds;
      const minutesAux = minutes < 10 ? `0${minutes}` : minutes;
      const hoursAux = hours < 10 ? `0${hours}` : hours;

      setCrono(`${hoursAux}:${minutesAux}:${secondsAux}`);
    }, 300);
  };

  const clearCrono = () => {
    return setCrono("00:00:00");
  };
  return (
    <CronoContext.Provider value={{ crono, startCrono, clearCrono }}>
      {children}
    </CronoContext.Provider>
  );
};
