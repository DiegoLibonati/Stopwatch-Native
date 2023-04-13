import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme/theme";

export const ButtonsView = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.buttonText}>LAP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.buttonText}>STOP</Text>
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
