import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { WatchView } from "../WatchView";

import { CronoProvider, useCronoContext } from "../../../contexts/CronoContext";

import {
  getMockCronoState,
  mockCronoState,
} from "../../../tests/jest.constants";

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

jest.mock("../../../contexts/CronoContext", () => ({
  ...jest.requireActual("../../../contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

describe("WatchView.tsx", () => {
  describe("General Tests.", () => {
    beforeEach(() => {
      jest.clearAllMocks();

      (useCronoContext as jest.Mock).mockReturnValue({
        cronoState: getMockCronoState(mockCronoState),
      });
    });

    test("It must render all of the skins.", () => {
      const { gets } = renderComponent();

      const image = gets!.getByTestId!("skin-image");
      const timer = gets!.getByText!(mockCronoState.timer);

      expect(image).toBeTruthy();
      expect(timer).toBeTruthy();
    });
  });
});
