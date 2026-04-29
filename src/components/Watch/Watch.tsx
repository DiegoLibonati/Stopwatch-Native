import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import type { JSX } from "react";

import { useCronoContext } from "@/hooks/useCronoContext";

import { theme } from "@/styles/theme";

const Watch = (): JSX.Element => {
  const { cronoState } = useCronoContext();

  return (
    <View style={styles.container}>
      <Image
        source={
          !cronoState.idInterval ? cronoState.currentSkin.static : cronoState.currentSkin.dinamic
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
    fontSize: theme.typography.sizes.xxxl,
    color: theme.colors.primary,
    fontWeight: "700",
    marginTop: 10,
  },
});

export default Watch;
