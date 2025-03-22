import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";
import { useAuth } from "@/src/context/AuthContext";
import { Experience, saveUserDataI } from "@/src/types";
import { updateUserData } from "@/src/utils/authUtils";

export default function Step5Training() {
  const [experience, setExperience] = useState<Experience>(Experience.Beginner);
  const [frequency, setFrequency] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleFrequencyChange = (value: string) => {
    const numericValue = parseInt(value, 10);
    if (numericValue <= 7) {
      setFrequency(value);
    }
  };
  const handleSubmit = async() => {
    try {
      setLoading(true);
      const uid = user?.auth?.uid;
      if (!uid) {
        setLoading(false);
        throw new Error("missing uid");
      }
      const data: saveUserDataI = {
        experience,
        frequency:Number(frequency)
      };
      await updateUserData(uid, data);
      setLoading(false);
      router.push("/onboarding/diet");
    } catch (error: any) {
      setLoading(false);
      throw new Error(error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Entrenamiento",
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
        <FlatList
          data={Object.values(Experience)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setExperience(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <TextInput
          placeholder="¿Cuántos días por semana entrenás?"
          keyboardType="numeric"
          style={styles.input}
          value={frequency}
          onChangeText={handleFrequencyChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
