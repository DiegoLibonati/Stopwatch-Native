import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { NavBarView } from "@src/components/NavBarView/NavBarView";

import { UiProvider, useUiContext } from "@src/contexts/Namechange";
import { CronoProvider, useCronoContext } from "@src/contexts/CronoContext";

import { getMockUiState, mockSkins, mockUiState } from "@tests/jest.constants";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const {
    debug,
    getByText,
    getByRole,
    getByTestId,
    getAllByTestId,
    queryByText,
  } = render(
    <CronoProvider>
      <UiProvider>
        <NavBarView></NavBarView>
      </UiProvider>
    </CronoProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
      getAllByTestId: getAllByTestId,
    },
    querys: {
      queryByText: queryByText,
    },
  };
};

jest.mock("@src/constants/skins", () => {
  const { mockSkins } = jest.requireActual("@tests/jest.constants");
  return { __esModule: true, default: mockSkins };
});
jest.mock("@src/contexts/UIContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));
jest.mock("@src/contexts/CronoContext", () => ({
  ...jest.requireActual("@src/contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

describe("NavBar.tsx", () => {
  describe("General Tests.", () => {
    const mockCloseNavBar = jest.fn();
    const mockOpenModal = jest.fn();
    const mockChangeSkin = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState(mockUiState),
        closeNavBar: mockCloseNavBar,
        openModal: mockOpenModal,
      });

      (useCronoContext as jest.Mock).mockReturnValue({
        changeSkin: mockChangeSkin,
      });
    });

    test("It should render the close button and execute the relevant functions when it is pressed.", () => {
      const { gets } = renderComponent();

      const closeTouchable = gets!.getByTestId!("close-navbar");

      expect(closeTouchable).toBeTruthy();

      fireEvent.press(closeTouchable);

      expect(mockCloseNavBar).toHaveBeenCalledTimes(1);
    });

    test("It should render the navigation bar title.", () => {
      const { gets } = renderComponent();

      const title = gets!.getByText!("SKINS");

      expect(title).toBeTruthy();
    });

    test("It must render all skins.", () => {
      const { gets } = renderComponent();

      const skins = gets!.getAllByTestId!("skin");

      expect(skins).toHaveLength(mockSkins.length);
    });

    test("It should render the modal when you click on a skin.", () => {
      const { gets, querys } = renderComponent();

      const titleModal = querys!.queryByText!("Skin changed");

      expect(titleModal).toBeFalsy();

      const skins = gets!.getAllByTestId!("skin");

      expect(skins).toHaveLength(mockSkins.length);

      const skin = skins[0];

      fireEvent.press(skin);

      expect(mockChangeSkin).toHaveBeenCalledTimes(1);
      expect(mockChangeSkin).toHaveBeenCalledWith(mockSkins[0]);
      expect(mockOpenModal).toHaveBeenCalledTimes(1);
      expect(mockOpenModal).toHaveBeenCalledWith("Skin changed");
    });
  });
});
