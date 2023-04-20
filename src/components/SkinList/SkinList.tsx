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

export const SkinList = () => {
  return (
    <FlatList
      data={skins}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.clockContainer}
            key={item.id}
            onPress={() => console.log(item)}
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
    margin: 5,
    height: 100,
    width: Dimensions.get("window").width,
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
