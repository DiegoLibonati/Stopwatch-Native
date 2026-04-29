import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import SkinList from "@/components/SkinList/SkinList";

import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";
import { UiProvider } from "@/contexts/UiContext/UiProvider";

import { useUiContext } from "@/hooks/useUiContext";

jest.mock("expo-image", () => ({ Image: "ExpoImage" }));

const SkinListWrapper = (): JSX.Element => {
  const { uiState } = useUiContext();
  return (
    <>
      <Text testID="modal-open">{uiState.modal.isModalOpen ? "true" : "false"}</Text>
      <Text testID="modal-content">{uiState.modal.content}</Text>
      <SkinList />
    </>
  );
};

const renderComponent = (): RenderAPI =>
  render(
    <CronoProvider>
      <UiProvider>
        <SkinListWrapper />
      </UiProvider>
    </CronoProvider>
  );

describe("SkinList", () => {
  describe("rendering", () => {
    it("should render all skin names", () => {
      renderComponent();
      expect(screen.getByText("Normal")).toBeTruthy();
      expect(screen.getByText("Classic")).toBeTruthy();
      expect(screen.getByText("Pixel Sand")).toBeTruthy();
      expect(screen.getByText("Pikachu Run")).toBeTruthy();
    });

    it("should render four skin items", () => {
      renderComponent();
      expect(screen.getAllByTestId("skin")).toHaveLength(4);
    });
  });

  describe("behavior", () => {
    it("should open modal with Skin changed when a skin is pressed", async () => {
      renderComponent();
      fireEvent.press(screen.getAllByTestId("skin")[0]);
      await waitFor(() => {
        expect(screen.getByTestId("modal-open")).toHaveTextContent("true");
      });
      expect(screen.getByTestId("modal-content")).toHaveTextContent("Skin changed");
    });

    it("should open modal for any skin pressed", async () => {
      renderComponent();
      fireEvent.press(screen.getAllByTestId("skin")[2]);
      await waitFor(() => {
        expect(screen.getByTestId("modal-open")).toHaveTextContent("true");
      });
    });
  });
});
