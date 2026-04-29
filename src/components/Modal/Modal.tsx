import { StyleSheet, Text, View, Modal as ModalExpo, Pressable } from "react-native";

import type { JSX } from "react";

import { useUiContext } from "@/hooks/useUiContext";

import { theme } from "@/styles/theme";

const Modal = (): JSX.Element => {
  const { uiState, closeModal } = useUiContext();

  const handlePressClose = (): void => {
    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <ModalExpo animationType="fade" transparent={true} visible={uiState.modal.isModalOpen}>
        <View style={{ ...styles.centeredView, ...styles.rootModalView }}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>{uiState.modal.content}</Text>
            <Pressable onPress={handlePressClose} style={styles.buttonModal}>
              <Text style={styles.textButtonModal}>Close</Text>
            </Pressable>
          </View>
        </View>
      </ModalExpo>
    </View>
  );
};

const styles = StyleSheet.create({
  rootModalView: {
    backgroundColor: theme.colors.overlay,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  textModal: {
    fontSize: theme.typography.sizes.md,
  },
  buttonModal: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textButtonModal: {
    color: theme.colors.white,
    fontSize: theme.typography.sizes.sm,
  },
});

export default Modal;
