import { createContext, useState, useEffect } from "react";
import { images } from "../../assets/assets";

interface CronoContextProps {
  children: React.ReactNode;
}

export const CronoContext = createContext<null | any>(null);

export const CronoProvider: React.FunctionComponent<CronoContextProps> = ({
  children,
}) => {
  const [crono, setCrono] = useState({
    screen: "00:00:00",
    isOn: false,
  });
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [image, setImage] = useState(images.clockOneStatic);

  const startCrono = () => {
    if (intervalId) return;

    const timeSplit = crono.screen.split(":");

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

      setCrono({
        screen: `${hoursAux}:${minutesAux}:${secondsAux}`,
        isOn: true,
      });
    }, 300);

    setIntervalId(interval);
  };

  const clearCrono = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      return setCrono({
        screen: "00:00:00",
        isOn: false,
      });
    }

    return setCrono({
      screen: "00:00:00",
      isOn: false,
    });
  };

  const stopCrono = () => {
    clearInterval(intervalId!);
    setIntervalId(null);
    return setCrono({
      ...crono,
      isOn: false,
    });
  };

  useEffect(() => {
    if (intervalId) {
      return setImage(images.clockOneOn);
    } else {
      return setImage(images.clockOneStatic);
    }
  }, [intervalId]);

  return (
    <CronoContext.Provider
      value={{ crono, image, startCrono, clearCrono, stopCrono }}
    >
      {children}
    </CronoContext.Provider>
  );
};
