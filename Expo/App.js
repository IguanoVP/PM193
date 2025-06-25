/* Jhadiel: Importaciones */
// Importa la barra de estado de Expo para controlar su apariencia
import { StatusBar } from 'expo-status-bar';
// Importa React y el hook useState para manejar estados
import React, { useState } from 'react';
// Importa componentes de React Native para construir la interfaz
import {
  StyleSheet,        // Permite definir estilos al estilo CSS
  Text,              // Componente para mostrar texto
  View,              // Contenedor genérico para organizar UI
  Button,            // Botón nativo de React Native
  Alert,             // Ventana emergente de alerta
  ScrollView,        // Contenedor que permite scroll
  TouchableOpacity,  // Botón que reduce su opacidad al presionar
  TouchableHighlight,// Botón que cambia de color al presionar
  TouchableWithoutFeedback, // Botón sin retroalimentación visual
  Pressable,         // Botón que permite personalizar estilos al presionar
  Switch             // Switch para alternar entre dos estados (on/off)
} from 'react-native';

// Importa componentes de la librería react-native-paper
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
// Importa el botón de react-native-elements
import { Button as ElementsButton } from 'react-native-elements';


/* Erick: MAIN */
// Función principal de la app
export default function App() {
  // Estado que controla si el modo oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre modo oscuro y claro
  const toggleSwitch = () => setIsDarkMode(previous => !previous);

  return (
    // Proveedor de tema de Paper para aplicar estilos globales
    <PaperProvider>
      {/* ScrollView permite hacer scroll cuando el contenido es largo */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Vista principal que cambia de color según el modo */}
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
          
          {/* Sección del switch para cambiar entre modo claro y oscuro */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              Modo {isDarkMode ? 'Oscuro' : 'Claro'}
            </Text>
            <Switch value={isDarkMode} onValueChange={toggleSwitch} />
          </View>

          {/* 1. Botón nativo */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (nativo): simple, rápido y multiplataforma
            </Text>
            <Button
              title="Botn Nativo"                       // Texto que se muestra en el botón
              color="#007bff"                           // Color del botón (solo en Android se aplica bien)
              onPress={() => Alert.alert('Botn nativo presionado')} // Función que se ejecuta al presionar (muestra una alerta)
              />
          </View>

          {/* 2. TouchableOpacity */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (TouchableOpacity): se vuelve transparente al presionar
            </Text>
            <TouchableOpacity                            // Componente que reacciona al toque bajando opacidad
            style={[styles.btn, { backgroundColor: '#28a745' }]} // Estilo combinado: clase btn + color verde
                onPress={() => Alert.alert('TouchableOpacity')}      // Función al presionar
                >
                <Text style={styles.btnText}>TouchableOpacity</Text> {/* // Texto interno del botón */}
              </TouchableOpacity>
          </View>

          {/* 3. TouchableHighlight */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (TouchableHighlight): cambia a otro color al presionar
            </Text>
            <TouchableHighlight                                    // Componente táctil que muestra otro color al presionar
  style={[styles.btn, { backgroundColor: '#ffc107' }]} // Estilo del botón con color amarillo
  underlayColor="#e0a800"                              // Color de fondo cuando se presiona
  onPress={() => Alert.alert('TouchableHighlight')}    // Función al presionar
>
  <Text style={styles.btnText}>TouchableHighlight</Text> // Texto del botón
</TouchableHighlight>
          </View>

          {/* 4. TouchableWithoutFeedback */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (TouchableWithoutFeedback): sin retroalimentación visual
            </Text>
            <TouchableWithoutFeedback                              // Componente táctil sin retroalimentación visual
  onPress={() => Alert.alert('TouchableWithoutFeedback')} // Función al presionar
>
  <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}> {/* // Vista que simula un botón con fondo azul */}
    <Text style={styles.btnText}>Sin feedback visual</Text>  {/*  // Texto del botón */}
  </View>
</TouchableWithoutFeedback>

          </View>

          {/* 5. Pressable */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (Pressable): control total sobre estados como presionado
            </Text>
            <Pressable                                              // Componente que permite control del estado "presionado"
  style={({ pressed }) => [                            // Función que cambia estilo si está presionado
    styles.btn,                                         // Aplica estilos base del botón
    {
      backgroundColor: pressed ? '#6c757d' : '#343a40', // Color más claro si se presiona, oscuro si no
    },
  ]}
  onPress={() => Alert.alert('Pressable presionado')}   // Acción al presionar
>
  <Text style={styles.btnText}>Pressable</Text>        {/*  // Texto dentro del botón */}
</Pressable>

          </View>

          {/* 6. Paper Button (Material Design) */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (Paper Button): diseño Material, moderno y elegante
            </Text>
            <PaperButton                                           // Botón estilizado de Material Design
  mode="contained"                                     // Estilo "contenedor" (fondo lleno)
  buttonColor="#9c27b0"                                // Color de fondo del botón
  textColor="#fff"                                     // Color del texto
  onPress={() => Alert.alert('Paper Button presionado')} // Acción al presionar
  style={styles.paperButton}                           // Estilo adicional (tamaño, margen)
>
  Paper Button                                       {/*   // Texto mostrado dentro del botón */}
</PaperButton>

          </View>

          {/* 7. Elements Button (personalizado y con temas) */}
          <View style={styles.section}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              (Elements Button): botón con iconos, estilos y temas
            </Text>
            <ElementsButton                                        // Botón con estilos personalizados
  title="Elements Button"                              // Texto del botón
  onPress={() => Alert.alert('Elements Button presionado')} // Función al presionar
  buttonStyle={{                                       // Estilos del botón: color, bordes, tamaño
    backgroundColor: '#ff5722',                        // Color naranja fuerte
    borderRadius: 10,                                  // Bordes redondeados
    padding: 10,                                       // Espaciado interno
  }}
  titleStyle={{ fontWeight: 'bold', fontSize: 16 }}    // Estilo del texto: negrita y tamaño
/>

          </View>

          {/* Barra de estado automática (ajusta color según tema) */}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}


// ZONA3: Estilos
const styles = StyleSheet.create({
  // Estilo para el ScrollView
  scrollContainer: {
    paddingVertical: 30, // Espacio arriba y abajo
  },
  // Contenedor principal
  container: {
    flex: 1,                     // Ocupa todo el espacio disponible
    alignItems: 'center',       // Centra los hijos horizontalmente
    paddingHorizontal: 16,      // Espacio lateral
    paddingBottom: 50,          // Espacio inferior
  },
  // Estilo para los títulos
  title: {
    fontSize: 16,               // Tamaño de letra
    marginVertical: 6,          // Margen arriba y abajo
    textAlign: 'center',        // Centrado
    color: '#000',              // Color del texto (se sobreescribe si modo oscuro)
  },
  // Estilo para cada sección
  section: {
    marginVertical: 15,         // Espacio entre secciones
    alignItems: 'center',       // Centra los hijos
    width: '100%',              // Ocupa todo el ancho disponible
  },
  // Estilo general para los botones personalizados
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  // Estilo del texto de los botones
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  // Estilo específico para el botón de react-native-paper
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});
