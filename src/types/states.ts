import type { Lap, Skin } from "@/types/app";

export interface CronoState {
  timer: string;
  isTimerOn: boolean;
  idInterval: NodeJS.Timeout | null;
  currentSkin: Skin;
}

export interface LapsState {
  laps: Lap[];
}

export interface UiState {
  navBar: {
    isNavBarOpen: boolean;
  };
  modal: {
    isModalOpen: boolean;
    content: string;
  };
}
