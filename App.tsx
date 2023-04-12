import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { theme } from "./src/theme/theme";
import { WatchView } from "./src/components/WatchView/WatchView";
import { LapsView } from "./src/components/LapsView/LapsView";
import { ButtonsView } from "./src/components/ButtonsView/ButtonsView";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <WatchView></WatchView>
        <LapsView></LapsView>
        <ButtonsView></ButtonsView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.app.backgroundColor,
  },
});
