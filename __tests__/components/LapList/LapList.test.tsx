import { render, screen } from "@testing-library/react-native";
import { useEffect } from "react";

import type { JSX } from "react";
import type { RenderAPI } from "@testing-library/react-native";

import LapList from "@/components/LapList/LapList";

import { LapsProvider } from "@/contexts/LapsContext/LapsProvider";

import { useLapsContext } from "@/hooks/useLapsContext";

const LapListSeedWrapper = ({ times }: { times: string[] }): JSX.Element => {
  const { addNewLap } = useLapsContext();

  useEffect(() => {
    times.forEach((time) => {
      addNewLap(time);
    });
  }, []);

  return <LapList />;
};

const renderComponent = (): RenderAPI =>
  render(
    <LapsProvider>
      <LapList />
    </LapsProvider>
  );

const renderWithLaps = (times: string[]): RenderAPI =>
  render(
    <LapsProvider>
      <LapListSeedWrapper times={times} />
    </LapsProvider>
  );

describe("LapList", () => {
  describe("rendering", () => {
    it("should render the list container", () => {
      renderComponent();
      expect(screen.getByTestId("list-laps")).toBeTruthy();
    });

    it("should not render any lap when the list is empty", () => {
      renderComponent();
      expect(screen.queryByText("1")).toBeNull();
    });

    it("should render lap times after laps are added", async () => {
      renderWithLaps(["00:01:00", "00:02:30"]);
      expect(await screen.findByText("00:01:00")).toBeTruthy();
      expect(await screen.findByText("00:02:30")).toBeTruthy();
    });

    it("should render lap numbers after laps are added", async () => {
      renderWithLaps(["00:01:00", "00:02:30"]);
      expect(await screen.findByText("1")).toBeTruthy();
      expect(await screen.findByText("2")).toBeTruthy();
    });
  });
});
