// src/screens/CompleteProfileScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStyles, CompleteProfileStyles as styles } from "../src/styles/styles";

const CompleteProfileScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const handleSave = () => {
    if (!name || !age || !weight || !height || !bodyFat) {
      Alert.alert("Faltan datos", "Por favor completá todos los campos.");
      return;
    }

    // Podés guardar los datos en tu contexto, backend o AsyncStorage acá
    console.log({ name, age, weight, height, bodyFat });

    Alert.alert("¡Listo!", "Tu perfil fue guardado correctamente.");
    // Navegar al Home o siguiente paso
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <ImageBackground
              source={require("../assets/images/fitness-bg.jpg")}
              style={HomeStyles.backgroundImage}
              resizeMode="cover"
            >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={HomeStyles.overlay} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Completa tu perfil</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#94A3B8"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
            <TextInput
              style={styles.input}
              placeholder="Peso (kg)"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
            <TextInput
              style={styles.input}
              placeholder="Altura (cm)"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
            <TextInput
              style={styles.input}
              placeholder="% de grasa corporal"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={bodyFat}
              onChangeText={setBodyFat}
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default CompleteProfileScreen;

export const options = {
  headerShown: false,
};
