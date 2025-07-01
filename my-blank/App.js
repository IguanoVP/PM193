import{
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
 return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView>
          <Text style={styles.text}>
            Este es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades.     
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades.  
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
          </Text>
        </ScrollView>
      </ScrollView>
      </SafeAreaView>

  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                      
    paddingTop: StatusBar.currentHeight 
  },
  scrollView: {
    backgroundColor: 'green',        
  },
  text: {
    fontSize: 42,              
    padding: 12,                      
  },
});

export default App;