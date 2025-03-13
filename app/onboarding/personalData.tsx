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

export default function Step2Personal() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Datos personales",
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
          placeholder="Edad"
          keyboardType="numeric"
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholderTextColor="#94A3B8"
        />
        <TextInput
          placeholder="Género (opcional)"
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholderTextColor="#94A3B8"
        />
        <TextInput
          placeholder="Altura (cm)"
          keyboardType="numeric"
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding/bodyData")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
