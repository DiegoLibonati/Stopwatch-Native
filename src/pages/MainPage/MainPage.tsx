import { Fragment } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import { WatchView } from "@src/components/WatchView/WatchView";
import { LapList } from "@src/components/LapList/LapList";
import { ButtonsView } from "@src/components/ButtonsView/ButtonsView";
import { NavBarView } from "@src/components/NavBarView/NavBarView";

import { useUiContext } from "@src/contexts/Namechange";
import { theme } from "@src/styles/theme";

export const MainPage = () => {
  const { openNavBar } = useUiContext();

  const handlePressMenu = (): void => {
    openNavBar();
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <WatchView></WatchView>
        <LapList></LapList>
        <ButtonsView></ButtonsView>

        <TouchableOpacity
          onPress={handlePressMenu}
          style={styles.buttonNav}
          testID="open-nav"
        >
          <Ionicons name="menu" size={30} color={theme.colors.primaryColor} />
        </TouchableOpacity>
      </View>
      <NavBarView></NavBarView>
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
