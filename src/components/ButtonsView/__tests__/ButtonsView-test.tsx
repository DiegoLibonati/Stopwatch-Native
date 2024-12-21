import { render, fireEvent } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { ButtonsView } from "../ButtonsView";

import { CronoProvider, useCronoContext } from "../../../contexts/CronoContext";
import { LapsProvider, useLapsContext } from "../../../contexts/LapsContext";

import { getMockCronoState, MOCK_CRONO_STATE } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

const mockStartCrono = jest.fn();
const mockClearCrono = jest.fn();
const mockStopCrono = jest.fn();
const mockAddNewLap = jest.fn();
const mockClearLaps = jest.fn();

jest.mock("../../../contexts/CronoContext", () => ({
  ...jest.requireActual("../../../contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

jest.mock("../../../contexts/LapsContext", () => ({
  ...jest.requireActual("../../../contexts/LapsContext"),
  useLapsContext: jest.fn(),
}));

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId } = render(
    <CronoProvider>
      <LapsProvider>
        <ButtonsView></ButtonsView>
      </LapsProvider>
    </CronoProvider>
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

describe("If key 'isTimerOn' is true.", () => {
  const isTimerOn = true;

  beforeEach(() => {
    jest.clearAllMocks();

    (useCronoContext as jest.Mock).mockReturnValue({
      cronoState: getMockCronoState({
        ...MOCK_CRONO_STATE,
        isTimerOn: isTimerOn,
      }),
      startCrono: mockStartCrono,
      clearCrono: mockClearCrono,
      stopCrono: mockStopCrono,
    });

    (useLapsContext as jest.Mock).mockReturnValue({
      addNewLap: mockAddNewLap,
      clearLaps: mockClearLaps,
    });
  });

  test("It should render the STOP text. In addition, it must execute the relevant functions.", async () => {
    const { gets } = renderComponent();

    const stop = gets!.getByText!("STOP");
    const stopTouchable = gets!.getByTestId!("stop-or-and-touchable");

    expect(stop).toBeTruthy();
    expect(stopTouchable).toBeTruthy();

    fireEvent.press(stopTouchable);

    expect(mockStopCrono).toHaveBeenCalledTimes(1);
  });
});

describe("If key 'isTimerOn' is false.", () => {
  const isTimerOn = false;

  beforeEach(() => {
    jest.clearAllMocks();

    (useCronoContext as jest.Mock).mockReturnValue({
      cronoState: getMockCronoState({
        ...MOCK_CRONO_STATE,
        isTimerOn: isTimerOn,
      }),
      startCrono: mockStartCrono,
      clearCrono: mockClearCrono,
      stopCrono: mockStopCrono,
    });

    (useLapsContext as jest.Mock).mockReturnValue({
      addNewLap: mockAddNewLap,
      clearLaps: mockClearLaps,
    });
  });

  test("It should render the START text. In addition, it must execute the relevant functions.", async () => {
    const { gets } = renderComponent();

    const stop = gets!.getByText!("START");
    const startTouchable = gets!.getByTestId!("stop-or-and-touchable");

    expect(stop).toBeTruthy();
    expect(startTouchable).toBeTruthy();

    fireEvent.press(startTouchable);

    expect(mockStartCrono).toHaveBeenCalledTimes(1);
  });
});

describe("General Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useCronoContext as jest.Mock).mockReturnValue({
      cronoState: getMockCronoState(MOCK_CRONO_STATE),
      startCrono: mockStartCrono,
      clearCrono: mockClearCrono,
      stopCrono: mockStopCrono,
    });

    (useLapsContext as jest.Mock).mockReturnValue({
      addNewLap: mockAddNewLap,
      clearLaps: mockClearLaps,
    });
  });

  test("It must render the Clear button. Also execute its functions.", () => {
    const { gets } = renderComponent();

    const stop = gets!.getByText!("CLEAR");
    const clearTouchable = gets!.getByTestId!("clear-touchable");

    expect(stop).toBeTruthy();
    expect(clearTouchable).toBeTruthy();

    fireEvent.press(clearTouchable);

    expect(mockClearLaps).toHaveBeenCalledTimes(1);
    expect(mockClearCrono).toHaveBeenCalledTimes(1);
  });

  test("It must render the Lap button. Also execute its functions.", () => {
    const { gets } = renderComponent();

    const stop = gets!.getByText!("CLEAR");
    const lapTouchable = gets!.getByTestId!("lap-touchable");

    expect(stop).toBeTruthy();
    expect(lapTouchable).toBeTruthy();

    fireEvent.press(lapTouchable);

    expect(mockAddNewLap).toHaveBeenCalledTimes(1);
    expect(mockAddNewLap).toHaveBeenCalledWith(MOCK_CRONO_STATE.timer);
  });
});
