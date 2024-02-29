import { StyleSheet, Animated, Text } from "react-native";
import Constants from "expo-constants";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UIContext } from "../../contexts/UIContext";
import { theme } from "../../theme/theme";
import { SkinList } from "../SkinList/SkinList";
import { ModalSkin } from "../ModalSkin/ModalSkin";

export const NavBar = (): JSX.Element => {
  const { widthAnim, closeNavBar } = useContext(UIContext)!;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: widthAnim }],
          width: "100%",
        },
      ]}
    >
      <Ionicons
        style={styles.close}
        name="close"
        size={30}
        color={theme.colors.white}
        onPress={closeNavBar}
      />
      <Text style={styles.title}>SKINS</Text>
      <SkinList></SkinList>
      <ModalSkin></ModalSkin>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryColor,
    flex: 1,
    position: "absolute",
    top: 0,
    paddingTop: Constants.statusBarHeight + 10,
    zIndex: 99,
    height: "100%",
    paddingHorizontal: 5,
  },
  close: {
    alignSelf: "flex-end",
    paddingRight: 2,
  },
  title: {
    alignSelf: "center",
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
  },
});
