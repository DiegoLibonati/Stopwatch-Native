import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import type { JSX } from "react";

import SkinList from "@/components/SkinList/SkinList";
import Modal from "@/components/Modal/Modal";

import { useUiContext } from "@/hooks/useUiContext";

import { BEZIER_250 } from "@/styles/composed";
import { theme } from "@/styles/theme";

const NavBar = (): JSX.Element => {
  const { uiState, closeNavBar } = useUiContext();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(uiState.navBar.isNavBarOpen ? 0 : 5000, BEZIER_250),
        },
      ],
      opacity: withTiming(uiState.navBar.isNavBarOpen ? 1 : 0, BEZIER_250),
    };
  });

  const handlePressClose = (): void => {
    closeNavBar();
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity style={styles.close} onPress={handlePressClose} testID="close-navbar">
        <Ionicons name="close" size={30} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>SKINS</Text>
      <SkinList></SkinList>
      <Modal></Modal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    position: "absolute",
    top: 0,
    paddingTop: Constants.statusBarHeight + 10,
    zIndex: 99,
    height: "100%",
    width: "100%",
    paddingHorizontal: 5,
  },
  close: {
    alignSelf: "flex-end",
    paddingRight: 2,
  },
  title: {
    alignSelf: "center",
    fontSize: theme.typography.sizes.xl,
    color: theme.colors.white,
  },
});

export default NavBar;
