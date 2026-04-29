import { FlatList, StyleSheet } from "react-native";

import type { JSX } from "react";

import Lap from "@/components/Lap/Lap";

import { useLapsContext } from "@/hooks/useLapsContext";

const LapList = (): JSX.Element => {
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

export default LapList;
