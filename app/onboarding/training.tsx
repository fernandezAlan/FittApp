import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";

export default function Step5Training() {
  const [experience, setExperience] = useState("");
  const [frequency, setFrequency] = useState("");
  const router = useRouter();

  return (
     <ImageBackground
              source={require("../../assets/images/fitness-bg.jpg")}
              style={HomeStyles.backgroundImage}
              resizeMode="cover"
            >
              <Stack.Screen
                options={{
                  title: 'Entrenamiento',
                  headerStyle: { backgroundColor: 'black' },
                  headerTintColor: '#facc15',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25
                  },
                }}
              />
              <View style={styles.overlay} />
    <View style={styles.container}>
      <TextInput
        placeholder="Nivel de experiencia (principiante, intermedio...)"
        style={styles.input}
        value={experience}
        onChangeText={setExperience}
      />
      <TextInput
        placeholder="¿Cuántos días por semana entrenás?"
        keyboardType="numeric"
        style={styles.input}
        value={frequency}
        onChangeText={setFrequency}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding/diet")}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
