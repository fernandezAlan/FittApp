import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";

export default function Step4Goals() {
  const [goal, setGoal] = useState("");
  const router = useRouter();

  return (
     <ImageBackground
              source={require("../../assets/images/fitness-bg.jpg")}
              style={HomeStyles.backgroundImage}
              resizeMode="cover"
            >
              <Stack.Screen
                options={{
                  title: '¿Cuál es tu objetivo?',
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
      <Text style={styles.title}>¿Cuál es tu objetivo?</Text>
      <TextInput
        placeholder="Ej: Bajar de peso, ganar músculo..."
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding/training")}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
