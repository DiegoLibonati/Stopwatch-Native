import { useState } from "react";

import type { JSX } from "react";
import type { UiState } from "@/types/states";
import type { UiProviderProps } from "@/types/props";

import { UiContext } from "@/contexts/UiContext/UiContext";

export const UiProvider: React.FunctionComponent<UiProviderProps> = ({ children }): JSX.Element => {
  const [uiState, setUiState] = useState<UiState>({
    navBar: {
      isNavBarOpen: false,
    },
    modal: {
      isModalOpen: false,
      content: "",
    },
  });

  const openNavBar = (): void => {
    setUiState((state) => ({
      ...state,
      navBar: { ...state.navBar, isNavBarOpen: true },
    }));
  };

  const closeNavBar = (): void => {
    setUiState((state) => ({
      ...state,
      navBar: { ...state.navBar, isNavBarOpen: false },
    }));
  };

  const openModal = (content: string): void => {
    setUiState((state) => ({
      ...state,
      modal: { ...state.modal, isModalOpen: true, content: content },
    }));
  };

  const closeModal = (): void => {
    setUiState((state) => ({
      ...state,
      modal: { ...state.modal, isModalOpen: false, content: "" },
    }));
  };

  return (
    <UiContext.Provider
      value={{
        uiState: uiState,
        openNavBar: openNavBar,
        closeNavBar: closeNavBar,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
