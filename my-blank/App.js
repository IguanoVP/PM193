/* ZONA1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

constnTexto= (props)=> {
  const { contenido } = props;	
  return (
    <Text> {contenido} </Text>
  )
}

/* ZONA2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Text contenido="Hola"></Text>
      <Text contenido="Mundo"></Text>
      <Text contenido="ReactNative"></Text>
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
  },
});
