/* ZONA1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto= ()=> {
  return (
    <Text>Hola Mundo React Native</Text>
  )
}

/* ZONA2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
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
