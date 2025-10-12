import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { Skin } from "@src/entities/app";

import { useCronoContext } from "@src/contexts/CronoContext";
import { useUiContext } from "@src/contexts/UIContext";
import skins from "@src/constants/skins";
import { theme } from "@src/styles/theme";

export const SkinList = () => {
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
