import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { WatchView } from "../../components/WatchView/WatchView";
import { LapsView } from "../../components/LapsView/LapsView";
import { ButtonsView } from "../../components/ButtonsView/ButtonsView";
import { theme } from "../../theme/theme";
import { UIContext } from "../../contexts/UIContext";
import { NavBar } from "../../components/NavBar/NavBar";

export const MainPage = (): JSX.Element => {
  const { openNavBar } = useContext(UIContext)!;
  return (
    <>
      <View style={styles.container}>
        <WatchView></WatchView>
        <LapsView></LapsView>
        <ButtonsView></ButtonsView>

        <Ionicons
          name="menu"
          size={30}
          color={theme.colors.primaryColor}
          onPress={() => openNavBar()}
          style={styles.buttonNav}
        />
      </View>
      <NavBar></NavBar>
    </>
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
