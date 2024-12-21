import { Fragment } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";

import { WatchView } from "../../components/WatchView/WatchView";
import { LapsView } from "../../components/LapsView/LapsView";
import { ButtonsView } from "../../components/ButtonsView/ButtonsView";
import { NavBar } from "../../components/NavBar/NavBar";

import { useUiContext } from "../../contexts/UiContext";
import { theme } from "../../theme/theme";

export const MainPage = (): JSX.Element => {
  const { openNavBar } = useUiContext();

  const handlePressMenu = (): void => {
    openNavBar();
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <WatchView></WatchView>
        <LapsView></LapsView>
        <ButtonsView></ButtonsView>

        <TouchableOpacity onPress={handlePressMenu} style={styles.buttonNav} testID="open-nav">
          <Ionicons name="menu" size={30} color={theme.colors.primaryColor} />
        </TouchableOpacity>
      </View>
      <NavBar></NavBar>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.app.backgroundColor,
  },
  buttonNav: {
    position: "absolute",
    top: Constants.statusBarHeight,
    right: 5,
  },
});
