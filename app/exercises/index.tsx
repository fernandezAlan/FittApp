import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { ExerciseStyles as styles } from "../../src/styles/styles";
import { getBodyParts } from "@/src/services/api";
import { HomeStyles } from "../../src/styles/styles";
import { MuscleList } from "@/src/types";
import { Link, Stack } from "expo-router";
const ExercisesScreen = () => {
  const renderItem = ({ item }: { item: string }) => {
    return (
      <Link
        href={{
          pathname: "/exercises/[id]",
          params: { id: item },
        }}
      >
        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>{item}</Text>
        </View>
      </Link>
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Elige una opción",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#facc15",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <View style={HomeStyles.overlay} />
      <View style={styles.container}>
        <FlatList
          data={Object.values(MuscleList)}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: 50,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default ExercisesScreen;
