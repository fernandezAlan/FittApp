import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import ExerciseCard from "@/src/components/ExerciseCard";
import data from "../../src/exercices/abdominales";
import { HomeStyles } from "@/src/styles/styles";
import { Link, Stack } from "expo-router";

const ExercisesScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Elige un ejercicio",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#facc15",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <View style={HomeStyles.overlay} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{data[0].nombre}</Text>
          <View style={{ flexWrap: "wrap", gap: 20, flexDirection: "row",justifyContent:"center" ,marginBottom:30}}>
          {data.map((exercise) => (
              <ExerciseCard exercise={exercise} key={exercise.id} />
            ))}
          </View>
        </View>
      </ScrollView>
      </>
  );
};

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
  },
});
