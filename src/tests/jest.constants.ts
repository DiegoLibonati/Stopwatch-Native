import { CronoState, LapsState, UiState } from "../entities/entities";

export const mockSkins = [
  {
    id: "clock1",
    name: "Normal",
    static: require("../assets/clock-static.png"),
    dinamic: require("../assets/clock.gif"),
  },
  {
    id: "clock2",
    name: "Classic",
    static: require("../assets/classic_static.png"),
    dinamic: require("../assets/classic_gif.gif"),
  },
];

export const mockCronoState: CronoState = {
  timer: "11:11:11",
  currentSkin: mockSkins[0],
  idInterval: null,
  isTimerOn: false,
};

export const mockLapsState: LapsState = {
  laps: [],
};

export const mockUiState: UiState = {
  navBar: {
    isNavBarOpen: false,
  },
  modal: {
    isModalOpen: false,
    content: "",
  },
};

export const getMockCronoState = (cronoState: CronoState): CronoState => {
  return {
    timer: cronoState.timer,
    currentSkin: cronoState.currentSkin,
    idInterval: cronoState.idInterval,
    isTimerOn: cronoState.isTimerOn,
  };
};

export const getMockLapsState = (lapsState: LapsState): LapsState => {
  return {
    laps: lapsState.laps,
  };
};

export const getMockUiState = (uiState: UiState): UiState => {
  return {
    navBar: {
      isNavBarOpen: uiState.navBar.isNavBarOpen,
    },
    modal: {
      isModalOpen: uiState.modal.isModalOpen,
      content: uiState.modal.content,
    },
  };
};
