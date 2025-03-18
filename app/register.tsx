import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeStyles as styles } from "../src/styles/styles";
import { auth } from "@/src/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useGoogleAuth } from "@/src/hooks/useGoogleAuth";
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { promptAsync, request } = useGoogleAuth();

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Completá todos los campos");
        return;
      }

      // Simula registro exitoso
      await AsyncStorage.setItem("token", "dummy-auth-token");
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/onboarding");
    } catch (error) {
      Alert.alert("error al registrarse: " + error);
    }
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <ImageBackground
        source={require("../assets/images/fitness-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView
          style={{ flex: 1, paddingHorizontal: 20, justifyContent: "center" }}
        >
          <View style={styles.overlay} />
          <View style={{ zIndex: 1 }}>
            <Text
              style={{
                fontSize: 28,
                color: "#F1F5F9",
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              Crear cuenta
            </Text>
            <Text style={{ fontSize: 16, color: "#94A3B8", marginBottom: 32 }}>
              Registrate para empezar
            </Text>

            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="#94A3B8"
              style={{
                backgroundColor: "#1E293B",
                color: "#F1F5F9",
                padding: 16,
                borderRadius: 12,
                marginBottom: 16,
              }}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#94A3B8"
              style={{
                backgroundColor: "#1E293B",
                color: "#F1F5F9",
                padding: 16,
                borderRadius: 12,
                marginBottom: 24,
              }}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button
              title="Iniciar sesión con Google"
              onPress={() => promptAsync()}
              disabled={!request}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#FACC15",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
              }}
              onPress={handleRegister}
            >
              <Text
                style={{ fontWeight: "bold", color: "#1E293B", fontSize: 16 }}
              >
                Registrarme
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 16, alignItems: "center" }}
              onPress={() => router.push("/login")}
            >
              <Text style={{ color: "#FACC15", fontSize: 14 }}>
                ¿Ya tenés una cuenta?{" "}
                <Text style={{ fontWeight: "bold" }}>Iniciá sesión</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default RegisterScreen;

export const options = {
  animation: "slide_from_left",
  animationDuration: 2,
  headerShown: false,
};
