import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

const GEOAPIFY_API_KEY = '8f61df14d46e4c0194d48f89b5e28498';

// Función para simular una calificación aleatoria entre 3 y 5
const getRandomRating = () => {
  return (Math.random() * 2 + 3).toFixed(1);
};

const App = () => {
  const [foodType, setFoodType] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRestaurants = async () => {
    if (!foodType.trim() || !city.trim()) {
      Alert.alert('Error', 'Debes ingresar tipo de comida y ciudad');
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const geoResponse = await axios.get('https://api.geoapify.com/v1/geocode/search', {
        params: {
          text: city,
          apiKey: GEOAPIFY_API_KEY,
        },
      });

      if (!geoResponse.data.features.length) {
        Alert.alert('Error', 'Ciudad no encontrada');
        setLoading(false);
        return;
      }

      const { lat, lon } = geoResponse.data.features[0].properties;

      const placesResponse = await axios.get('https://api.geoapify.com/v2/places', {
        params: {
          categories: 'catering.restaurant',
          filter: `circle:${lon},${lat},15000`,
          limit: 20,
          apiKey: GEOAPIFY_API_KEY,
        },
      });

      const filteredResults = placesResponse.data.features.filter(place => {
        const name = place.properties.name?.toLowerCase() || '';
        const category = place.properties.categories?.map(cat => cat.toLowerCase()).join(' ') || '';
        const searchText = foodType.toLowerCase();
        return name.includes(searchText) || category.includes(searchText);
      });

      setResults(filteredResults);

    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener resultados');
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPhone = (place) => {
    return place.properties.phone || place.properties.tel || 'No disponible';
  };

  const getDistance = (place) => {
    if (typeof place.properties.distance === 'number') {
      return `${Math.round(place.properties.distance)} m`;
    }
    return 'No disponible';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buscador de Restaurantes Mejorado</Text>

      <TextInput
        placeholder="Tipo de comida (ej: sushi, pizza)"
        style={styles.input}
        value={foodType}
        onChangeText={setFoodType}
      />
      <TextInput
        placeholder="Ciudad (ej: Guadalajara)"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />

      <Button title="Buscar" onPress={searchRestaurants} />

      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

      <ScrollView style={{ marginTop: 20 }}>
        {results.length === 0 && !loading && (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>No se encontraron resultados.</Text>
        )}

        {results.map((place, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{place.properties.name || 'Sin nombre'}</Text>

            {/* Imagen genérica */}
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' }}
              style={styles.image}
            />

            <Text><Text style={styles.bold}>Calificación:</Text> {getRandomRating()}</Text>
            <Text><Text style={styles.bold}>Distancia:</Text> {getDistance(place)}</Text>

            <Text><Text style={styles.bold}>Dirección:</Text> {place.properties.address_line1 || 'No disponible'}</Text>
            <Text><Text style={styles.bold}>Teléfono:</Text> {getPhone(place)}</Text>

            <View style={styles.reviewSection}>
              <Text style={styles.bold}>Reseñas:</Text>
              <Text style={styles.reviewText}>
                {place.properties.description
                  ? place.properties.description
                  : 'No hay reseñas disponibles.'}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  image: { width: 80, height: 80, marginBottom: 10, alignSelf: 'center' },
  bold: { fontWeight: 'bold' },
  reviewSection: { marginTop: 10, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8, width: '100%' },
  reviewText: { fontStyle: 'italic', color: '#555' },
});

export default App;