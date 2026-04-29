import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { useEffect } from "react";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import Modal from "@/components/Modal/Modal";

import { UiProvider } from "@/contexts/UiContext/UiProvider";

import { useUiContext } from "@/hooks/useUiContext";

const ModalWrapper = ({
  open = false,
  content = "",
}: {
  open?: boolean;
  content?: string;
}): JSX.Element => {
  const { openModal } = useUiContext();

  useEffect(() => {
    if (open) openModal(content);
  }, []);

  return <Modal />;
};

const renderComponent = (open = false, content = ""): RenderAPI =>
  render(
    <UiProvider>
      <ModalWrapper open={open} content={content} />
    </UiProvider>
  );

describe("Modal", () => {
  describe("rendering", () => {
    it("should not show content when modal is closed", () => {
      renderComponent(false);
      expect(screen.queryByText("Test message")).toBeNull();
    });

    it("should show content when modal is open", async () => {
      renderComponent(true, "Test message");
      expect(await screen.findByText("Test message")).toBeTruthy();
    });

    it("should show the Close button when modal is open", async () => {
      renderComponent(true, "Any content");
      expect(await screen.findByText("Close")).toBeTruthy();
    });
  });

  describe("behavior", () => {
    it("should close the modal when the Close button is pressed", async () => {
      renderComponent(true, "Test message");
      await screen.findByText("Test message");
      fireEvent.press(screen.getByText("Close"));
      await waitFor(() => {
        expect(screen.queryByText("Test message")).toBeNull();
      });
    });
  });
});
