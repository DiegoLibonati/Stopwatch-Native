import { FlatList, StyleSheet } from "react-native";

import { LapView } from "@src/components/LapView/LapView";

import { useLapsContext } from "@src/contexts/LapsContext";

export const LapList = () => {
  const { lapsState } = useLapsContext();

  return (
    <FlatList
      style={styles.container}
      data={lapsState.laps}
      renderItem={({ item }) => (
        <LapView key={item.lapNumber} lap={item}></LapView>
      )}
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
