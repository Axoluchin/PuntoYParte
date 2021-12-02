import React from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity } from "react-native";

const ModalMenu = ({ children, visible, setVisible, title }) => (
  <Modal animationType="slide" transparent={true} visible={visible}>
    <View style={styles.modal}>
      <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.boton}
          >
            <Text style={styles.texto}>X</Text>
          </TouchableOpacity>

        {children}
      </View>
    </View>
  </Modal>
);

export default ModalMenu;

const styles = StyleSheet.create({
  texto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#11111180",
  },
  modalContent: {
    alignContent: "center",
    backgroundColor: "#1f1f1f",
    marginHorizontal: "10%",
    padding: "5%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 16,
      height: 16,
    },
  },
  boton: {
    backgroundColor: "#474747",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignSelf: 'flex-end'
  },
  texto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  titulo: {
    flex: 1,
    marginRight: -20,
    fontSize: 25,
  },
});
