import { render, screen } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";

import Watch from "@/components/Watch/Watch";

import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";

jest.mock("expo-image", () => ({ Image: "ExpoImage" }));

const renderComponent = (): RenderAPI =>
  render(
    <CronoProvider>
      <Watch />
    </CronoProvider>
  );

describe("Watch", () => {
  describe("rendering", () => {
    it("should render the initial timer value", () => {
      renderComponent();
      expect(screen.getByText("00:00:00")).toBeTruthy();
    });

    it("should render the skin image", () => {
      renderComponent();
      expect(screen.getByTestId("skin-image")).toBeTruthy();
    });
  });
});
