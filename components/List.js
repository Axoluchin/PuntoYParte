import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";

const List = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.lista}>
      <FlatList
        data={data.map((x) => x.nombre)}
        renderItem={({ item }) => <Text style={styles.texto}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  texto: {
    color: "white",
    textAlign: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  lista: {
    height: "90%",
  },
});
