import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Input = ({title, ...rest}) => (
  <View style={styles.view}>
    <Text style={styles.titulo}>{title}</Text>
    <TextInput {...rest} placeholderTextColor= {'#9E9C9C'} style={styles.texto} />
  </View>
);

export default Input;

const styles = StyleSheet.create({
    view:{
    },
    titulo: {
        color: 'white',
        textAlign: 'center'
    },
    texto: {
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white',
        margin: 8,
        padding: 4,
    }
})