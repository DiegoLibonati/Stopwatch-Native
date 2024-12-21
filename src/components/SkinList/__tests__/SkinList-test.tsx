import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { SkinList } from "../SkinList";

import { UiProvider, useUiContext } from "../../../contexts/UiContext";
import { CronoProvider, useCronoContext } from "../../../contexts/CronoContext";

import { MOCK_SKINS } from "../../../tests/jest.setup";

type RenderComponent = {} & GlobalTest;

const mockOpenModal = jest.fn();
const mockChangeSkin = jest.fn();

jest.mock("../../../constants/data.ts", () => ({
  get skins() {
    return MOCK_SKINS;
  },
}));

jest.mock("../../../contexts/UiContext", () => ({
  ...jest.requireActual("../../../contexts/UiContext"),
  useUiContext: jest.fn(),
}));

jest.mock("../../../contexts/CronoContext", () => ({
  ...jest.requireActual("../../../contexts/CronoContext"),
  useCronoContext: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();

  (useUiContext as jest.Mock).mockReturnValue({
    openModal: mockOpenModal,
  });

  (useCronoContext as jest.Mock).mockReturnValue({
    changeSkin: mockChangeSkin,
  });
});

const renderComponent = (): RenderComponent => {
  const {
    debug,
    getByText,
    getByRole,
    getByTestId,
    getAllByTestId,
    queryByText,
  } = render(
    <CronoProvider>
      <UiProvider>
        <SkinList></SkinList>
      </UiProvider>
    </CronoProvider>
  );

  return {
    debug: debug,
    gets: {
      getByText: getByText,
      getByRole: getByRole,
      getByTestId: getByTestId,
      getAllByTestId: getAllByTestId,
    },
    querys: {
      queryByText: queryByText,
    },
  };
};

test("It must render all of the skins.", () => {
  const { gets } = renderComponent();

  const skins = gets!.getAllByTestId!("skin");

  expect(skins).toHaveLength(MOCK_SKINS.length);
});

test("It should execute the relevant functions when you click on a skin.", () => {
  const { gets } = renderComponent();

  const skins = gets!.getAllByTestId!("skin");

  expect(skins).toHaveLength(MOCK_SKINS.length);

  const skin = skins[0];

  fireEvent.press(skin);

  expect(mockChangeSkin).toHaveBeenCalledTimes(1);
  expect(mockChangeSkin).toHaveBeenCalledWith(MOCK_SKINS[0]);
  expect(mockOpenModal).toHaveBeenCalledTimes(1);
  expect(mockOpenModal).toHaveBeenCalledWith("Skin changed");
});
