import { Skin } from "@src/entities/app";
import { CronoState, LapsState, UiState } from "@src/entities/states";

export type CronoContext = {
  cronoState: CronoState;
  startCrono: () => void;
  clearCrono: () => void;
  stopCrono: () => void;
  changeSkin: (skin: Skin) => void;
};

export type LapsContext = {
  lapsState: LapsState;
  addNewLap: (timeLap: string) => void;
  clearLaps: () => void;
};

export type UiContext = {
  uiState: UiState;
  openNavBar: () => void;
  closeNavBar: () => void;
  openModal: (content: string) => void;
  closeModal: () => void;
};
