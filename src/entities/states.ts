import { Lap, Skin } from "@src/entities/app";

export type CronoState = {
  timer: string;
  isTimerOn: boolean;
  idInterval: ReturnType<typeof setInterval> | null;
  currentSkin: Skin;
};

export type LapsState = {
  laps: Lap[];
};

export type UiState = {
  navBar: {
    isNavBarOpen: boolean;
  };
  modal: {
    isModalOpen: boolean;
    content: string;
  };
};
