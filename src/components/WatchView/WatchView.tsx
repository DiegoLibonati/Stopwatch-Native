import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";

export const WatchView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/clock-static.png")}
        style={styles.clockImage}
      ></Image>
      <Text style={styles.clockText}>00:00:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
  },
  clockImage: {
    height: 200,
    width: 200,
  },
  clockText: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "700",
  },
});
