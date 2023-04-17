import { StyleSheet, View, Animated } from "react-native";
import Constants from "expo-constants";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UIContext } from "../../contexts/UIContext";
import { theme } from "../../theme/theme";

export const NavBar = () => {
  const { widthAnim, closeNavBar } = useContext(UIContext);

  return (
    <Animated.ScrollView
      style={[
        styles.container,
        {
          transform: [{ translateX: widthAnim }],
          width: "100%",
        },
      ]}
    >
      <View style={styles.view}>
        <Ionicons
          style={styles.close}
          name="close"
          size={30}
          color={theme.colors.white}
          onPress={closeNavBar}
        />
      </View>
    </Animated.ScrollView>
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
  },
  view: {
    flex: 1,
  },
  close: {
    alignSelf: "flex-end",
    paddingRight: 2,
  },
});
