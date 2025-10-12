import { createContext, useContext, useState } from "react";

import { CronoContext as CronoContextT } from "@src/entities/contexts";
import { CronoState } from "@src/entities/states";
import { Skin } from "@src/entities/app";
import { CronoProviderProps } from "@src/entities/props";

import skins from "@src/constants/skins";

export const CronoContext = createContext<CronoContextT | null>(null);

export const CronoProvider: React.FunctionComponent<CronoProviderProps> = ({
  children,
}) => {
  const [cronoState, setCronoState] = useState<CronoState>({
    timer: "00:00:00",
    isTimerOn: false,
    idInterval: null,
    currentSkin: skins[0],
  });

  const startCrono = (): void => {
    const { timer, idInterval } = cronoState;

    if (idInterval) return;

    const timeSplit = timer.split(":");

    let hours = Number(timeSplit[0]) ? Number(timeSplit[0]) : 0;
    let minutes = Number(timeSplit[1]) ? Number(timeSplit[1]) : 0;
    let seconds = Number(timeSplit[2]) ? Number(timeSplit[2]) : 0;

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

      setCronoState((state) => ({
        ...state,
        timer: `${hoursAux}:${minutesAux}:${secondsAux}`,
        isTimerOn: true,
      }));
    }, 1000);

    setCronoState((state) => ({
      ...state,
      idInterval: interval,
    }));
  };

  const clearCrono = (): void => {
    const { idInterval } = cronoState;

    clearInterval(idInterval!);

    return setCronoState((state) => ({
      ...state,
      timer: "00:00:00",
      isTimerOn: false,
      idInterval: null,
    }));
  };

  const stopCrono = (): void => {
    const { idInterval } = cronoState;

    clearInterval(idInterval!);

    return setCronoState((state) => ({
      ...state,
      isTimerOn: false,
      idInterval: null,
    }));
  };

  const changeSkin = (skin: Skin): void => {
    return setCronoState((state) => ({ ...state, currentSkin: skin }));
  };

  return (
    <CronoContext.Provider
      value={{
        cronoState: cronoState,
        startCrono: startCrono,
        clearCrono: clearCrono,
        stopCrono: stopCrono,
        changeSkin: changeSkin,
      }}
    >
      {children}
    </CronoContext.Provider>
  );
};

export const useCronoContext = (): CronoContextT => {
  return useContext(CronoContext)!;
};
