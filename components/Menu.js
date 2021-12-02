import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Menu = ({modalOpcion, mapOpcions}) => (

  <View style={styles.menu}>
    <TouchableOpacity style={styles.boton}
    onPress={()=>modalOpcion()}>
      <Text style={styles.texto}>Lista</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.boton} onPress={()=> mapOpcions[1](!mapOpcions[0])}>
      <Text style={styles.texto}>Mostrar / Ocultar</Text>
    </TouchableOpacity>
  </View>
);

export default Menu;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boton: {
    margin: 12,
    padding: 8,
    flex: 1,
    borderWidth: 2,
    borderColor: "#9022F7",
    borderRadius: 8,
  },
  texto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
