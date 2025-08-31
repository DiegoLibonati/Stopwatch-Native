import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { LapsView } from "../LapsView";

import { LapsProvider, useLapsContext } from "../../../contexts/LapsContext";

import { getMockLapsState, mockLapsState } from "../../../../tests/jest.constants";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <LapsProvider>
      <LapsView></LapsView>
    </LapsProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
    },
  };
};

jest.mock("../../../contexts/LapsContext", () => ({
  ...jest.requireActual("../../../contexts/LapsContext"),
  useLapsContext: jest.fn(),
}));

describe("LapView.tsx", () => {
  describe("General Tests.", () => {
    const mockLaps = [{ lapNumber: 1, time: "11:11:11" }];

    beforeEach(() => {
      jest.clearAllMocks();

      (useLapsContext as jest.Mock).mockReturnValue({
        lapsState: getMockLapsState({
          ...mockLapsState,
          laps: mockLaps,
        }),
      });
    });

    test("It must render all the laps.", () => {
      const { gets } = renderComponent();

      const listLaps = gets!.getByTestId!("list-laps");

      expect(listLaps).toBeTruthy();
      expect(listLaps.children).toHaveLength(mockLaps.length);
    });
  });
});
