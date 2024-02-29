import React, { useContext } from "react";
import { theme } from "../../theme/theme";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { UIContext } from "../../contexts/UIContext";

export const ModalSkin = (): JSX.Element => {
  const { modal, handleModal } = useContext(UIContext)!;
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>Skin changed</Text>
            <Pressable
              onPress={() => handleModal(false)}
              style={styles.buttonModal}
            >
              <Text style={styles.textButtonModal}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  textModal: {
    fontSize: theme.fontSize.md,
  },
  buttonModal: {
    backgroundColor: theme.colors.primaryColor,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textButtonModal: {
    color: theme.colors.white,
    fontSize: theme.fontSize.sm,
  },
});
