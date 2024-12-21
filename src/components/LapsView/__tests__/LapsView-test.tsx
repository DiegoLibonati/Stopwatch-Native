import { render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { LapsView } from "../LapsView";

import { LapsProvider, useLapsContext } from "../../../contexts/LapsContext";

import { getMockLapsState, MOCK_LAPS_STATE } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

const mockLaps = [{ lapNumber: 1, time: "11:11:11" }];

jest.mock("../../../contexts/LapsContext", () => ({
  ...jest.requireActual("../../../contexts/LapsContext"),
  useLapsContext: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();

  (useLapsContext as jest.Mock).mockReturnValue({
    lapsState: getMockLapsState({
      ...MOCK_LAPS_STATE,
      laps: mockLaps,
    }),
  });
});

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

test("It must render all the laps.", () => {
  const { gets } = renderComponent();

  const listLaps = gets!.getByTestId!("list-laps");

  expect(listLaps).toBeTruthy();
  expect(listLaps.children).toHaveLength(mockLaps.length);
});
