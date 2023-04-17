import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
import { CronoContext } from "../../contexts/CronoContext";
import { useContext } from "react";

export const WatchView = () => {
  const { crono, image } = useContext(CronoContext);
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.clockImage}></Image>
      <Text style={styles.clockText}>{crono.screen}</Text>
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
