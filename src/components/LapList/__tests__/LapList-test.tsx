import { render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { LapList } from "@src/components/LapList/LapList";

import { LapsProvider, useLapsContext } from "@src/contexts/LapsContext";

import { getMockLapsState, mockLapsState } from "@tests/jest.constants";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <LapsProvider>
      <LapList></LapList>
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

jest.mock("@src/contexts/LapsContext", () => ({
  ...jest.requireActual("@src/contexts/LapsContext"),
  useLapsContext: jest.fn(),
}));

describe("LapList.tsx", () => {
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
