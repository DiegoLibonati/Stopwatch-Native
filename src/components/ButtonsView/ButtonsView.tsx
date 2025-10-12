import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useCronoContext } from "@src/contexts/CronoContext";
import { useLapsContext } from "@src/contexts/LapsContext";
import { theme } from "@src/styles/theme";

export const ButtonsView = () => {
  const { cronoState, startCrono, clearCrono, stopCrono } = useCronoContext();
  const { addNewLap, clearLaps } = useLapsContext();

  const handlePressClear = (): void => {
    clearLaps();
    clearCrono();
  };

  const handlePressLap = (): void => {
    addNewLap(cronoState.timer);
  };

  const handlePressStartOrStop = (): void => {
    if (cronoState.isTimerOn) return stopCrono();
    return startCrono();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={handlePressClear}
        testID="clear-touchable"
      >
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={handlePressLap}
        testID="lap-touchable"
      >
        <Text style={styles.buttonText}>LAP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={handlePressStartOrStop}
        testID="stop-or-and-touchable"
      >
        <Text style={styles.buttonText}>
          {cronoState.isTimerOn ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width,
    backgroundColor: theme.colors.white,
  },
  touchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    color: theme.colors.primaryColor,
    fontWeight: "700",
    fontSize: theme.fontSize.sm,
  },
});
