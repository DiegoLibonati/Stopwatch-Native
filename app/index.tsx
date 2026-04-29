import type { JSX } from "react";

import LapstrScreen from "@/screens/LapstrScreen/LapstrScreen";

import { LapsProvider } from "@/contexts/LapsContext/LapsProvider";
import { CronoProvider } from "@/contexts/CronoContext/CronoProvider";
import { UiProvider } from "@/contexts/UiContext/UiProvider";

export default function LapstrRoute(): JSX.Element {
  return (
    <LapsProvider>
      <CronoProvider>
        <UiProvider>
          <LapstrScreen></LapstrScreen>
        </UiProvider>
      </CronoProvider>
    </LapsProvider>
  );
}
