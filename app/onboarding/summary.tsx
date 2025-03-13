import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";

export default function Step8Summary() {
  const router = useRouter();

  return (
    <ImageBackground
          source={require("../../assets/images/fitness-bg.jpg")}
          style={HomeStyles.backgroundImage}
          resizeMode="cover"
        >
          <Stack.Screen
            options={{
              title: "",
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "#facc15",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          />
          <View style={styles.overlay} />
          <View style={styles.container}></View>
    <View style={styles.container}>
      <Text style={styles.title}>¡Todo listo!</Text>
      <Text style={{ color: "#CBD5E1", marginBottom: 20 }}>
        Ya podés comenzar a usar la app con tu perfil personalizado.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Ir al inicio</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
