import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { Lap } from "./Lap/Lap";

export const LapsView = () => {
  const [laps, setLaps] = useState([
    {
      lapNumber: 1,
      time: "00:13:25",
    },
    {
      lapNumber: 2,
      time: "00:16:25",
    },
    {
      lapNumber: 3,
      time: "00:20:25",
    },
    {
      lapNumber: 4,
      time: "00:20:25",
    },
    {
      lapNumber: 5,
      time: "00:20:25",
    },
    {
      lapNumber: 6,
      time: "00:20:25",
    },
    {
      lapNumber: 7,
      time: "00:20:25",
    },
  ]);

  return (
    <FlatList
      style={styles.container}
      data={laps}
      renderItem={({ item }) => <Lap key={item.lapNumber} {...item}></Lap>}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
