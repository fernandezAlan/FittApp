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

export default function Step6Diet() {
  const [diet, setDiet] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Nutrición",
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
          placeholder="Tipo de dieta (normal, vegana, keto...)"
          style={styles.input}
          value={diet}
          onChangeText={setDiet}
        />
        <TextInput
          placeholder="Restricciones alimentarias (si hay)"
          style={styles.input}
          value={restrictions}
          onChangeText={setRestrictions}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding/summary")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
