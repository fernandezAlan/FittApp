import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";

export default function Step3Body() {
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [fat, setFat] = useState("");
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Composición corporal",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#facc15",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <View style={styles.overlay} />
      <View style={styles.container}>
        <TextInput
          placeholder="Peso actual (kg)"
          keyboardType="numeric"
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholderTextColor="#94A3B8"
        />
        <TextInput
          placeholder="Peso objetivo (kg)"
          keyboardType="numeric"
          style={styles.input}
          value={goalWeight}
          onChangeText={setGoalWeight}
          placeholderTextColor="#94A3B8"
        />
        <TextInput
          placeholder="% de grasa corporal"
          keyboardType="numeric"
          style={styles.input}
          value={fat}
          onChangeText={setFat}
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding/goals")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
