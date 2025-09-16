import { FlatList, StyleSheet } from "react-native";

import { Lap } from "@src/components/LapsView/Lap/Lap";

import { useLapsContext } from "@src/contexts/LapsContext";

export const LapsView = () => {
  const { lapsState } = useLapsContext();

  return (
    <FlatList
      style={styles.container}
      data={lapsState.laps}
      renderItem={({ item }) => <Lap key={item.lapNumber} lap={item}></Lap>}
      testID="list-laps"
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
