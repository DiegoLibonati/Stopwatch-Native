import { StatusBar } from "expo-status-bar";
import { CronoProvider } from "./src/contexts/CronoContext";
import { LapsProvider } from "./src/contexts/LapsContext";
import { UIProvider } from "./src/contexts/UIContext";
import { MainPage } from "./src/pages/MainPage/MainPage";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <LapsProvider>
        <CronoProvider>
          <UIProvider>
            <MainPage></MainPage>
          </UIProvider>
        </CronoProvider>
      </LapsProvider>
    </>
  );
}
