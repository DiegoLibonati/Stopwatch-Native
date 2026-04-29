import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { act } from "react";
import { Text } from "react-native";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import ActionButtons from "@/components/ActionButtons/ActionButtons";

import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";
import { LapsProvider } from "@/contexts/LapsContext/LapsProvider";

import { useLapsContext } from "@/hooks/useLapsContext";

const LapCountDisplay = (): JSX.Element => {
  const { lapsState } = useLapsContext();
  return <Text testID="lap-count">{lapsState.laps.length}</Text>;
};

const renderComponent = (): RenderAPI =>
  render(
    <CronoProvider>
      <LapsProvider>
        <ActionButtons />
        <LapCountDisplay />
      </LapsProvider>
    </CronoProvider>
  );

describe("ActionButtons", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe("rendering", () => {
    it("should render the CLEAR button", () => {
      renderComponent();
      expect(screen.getByText("CLEAR")).toBeTruthy();
    });

    it("should render the LAP button", () => {
      renderComponent();
      expect(screen.getByText("LAP")).toBeTruthy();
    });

    it("should render the START button initially", () => {
      renderComponent();
      expect(screen.getByText("START")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should show STOP after pressing START and the timer ticks", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("stop-or-and-touchable"));
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(screen.getByText("STOP")).toBeTruthy();
    });

    it("should show START again after pressing STOP", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("stop-or-and-touchable"));
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      fireEvent.press(screen.getByTestId("stop-or-and-touchable"));
      expect(screen.getByText("START")).toBeTruthy();
    });

    it("should add a lap when LAP is pressed", () => {
      renderComponent();
      expect(screen.getByTestId("lap-count")).toHaveTextContent("0");
      fireEvent.press(screen.getByTestId("lap-touchable"));
      expect(screen.getByTestId("lap-count")).toHaveTextContent("1");
    });

    it("should clear laps when CLEAR is pressed", () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("lap-touchable"));
      expect(screen.getByTestId("lap-count")).toHaveTextContent("1");
      fireEvent.press(screen.getByTestId("clear-touchable"));
      expect(screen.getByTestId("lap-count")).toHaveTextContent("0");
    });

    it("should reset to START state when CLEAR is pressed while running", async () => {
      renderComponent();
      fireEvent.press(screen.getByTestId("stop-or-and-touchable"));
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      await waitFor(() => {
        expect(screen.getByText("STOP")).toBeTruthy();
      });
      fireEvent.press(screen.getByTestId("clear-touchable"));
      expect(screen.getByText("START")).toBeTruthy();
    });
  });
});
