/* ZONA1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto= ({style})=> {
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizaTexto = () => {setContenido('Estado Modificado')}
  return (
    <Text style={[styles.text,style]} onPress={actualizaTexto}>{contenido}</Text>
  )
}

/* ZONA2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.azul}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.negro}></Texto>
      <Button title="Presionar"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA3: Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  text:{
    color: 'white',
    fontSize: 27,
    height:120,
    width:120,
  },
  azul: {backgroundColor: 'blue',flex:1},
  verde: {backgroundColor: 'green', flex:3},
  negro: {backgroundColor: 'black',flex:2}
});
 