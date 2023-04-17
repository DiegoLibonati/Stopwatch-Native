import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { CronoContext } from "../../contexts/CronoContext";
import { LapsContext } from "../../contexts/LapsContext";

export const ButtonsView = () => {
  const { crono, startCrono, clearCrono, stopCrono } = useContext(CronoContext);
  const { handleAddNewLap, handleClearLaps } = useContext(LapsContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          handleClearLaps();
          clearCrono();
        }}
      >
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handleAddNewLap(crono.screen)}
      >
        <Text style={styles.buttonText}>LAP</Text>
      </TouchableOpacity>

      {crono.isOn ? (
        <TouchableOpacity style={styles.touchable} onPress={() => stopCrono()}>
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={() => startCrono()}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      )}
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
