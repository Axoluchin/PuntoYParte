import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import ModalMenu from "./components/ModalMenu";
import Map from "./components/Map";
import Menu from "./components/Menu";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {
  const [listaPuntos, setListaPuntos] = useState([]);

  const [newPunto, setNewPunto] = useState({});
  const [Nombre, setNombre] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [modalView, setModalView] = useState(true); // true: new mark, false: lista
  const [mapPoints, setMapPoints] = useState(true);

  const accrion = ({ nativeEvent }) => {
    setNewPunto(nativeEvent.coordinate);
    setNombre("");
    setModalView(true)
    setModalVisible(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const guardarPunto = () => {
    const nuevoLugar = { coordenadas: newPunto, nombre: Nombre };
    setListaPuntos([...listaPuntos, nuevoLugar]);
    setModalVisible(false);
  };

  const lista = () =>{

    setModalView(false)
    setModalVisible(true)
  }

  //console.log(listaPuntos)

  return (
    <View style={styles.container}>
      <Map onLongPress={accrion} puntos={listaPuntos} pointsView = {mapPoints}/>

      <ModalMenu visible={modalVisible} setVisible={setModalVisible}>
        {modalView?<>
          <Input
          title={"Ingrse el nombre del marcador"}
          placeholder={"Ciudad Ejemplo"}
          onChangeText={(value) => handleChangeText(value)}
        />
        <TouchableOpacity style={styles.boton} onPress={() => guardarPunto()}>
          <Text style={styles.texto}>Agregar Marcador</Text>
        </TouchableOpacity>
        </>:
        <List data={listaPuntos}/>
        }
        
      </ModalMenu>
      <Menu modalOpcion={lista} mapOpcions = {[mapPoints,setMapPoints]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  boton: {
    margin: 12,
    padding: 8,
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
