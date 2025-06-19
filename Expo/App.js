/* Jhadiel: Importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
import { Button as ElementsButton } from 'react-native-elements';

const Texto = ({ style, isDarkMode }) => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizaTexto = () => setContenido('Estado Modificado');

  return (
    <Text style={[styles.Text, style, { color: isDarkMode ? '#fff' : 'pink' }]} onPress={actualizaTexto}>
      {contenido}
    </Text>
  );
};

/* Erick: MAIN */
export default function App() {
  // Estado para controlar si está activado el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función que alterna entre modo claro y oscuro
  const toggleSwitch = () => setIsDarkMode(previous => !previous);

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Se ajusta el fondo según el modo (oscuro o claro) */}
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>

          {/* Switch para cambiar entre modo claro y oscuro */}
          <View style={styles.section}>
            <Text style={styles.title}>Modo {isDarkMode ? 'Oscuro' : 'Claro'}</Text>
            <Switch value={isDarkMode} onValueChange={toggleSwitch} />
          </View>

          {/* Textos de colores, su color también se adapta al modo actual */}
          <Texto style={styles.azul} isDarkMode={isDarkMode} />
          <Texto style={styles.verde} isDarkMode={isDarkMode} />
          <Texto style={styles.negro} isDarkMode={isDarkMode} />

          {/* 1. Button (nativo) */}
          <View style={styles.section}>
            <Text style={styles.title}>1. Button (nativo): simple, rápido y multiplataforma</Text>
            <Button
              title="Botón Nativo"
              color="#007bff"
              onPress={() => Alert.alert('Botón nativo presionado')}
            />
          </View>

          {/* 2. TouchableOpacity */}
          <View style={styles.section}>
            <Text style={styles.title}>2. TouchableOpacity: se vuelve transparente al presionar</Text>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#28a745' }]}
              onPress={() => Alert.alert('TouchableOpacity')}>
              <Text style={styles.btnText}>TouchableOpacity</Text>
            </TouchableOpacity>
          </View>

          {/* 3. TouchableHighlight */}
          <View style={styles.section}>
            <Text style={styles.title}>3. TouchableHighlight: cambia a otro color al presionar</Text>
            <TouchableHighlight
              style={[styles.btn, { backgroundColor: '#ffc107' }]}
              underlayColor="#e0a800"
              onPress={() => Alert.alert('TouchableHighlight')}>
              <Text style={styles.btnText}>TouchableHighlight</Text>
            </TouchableHighlight>
          </View>

          {/* 4. TouchableWithoutFeedback */}
          <View style={styles.section}>
            <Text style={styles.title}>4. TouchableWithoutFeedback: sin retroalimentación visual</Text>
            <TouchableWithoutFeedback onPress={() => Alert.alert('TouchableWithoutFeedback')}>
              <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}>
                <Text style={styles.btnText}>Sin feedback visual</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* 5. Pressable */}
          <View style={styles.section}>
            <Text style={styles.title}>5. Pressable: control total sobre estados como presionado</Text>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                {
                  backgroundColor: pressed ? '#6c757d' : '#343a40',
                },
              ]}
              onPress={() => Alert.alert('Pressable presionado')}>
              <Text style={styles.btnText}>Pressable</Text>
            </Pressable>
          </View>

          {/* 6. Paper Button */}
          <View style={styles.section}>
            <Text style={styles.title}>6. Paper Button: diseño Material, moderno y elegante</Text>
            <PaperButton
              mode="contained"
              buttonColor="#9c27b0"
              textColor="#fff"
              onPress={() => Alert.alert('Paper Button presionado')}
              style={styles.paperButton}>
              Paper Button
            </PaperButton>
          </View>

          {/* 7. Elements Button */}
          <View style={styles.section}>
            <Text style={styles.title}>7. Elements Button: botón con iconos, estilos y temas</Text>
            <ElementsButton
              title="Elements Button"
              onPress={() => Alert.alert('Elements Button presionado')}
              buttonStyle={{
                backgroundColor: '#ff5722',
                borderRadius: 10,
                padding: 10,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
            />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

// ZONA3: Estilos
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  Text: {
    fontSize: 27,
    marginVertical: 10,
  },
  azul: { backgroundColor: 'blue' },
  verde: { backgroundColor: 'green' },
  negro: { backgroundColor: 'black' },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});