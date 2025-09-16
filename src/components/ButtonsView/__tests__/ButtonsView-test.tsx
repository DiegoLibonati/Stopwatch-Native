import { render, fireEvent } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/entities";

import { ButtonsView } from "@src/components/ButtonsView/ButtonsView";

import { CronoProvider, useCronoContext } from "@src/contexts/CronoContext";
import { LapsProvider, useLapsContext } from "@src/contexts/LapsContext";

import {
  getMockCronoState,
  mockCronoState,
} from "@tests/jest.constants";

type RenderComponent = {} & GlobalTest;

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

jest.mock("@src/contexts/CronoContext", () => ({
  ...jest.requireActual("@src/contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

jest.mock("@src/contexts/LapsContext", () => ({
  ...jest.requireActual("@src/contexts/LapsContext"),
  useLapsContext: jest.fn(),
}));

describe("ButtonsView.tsx", () => {
  describe("If key 'isTimerOn' is true.", () => {
    const isTimerOn = true;

    const mockStartCrono = jest.fn();
    const mockClearCrono = jest.fn();
    const mockStopCrono = jest.fn();
    const mockAddNewLap = jest.fn();
    const mockClearLaps = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useCronoContext as jest.Mock).mockReturnValue({
        cronoState: getMockCronoState({
          ...mockCronoState,
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

    const mockStartCrono = jest.fn();
    const mockClearCrono = jest.fn();
    const mockStopCrono = jest.fn();
    const mockAddNewLap = jest.fn();
    const mockClearLaps = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useCronoContext as jest.Mock).mockReturnValue({
        cronoState: getMockCronoState({
          ...mockCronoState,
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
    const mockStartCrono = jest.fn();
    const mockClearCrono = jest.fn();
    const mockStopCrono = jest.fn();
    const mockAddNewLap = jest.fn();
    const mockClearLaps = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useCronoContext as jest.Mock).mockReturnValue({
        cronoState: getMockCronoState(mockCronoState),
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
      expect(mockAddNewLap).toHaveBeenCalledWith(mockCronoState.timer);
    });
  });
});
