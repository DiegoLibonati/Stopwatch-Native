import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { Skin } from "../../entities/entities";

import { useCronoContext } from "../../contexts/CronoContext";
import { useUiContext } from "../../contexts/UiContext";
import { skins } from "../../constants/data";
import { theme } from "../../theme/theme";

export const SkinList = (): JSX.Element => {
  const { changeSkin } = useCronoContext();
  const { openModal } = useUiContext();

  const handlePressSkin = (skin: Skin): void => {
    changeSkin(skin);
    openModal("Skin changed");
  };

  return (
    <FlatList
      data={skins}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.clockContainer}
            testID="skin"
            onPress={() => handlePressSkin(item)}
          >
            <Image
              source={item.dinamic}
              style={styles.clockImage}
              contentFit="contain"
            ></Image>
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
    flex: 1,
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
  text: {
    flex: 3,
    fontSize: theme.fontSize.lg,
  },
});
