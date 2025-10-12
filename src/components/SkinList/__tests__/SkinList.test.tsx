import { fireEvent, render } from "@testing-library/react-native";

import { GlobalTest } from "@src/entities/tests";

import { SkinList } from "@src/components/SkinList/SkinList";

import { UiProvider, useUiContext } from "@src/contexts/UiContext";
import { CronoProvider, useCronoContext } from "@src/contexts/CronoContext";

import { mockSkins } from "@tests/jest.constants";

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

jest.mock("@src/constants/skins", () => {
  const { mockSkins } = jest.requireActual("@tests/jest.constants");
  return { __esModule: true, default: mockSkins };
});
jest.mock("@src/contexts/UiContext", () => ({
  ...jest.requireActual("@src/contexts/UiContext"),
  useUiContext: jest.fn(),
}));
jest.mock("@src/contexts/CronoContext", () => ({
  ...jest.requireActual("@src/contexts/CronoContext"),
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
