import { render, screen } from "@testing-library/react-native";

import type { RenderAPI } from "@testing-library/react-native";
import type { LapProps } from "@/types/props";

import Lap from "@/components/Lap/Lap";

const renderComponent = (props: Partial<LapProps> = {}): RenderAPI => {
  const defaultProps: LapProps = {
    lap: { lapNumber: 1, time: "00:01:00" },
    ...props,
  };
  return render(<Lap {...defaultProps} />);
};

describe("Lap", () => {
  describe("rendering", () => {
    it("should render the lap number", () => {
      renderComponent();
      expect(screen.getByText("1")).toBeTruthy();
    });

    it("should render the lap time", () => {
      renderComponent();
      expect(screen.getByText("00:01:00")).toBeTruthy();
    });

    it("should render a different lap number", () => {
      renderComponent({ lap: { lapNumber: 7, time: "00:07:45" } });
      expect(screen.getByText("7")).toBeTruthy();
    });

    it("should render a different lap time", () => {
      renderComponent({ lap: { lapNumber: 7, time: "00:07:45" } });
      expect(screen.getByText("00:07:45")).toBeTruthy();
    });
  });
});
