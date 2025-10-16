import { render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { Watch } from "@src/components/Watch/Watch";

import { CronoProvider } from "@src/contexts/CronoContext";

import { useCronoContext } from "@src/hooks/useCronoContext";

import { getMockCronoState, mockCronoState } from "@tests/jest.constants";

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
      <Watch></Watch>
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

jest.mock("@src/hooks/useCronoContext", () => ({
  useCronoContext: jest.fn(),
}));

describe("Watch.tsx", () => {
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
