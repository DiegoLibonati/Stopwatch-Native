// Types

export type UiContextT = {
  widthAnim: Animated.Value;
  modal: boolean;
  openNavBar: () => void;
  closeNavBar: () => void;
  handleModal: (boolean: boolean) => void;
};

export type CronoContextT = {
  crono: Crono;
  image: Skin;
  intervalId: NodeJS.Timer | null;
  startCrono: () => void;
  clearCrono: () => void;
  stopCrono: () => void;
  changeSkin: (image: Skin) => void;
};

export type Crono = {
  screen: string;
  isOn: boolean;
};

export type Skin = {
  id: string;
  name: string;
  static: ImageSourcePropType;
  dinamic: ImageSourcePropType;
};

export type LapsContextT = {
  laps: Lap[];
  handleAddNewLap: (timeLap: string) => void;
  handleClearLaps: () => void;
};

export type Lap = {
  lapNumber: number;
  time: string;
};

// Interfaces

export interface UIContextProps {
  children: React.ReactNode;
}

export interface CronoContextProps {
  children: React.ReactNode;
}

export interface LapsContextProps {
  children: React.ReactNode;
}

export interface LapProps {
  lap: Lap;
}
