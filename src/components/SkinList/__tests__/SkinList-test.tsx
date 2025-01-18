import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "../../../entities/entities";

import { SkinList } from "../SkinList";

import { UiProvider, useUiContext } from "../../../contexts/UiContext";
import { CronoProvider, useCronoContext } from "../../../contexts/CronoContext";

import { mockSkins } from "../../../tests/jest.constants";

type RenderComponent = {} & GlobalTest;

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

jest.mock("../../../constants/data.ts", () => ({
  get skins() {
    return mockSkins;
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

describe("SkinList.tsx", () => {
  describe("General Tests.", () => {
    const mockOpenModal = jest.fn();
    const mockChangeSkin = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      (useUiContext as jest.Mock).mockReturnValue({
        openModal: mockOpenModal,
      });

      (useCronoContext as jest.Mock).mockReturnValue({
        changeSkin: mockChangeSkin,
      });
    });

    test("It must render all of the skins.", () => {
      const { gets } = renderComponent();

      const skins = gets!.getAllByTestId!("skin");

      expect(skins).toHaveLength(mockSkins.length);
    });

    test("It should execute the relevant functions when you click on a skin.", () => {
      const { gets } = renderComponent();

      const skins = gets!.getAllByTestId!("skin");

      expect(skins).toHaveLength(mockSkins.length);

      const skin = skins[0];

      fireEvent.press(skin);

      expect(mockChangeSkin).toHaveBeenCalledTimes(1);
      expect(mockChangeSkin).toHaveBeenCalledWith(mockSkins[0]);
      expect(mockOpenModal).toHaveBeenCalledTimes(1);
      expect(mockOpenModal).toHaveBeenCalledWith("Skin changed");
    });
  });
});
