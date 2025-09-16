import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import { MainPage } from "./src/pages/MainPage/MainPage";

import { CronoProvider } from "./src/contexts/CronoContext";
import { LapsProvider } from "./src/contexts/LapsContext";
import { UiProvider } from "./src/contexts/UIContext";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="dark" />
      <LapsProvider>
        <CronoProvider>
          <UiProvider>
            <MainPage></MainPage>
          </UiProvider>
        </CronoProvider>
      </LapsProvider>
    </Fragment>
  );
}
