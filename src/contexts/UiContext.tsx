import { createContext, useContext, useState } from "react";

import { UiContext as UiContextT } from "@src/entities/contexts";
import { UiState } from "@src/entities/states";
import { UiProviderProps } from "@src/entities/props";

export const UiContext = createContext<UiContextT | null>(null);

export const UiProvider: React.FunctionComponent<UiProviderProps> = ({
  children,
}) => {
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
    return setUiState((state) => ({
      ...state,
      navBar: { ...state.navBar, isNavBarOpen: true },
    }));
  };

  const closeNavBar = (): void => {
    return setUiState((state) => ({
      ...state,
      navBar: { ...state.navBar, isNavBarOpen: false },
    }));
  };

  const openModal = (content: string): void => {
    return setUiState((state) => ({
      ...state,
      modal: { ...state.modal, isModalOpen: true, content: content },
    }));
  };

  const closeModal = (): void => {
    return setUiState((state) => ({
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
