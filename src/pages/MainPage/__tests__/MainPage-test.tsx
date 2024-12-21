import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { MainPage } from "../MainPage";

import { CronoProvider } from "../../../contexts/CronoContext";
import { UiProvider, useUiContext } from "../../../contexts/UiContext";
import { LapsProvider } from "../../../contexts/LapsContext";

import { getMockUiState, MOCK_UI_STATE } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

const mockOpenNavBar = jest.fn();

jest.mock("expo-font");

jest.mock("../../../contexts/UiContext", () => ({
  ...jest.requireActual("../../../contexts/UiContext"),
  useUiContext: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();

  (useUiContext as jest.Mock).mockReturnValue({
    uiState: getMockUiState(MOCK_UI_STATE),
    openNavBar: mockOpenNavBar,
  });
});

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

test("It must execute the function of opening the navbar when you click on the menu button.", () => {
  const { gets } = renderComponent();

  const openNavBarTouchable = gets?.getByTestId!("open-nav");

  expect(openNavBarTouchable).toBeTruthy();

  fireEvent.press(openNavBarTouchable);

  expect(mockOpenNavBar).toHaveBeenCalledTimes(1);
});
