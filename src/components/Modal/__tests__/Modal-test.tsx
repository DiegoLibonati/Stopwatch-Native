import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { Modal } from "../Modal";

import { UiProvider, useUiContext } from "../../../contexts/UiContext";

import { getMockUiState, MOCK_UI_STATE } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

const mockCloseModal = jest.fn();

jest.mock("../../../contexts/UiContext", () => ({
  ...jest.requireActual("../../../contexts/UiContext"),
  useUiContext: jest.fn(),
}));

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

describe("If key isModalOpen is false", () => {
  const isModalOpen = false;
  const content = "234";

  beforeEach(() => {
    jest.clearAllMocks();

    (useUiContext as jest.Mock).mockReturnValue({
      uiState: getMockUiState({
        ...MOCK_UI_STATE,
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

  beforeEach(() => {
    jest.clearAllMocks();

    (useUiContext as jest.Mock).mockReturnValue({
      uiState: getMockUiState({
        ...MOCK_UI_STATE,
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
