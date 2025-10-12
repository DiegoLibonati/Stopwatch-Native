import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { Modal } from "@src/components/Modal/Modal";

import { UiProvider, useUiContext } from "@src/contexts/UIContext";

import { getMockUiState, mockUiState } from "@tests/jest.constants";

type RenderComponent = {} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const { debug, getByText, getByRole, getByTestId, queryByText } = render(
    <UiProvider>
      <Modal></Modal>
    </UiProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
    },
    querys: {
      queryByText: queryByText,
    },
  };
};

jest.mock("@src/contexts/UiContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));

describe("Modal.tsx", () => {
  describe("If key isModalOpen is false", () => {
    const isModalOpen = false;
    const content = "234";

    const mockCloseModal = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState({
          ...mockUiState,
          modal: { isModalOpen: isModalOpen, content: content },
        }),
        closeModal: mockCloseModal,
      });
    });

    test("It should not render the content of the modal.", () => {
      const { querys } = renderComponent();

      const contentModal = querys!.queryByText!(content);

      expect(contentModal).toBeFalsy();
    });
  });

  describe("If key isModalOpen is true", () => {
    const isModalOpen = true;
    const content = "1234";

    const mockCloseModal = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState({
          ...mockUiState,
          modal: { isModalOpen: isModalOpen, content: content },
        }),
        closeModal: mockCloseModal,
      });
    });

    test("It must render the content of the modal.", () => {
      const { gets } = renderComponent();

      const contentModal = gets!.getByText!(content);

      expect(contentModal).toBeTruthy();
    });

    test("It must render the close button. Also execute the relevant functions when pressed.", () => {
      const { gets } = renderComponent();

      const pressableClose = gets!.getByText!("Close");

      expect(pressableClose).toBeTruthy();

      fireEvent.press(pressableClose);

      expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });
  });

  describe("If key isModalOpen is false", () => {
    const isModalOpen = false;
    const content = "234";

    const mockCloseModal = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState({
          ...mockUiState,
          modal: { isModalOpen: isModalOpen, content: content },
        }),
        closeModal: mockCloseModal,
      });
    });

    test("It should not render the content of the modal.", () => {
      const { querys } = renderComponent();

      const contentModal = querys!.queryByText!(content);

      expect(contentModal).toBeFalsy();
    });
  });

  describe("If key isModalOpen is true", () => {
    const isModalOpen = true;
    const content = "1234";

    const mockCloseModal = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        uiState: getMockUiState({
          ...mockUiState,
          modal: { isModalOpen: isModalOpen, content: content },
        }),
        closeModal: mockCloseModal,
      });
    });

    test("It must render the content of the modal.", () => {
      const { gets } = renderComponent();

      const contentModal = gets!.getByText!(content);

      expect(contentModal).toBeTruthy();
    });

    test("It must render the close button. Also execute the relevant functions when pressed.", () => {
      const { gets } = renderComponent();

      const pressableClose = gets!.getByText!("Close");

      expect(pressableClose).toBeTruthy();

      fireEvent.press(pressableClose);

      expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });
  });
});
