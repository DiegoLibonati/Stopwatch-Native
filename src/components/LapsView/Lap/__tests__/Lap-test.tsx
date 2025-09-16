import { render } from "@testing-library/react-native";

import { GlobalTest, Lap as LapT } from "@src/entities/entities";

import { Lap } from "@src/components/LapsView/Lap/Lap";

type RenderComponent = {
  props: {
    lap: LapT;
  };
} & GlobalTest;

const renderComponent = (): RenderComponent => {
  const props = {
    lap: {
      lapNumber: 1,
      time: "12",
    },
  };

  const { debug, getByText } = render(
    <Lap lap={{ lapNumber: props.lap.lapNumber, time: props.lap.time }}></Lap>
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
