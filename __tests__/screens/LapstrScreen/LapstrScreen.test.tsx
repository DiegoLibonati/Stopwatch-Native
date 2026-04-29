import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import LapstrScreen from "@/screens/LapstrScreen/LapstrScreen";

import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";
import { LapsProvider } from "@/contexts/LapsContext/LapsProvider";
import { UiProvider } from "@/contexts/UiContext/UiProvider";

import { useUiContext } from "@/hooks/useUiContext";

jest.mock("react-native-reanimated", () => ({
  __esModule: true,
  default: { View: "AnimatedView" },
  useAnimatedStyle: (): Record<string, unknown> => ({}),
  withTiming: (value: unknown): unknown => value,
  Easing: { bezier: (): (() => number) => (): number => 0 },
}));
jest.mock("expo-image", () => ({ Image: "ExpoImage" }));

const ScreenWithNavState = (): JSX.Element => {
  const { uiState } = useUiContext();
  return (
    <>
      <Text testID="nav-open">{uiState.navBar.isNavBarOpen ? "true" : "false"}</Text>
      <LapstrScreen />
    </>
  );
};

const renderScreen = (): RenderAPI =>
  render(
    <CronoProvider>
      <LapsProvider>
        <UiProvider>
          <ScreenWithNavState />
        </UiProvider>
      </LapsProvider>
    </CronoProvider>
  );

describe("LapstrScreen", () => {
  describe("rendering", () => {
    it("should render the initial timer value", () => {
      renderScreen();
      expect(screen.getByText("00:00:00")).toBeTruthy();
    });

    it("should render the START button", () => {
      renderScreen();
      expect(screen.getByText("START")).toBeTruthy();
    });

    it("should render the LAP button", () => {
      renderScreen();
      expect(screen.getByText("LAP")).toBeTruthy();
    });

    it("should render the CLEAR button", () => {
      renderScreen();
      expect(screen.getByText("CLEAR")).toBeTruthy();
    });

    it("should render the menu button", () => {
      renderScreen();
      expect(screen.getByTestId("open-nav")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should open the navbar when the menu button is pressed", async () => {
      renderScreen();
      expect(screen.getByTestId("nav-open")).toHaveTextContent("false");
      fireEvent.press(screen.getByTestId("open-nav"));
      await waitFor(() => {
        expect(screen.getByTestId("nav-open")).toHaveTextContent("true");
      });
    });
  });
});
