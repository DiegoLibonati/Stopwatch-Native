import { render } from "@testing-library/react-native";

import { GlobalTest, Lap as LapT } from "../../../../entities/entities";

import { Lap } from "../Lap";

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

test("It must render the number and time lap.", () => {
  const { props, gets } = renderComponent();

  const lapNumber = gets!.getByText!(String(props.lap.lapNumber));
  const lapTime = gets!.getByText!(props.lap.time);

  expect(lapNumber).toBeTruthy();
  expect(lapTime).toBeTruthy();
});
