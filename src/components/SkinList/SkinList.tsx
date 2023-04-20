import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { skins } from "../../helpers/constants/data";
import { theme } from "../../theme/theme";
import { CronoContext } from "../../contexts/CronoContext";
import { useContext } from "react";

export const SkinList = () => {
  const { changeSkin } = useContext(CronoContext);

  return (
    <FlatList
      data={skins}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.clockContainer}
            key={item.id}
            onPress={() => changeSkin(item)}
          >
            <Image source={item.dinamic} style={styles.clockImage}></Image>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    marginVertical: 5,
    height: 100,
    width: "100%",
  },
  clockImage: {
    width: 100,
    height: 75,
    margin: 5,
  },
  text: {
    fontSize: theme.fontSize.lg,
    marginLeft: 25,
  },
});
