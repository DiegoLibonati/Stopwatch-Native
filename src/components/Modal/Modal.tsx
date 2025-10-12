import {
  StyleSheet,
  Text,
  View,
  Modal as ModalExpo,
  Pressable,
} from "react-native";

import { useUiContext } from "@src/contexts/UiContext";
import { theme } from "@src/styles/theme";

export const Modal = () => {
  const { uiState, closeModal } = useUiContext();

  const handlePressClose = (): void => {
    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <ModalExpo
        animationType="fade"
        transparent={true}
        visible={uiState.modal.isModalOpen}
      >
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
    backgroundColor: `rgba(${theme.colors.blackInt}, 0.5)`,
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
