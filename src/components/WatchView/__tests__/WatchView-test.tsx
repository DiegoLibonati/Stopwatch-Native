import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { WatchView } from "../WatchView";

import { CronoProvider, useCronoContext } from "../../../contexts/CronoContext";

import { getMockCronoState, MOCK_CRONO_STATE } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

jest.mock("../../../contexts/CronoContext", () => ({
  ...jest.requireActual("../../../contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();

  (useCronoContext as jest.Mock).mockReturnValue({
    cronoState: getMockCronoState(MOCK_CRONO_STATE),
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
      <WatchView></WatchView>
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

test("It must render all of the skins.", () => {
  const { gets } = renderComponent();

  const image = gets!.getByTestId!("skin-image");
  const timer = gets!.getByText!(MOCK_CRONO_STATE.timer);

  expect(image).toBeTruthy();
  expect(timer).toBeTruthy();
});
