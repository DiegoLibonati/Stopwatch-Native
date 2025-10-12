import { render } from "@testing-library/react-native";

import { LapViewProps } from "@src/entities/props";
import { GlobalTest } from "@src/entities/tests";

import { LapView } from "@src/components/LapView/LapView";

type RenderComponent = {
  props: LapViewProps;
} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const props = {
    lap: {
      lapNumber: 1,
      time: "12",
    },
  };

  const { debug, getByText } = render(
    <LapView
      lap={{ lapNumber: props.lap.lapNumber, time: props.lap.time }}
    ></LapView>
  );

  return {
    props: props,
    debug: debug,
    gets: {
      getByText: getByText,
    },
  };
};

describe("Lap.tsx", () => {
  describe("General Tests.", () => {
    test("It must render the number and time lap.", () => {
      const { props, gets } = renderComponent();

      const lapNumber = gets!.getByText!(String(props.lap.lapNumber));
      const lapTime = gets!.getByText!(props.lap.time);

      expect(lapNumber).toBeTruthy();
      expect(lapTime).toBeTruthy();
    });
  });
});
