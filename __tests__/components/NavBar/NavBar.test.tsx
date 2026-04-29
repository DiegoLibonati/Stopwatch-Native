import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { useEffect } from "react";
import { Text } from "react-native";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import NavBar from "@/components/NavBar/NavBar";

import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";
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

const NavBarStateWrapper = ({ initialOpen = false }: { initialOpen?: boolean }): JSX.Element => {
  const { openNavBar, uiState } = useUiContext();

  useEffect(() => {
    if (initialOpen) openNavBar();
  }, []);

  return (
    <>
      <Text testID="nav-state">{uiState.navBar.isNavBarOpen ? "open" : "closed"}</Text>
      <NavBar />
    </>
  );
};

const renderComponent = (initialOpen = false): RenderAPI =>
  render(
    <CronoProvider>
      <UiProvider>
        <NavBarStateWrapper initialOpen={initialOpen} />
      </UiProvider>
    </CronoProvider>
  );

describe("NavBar", () => {
  describe("rendering", () => {
    it("should render the SKINS title", () => {
      renderComponent();
      expect(screen.getByText("SKINS")).toBeTruthy();
    });

    it("should render the close button", () => {
      renderComponent();
      expect(screen.getByTestId("close-navbar")).toBeTruthy();
    });

    it("should render the skin names", () => {
      renderComponent();
      expect(screen.getByText("Normal")).toBeTruthy();
      expect(screen.getByText("Classic")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should close the navbar when the close button is pressed", async () => {
      renderComponent(true);
      await waitFor(() => {
        expect(screen.getByTestId("nav-state")).toHaveTextContent("open");
      });
      fireEvent.press(screen.getByTestId("close-navbar"));
      await waitFor(() => {
        expect(screen.getByTestId("nav-state")).toHaveTextContent("closed");
      });
    });
  });
});
