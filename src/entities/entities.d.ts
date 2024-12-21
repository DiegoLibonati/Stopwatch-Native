import { DebugFunction } from "@testing-library/react-native";
import {
  GetAllByQuery,
  GetByQuery,
  QueryByQuery,
} from "@testing-library/react-native/build/queries/make-queries";
import {
  TextMatch,
  TextMatchOptions,
} from "@testing-library/react-native/build/matches";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import {
  ByRoleMatcher,
  ByRoleOptions,
} from "@testing-library/react-native/build/queries/role";

// Types

export type Lap = {
  lapNumber: number;
  time: string;
};

export type Skin = {
  id: string;
  name: string;
  static: ImageSourcePropType;
  dinamic: ImageSourcePropType;
};

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

// Tests

export type GlobalTest = {
  debug: DebugFunction;
  gets?: {
    getByText?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getByRole?: GetByQuery<ByRoleMatcher, ByRoleOptions>;
    getByTestId?: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
    getAllByTestId?: GetAllByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
  querys?: {
    queryByText?: QueryByQuery<
      TextMatch,
      CommonQueryOptions & TextMatchOptions
    >;
  };
};
