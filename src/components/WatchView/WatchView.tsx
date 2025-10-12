import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import { useCronoContext } from "@src/contexts/CronoContext";
import { theme } from "@src/styles/theme";

export const WatchView = () => {
  const { cronoState } = useCronoContext();

  return (
    <View style={styles.container}>
      <Image
        source={
          !cronoState.idInterval
            ? cronoState.currentSkin.static
            : cronoState.currentSkin.dinamic
        }
        style={styles.clockImage}
        contentFit="contain"
        testID="skin-image"
      ></Image>
      <Text style={styles.clockText}>{cronoState.timer}</Text>
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
  },
  clockText: {
    fontSize: theme.fontSize.xxl,
    color: theme.colors.primaryColor,
    fontWeight: "700",
    marginTop: 10,
  },
});
