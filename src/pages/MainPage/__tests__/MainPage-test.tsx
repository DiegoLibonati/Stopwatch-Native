import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { MainPage } from "@src/pages/MainPage/MainPage";

import { CronoProvider } from "@src/contexts/CronoContext";
import { UiProvider, useUiContext } from "@src/contexts/UIContext";
import { LapsProvider } from "@src/contexts/LapsContext";

import { getMockUiState, mockUiState } from "@tests/jest.constants";

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
      <LapsProvider>
        <UiProvider>
          <MainPage></MainPage>
        </UiProvider>
      </LapsProvider>
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

jest.mock("@src/contexts/UiContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));

describe("MainPage.tsx", () => {
  describe("General Tests.", () => {
    const mockOpenNavBar = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState(mockUiState),
        openNavBar: mockOpenNavBar,
      });
    });

    test("It must execute the function of opening the navbar when you click on the menu button.", () => {
      const { gets } = renderComponent();

      const openNavBarTouchable = gets?.getByTestId!("open-nav");

      expect(openNavBarTouchable).toBeTruthy();

      fireEvent.press(openNavBarTouchable);

      expect(mockOpenNavBar).toHaveBeenCalledTimes(1);
    });
  });
});
