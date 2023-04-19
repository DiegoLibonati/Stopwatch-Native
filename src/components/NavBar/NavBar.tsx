import {
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UIContext } from "../../contexts/UIContext";
import { theme } from "../../theme/theme";
import { CronoContext } from "../../contexts/CronoContext";

export const NavBar = () => {
  const { widthAnim, closeNavBar } = useContext(UIContext);
  const { image } = useContext(CronoContext);

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
      <Ionicons
        style={styles.close}
        name="close"
        size={30}
        color={theme.colors.white}
        onPress={closeNavBar}
      />

      <Text style={styles.title}>SKINS</Text>

      <TouchableOpacity style={styles.clockContainer}>
        <Image source={image} style={styles.clockImage}></Image>
      </TouchableOpacity>
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
  close: {
    alignSelf: "flex-end",
    paddingRight: 2,
  },
  title: {
    alignSelf: "center",
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
  },
  clockContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    margin: 5,
  },
  clockImage: {
    height: 100,
    width: 100,
  },
});
