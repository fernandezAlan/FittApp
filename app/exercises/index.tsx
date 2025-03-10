import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {ExerciseStyles as styles} from "../../src/styles/styles"

const ExercisesScreen = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExercises = async () => {
    try {
      const response = await axios.get(
        "https://wger.de/api/v2/exerciseinfo/?limit=20&language=2"
      );
      setExercises(response.data.results);
    } catch (error) {
      console.error("Error al obtener los ejercicios", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const renderItem = ({ item }) => {
    const image = item.images[0]?.image;

    return (
      <View style={styles.exerciseCard}>
        {image ? (
          <Image source={{ uri: image }} style={styles.exerciseImage} />
        ) : (
          <View style={[styles.exerciseImage, styles.imagePlaceholder]}>
            <Text style={{ color: "#94A3B8" }}>Sin imagen</Text>
          </View>
        )}
        <Text style={styles.exerciseName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Ejercicios disponibles</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#FACC15" />
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </View>
  );
};

export default ExercisesScreen;
