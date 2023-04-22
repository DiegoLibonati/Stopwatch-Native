import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
import { CronoContext } from "../../contexts/CronoContext";
import { useContext } from "react";

export const WatchView = () => {
  const { crono, image, intervalId } = useContext(CronoContext);

  return (
    <View style={styles.container}>
      <Image
        source={!intervalId ? image.static : image.dinamic}
        style={styles.clockImage}
      ></Image>
      <Text style={styles.clockText}>{crono.screen}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    marginTop: 25,
  },
  clockImage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  clockText: {
    fontSize: theme.fontSize.xxl,
    color: theme.colors.primaryColor,
    fontWeight: "700",
    marginTop: 10,
  },
});
