import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeStyles as styles } from "../src/styles/styles";
import { auth } from "@/src/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { handleFirebaseError } from "@/src/utils/authUtils";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr] = useState("")
  useEffect(()=>{
      console.log("err")
    },[])
  useEffect(()=>{
    setErr("")
  },[email,password])

  

  const handleLogin = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem("token", "dummy-auth-token");
      router.push("/");
    }catch(error:any){
      let e = handleFirebaseError(error.code)
      setErr(e)
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
              ¡Bienvenido de nuevo!
            </Text>
            <Text style={{ fontSize: 16, color: "#94A3B8", marginBottom: 32 }}>
              Iniciá sesión para continuar
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

            <TouchableOpacity
              style={{
                backgroundColor: "#FACC15",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
              }}
              onPress={handleLogin}
            >
              <Text
                style={{ fontWeight: "bold", color: "#1E293B", fontSize: 16 }}
              >
                Iniciar sesión
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 16, alignItems: "center" }}
              onPress={() => router.push("/register")}
            >
              <Text style={{ color: "#FACC15", fontSize: 14 }}>
                ¿No tenés una cuenta?{" "}
                <Text style={{ fontWeight: "bold" }}>Registrate</Text>
              </Text>
            </TouchableOpacity>
            {err!== "" && <Text 
            style={{
              position:"relative",
              color:"red",
              textAlign:"center"
            }}>{err}</Text>}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;

export const options = {
  animation: "slide_from_right", 
  animationDuration:5,
  headerShown: false,
};