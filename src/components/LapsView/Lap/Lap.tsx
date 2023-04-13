import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../theme/theme";

export const Lap = ({
  lapNumber,
  time,
}: {
  lapNumber: number;
  time: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.lapNumber}>{lapNumber}</Text>
      <Text style={styles.lapTime}>{time}</Text>
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
    borderBottomWidth: 0.1,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1,
  },
  lapNumber: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    width: 33,
    height: 33,
    borderRadius: 1000,
    borderWidth: 2,
    color: theme.app.primaryColor,
    borderColor: theme.app.primaryColor,
  },
  lapTime: {
    fontSize: 25,
  },
});
