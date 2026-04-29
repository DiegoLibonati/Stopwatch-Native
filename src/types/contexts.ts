import type { Skin } from "@/types/app";
import type { CronoState, LapsState, UiState } from "@/types/states";

export interface CronoContext {
  cronoState: CronoState;
  startCrono: () => void;
  clearCrono: () => void;
  stopCrono: () => void;
  changeSkin: (skin: Skin) => void;
}

export interface LapsContext {
  lapsState: LapsState;
  addNewLap: (timeLap: string) => void;
  clearLaps: () => void;
}

export interface UiContext {
  uiState: UiState;
  openNavBar: () => void;
  closeNavBar: () => void;
  openModal: (content: string) => void;
  closeModal: () => void;
}
