import { FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { Lap } from "./Lap/Lap";
import { LapsContext } from "../../contexts/LapsContext";

export const LapsView = (): JSX.Element => {
  const { laps } = useContext(LapsContext)!;
  return (
    <FlatList
      style={styles.container}
      data={laps}
      renderItem={({ item }) => <Lap key={item.lapNumber} lap={item}></Lap>}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
