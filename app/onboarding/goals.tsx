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
import { Goals, saveUserDataI } from "@/src/types";
import { useAuth } from "@/src/context/AuthContext";
import { updateUserData } from "@/src/utils/authUtils";

export default function Step4Goals() {
  const [goal, setGoal] = useState<Goals>(Goals.MuscleGain);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const uid = user?.auth?.uid;
      if (!uid) {
        setLoading(false);
        throw new Error("missing uid");
      }
      const data: saveUserDataI = {
        goal,
      };
      await updateUserData(uid, data);
      setLoading(false);
      router.push("/onboarding/training")
    } catch (error:any) {
      setLoading(false);
      throw new Error(error)
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
          title: "¿Cuál es tu objetivo?",
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
        <Text style={styles.title}>¿Cuál es tu objetivo?</Text>
        <FlatList
          data={Object.values(Goals)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setGoal(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
