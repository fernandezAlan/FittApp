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
import { DietTypes, saveUserDataI } from "@/src/types";
import { updateUserData } from "@/src/utils/authUtils";

export default function Step6Diet() {
  const [diet, setDiet] = useState<DietTypes>(DietTypes.Balanced);
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
        diet
      };
      await updateUserData(uid, data);
      setLoading(false);
      router.push("/onboarding/summary")
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
          title: "Nutrición",
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
                  data={Object.values(DietTypes)}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setDiet(item)}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
