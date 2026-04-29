import { Fragment } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import type { JSX } from "react";

import Watch from "@/components/Watch/Watch";
import LapList from "@/components/LapList/LapList";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import NavBar from "@/components/NavBar/NavBar";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const LapstrScreen = (): JSX.Element => {
  const { openNavBar } = useUiContext();

  const handlePressMenu = (): void => {
    openNavBar();
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <Watch></Watch>
        <LapList></LapList>
        <ActionButtons></ActionButtons>

        <TouchableOpacity onPress={handlePressMenu} style={styles.buttonNav} testID="open-nav">
          <Ionicons name="menu" size={30} color={theme.colors.primary} />
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
    backgroundColor: theme.colors.quaternary,
  },
  buttonNav: {
    position: "absolute",
    top: Constants.statusBarHeight,
    right: 5,
  },
});

export default LapstrScreen;
