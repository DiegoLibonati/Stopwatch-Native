import { StyleSheet, Text, View } from "react-native";

import type { JSX } from "react";
import type { LapProps } from "@/types/props";

import { theme } from "@/styles/theme";

const Lap = ({ lap }: LapProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.lapNumber}>{lap.lapNumber}</Text>
      <Text style={styles.lapTime}>{lap.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.black,
    elevation: 0.1,
  },
  lapNumber: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: theme.typography.sizes.sm,
    width: 33,
    height: 33,
    borderRadius: 1000,
    borderWidth: 2,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  lapTime: {
    fontSize: theme.typography.sizes.lg,
  },
});

export default Lap;
