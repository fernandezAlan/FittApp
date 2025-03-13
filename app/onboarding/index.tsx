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
export default function Step1Name() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Bienvenido",
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
        <Text style={styles.title}>¿Cómo te llamás?</Text>
        <TextInput
          placeholder="Ingresá tu nombre"
          style={styles.input}
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding/personalData")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
