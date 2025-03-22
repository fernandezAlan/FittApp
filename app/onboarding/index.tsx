import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
  Alert,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";
import { pickImage, uploadImage, saveUserData } from "@/src/utils/authUtils";
import { useAuth } from "@/src/context/AuthContext";
import { saveUserDataI, userDataI } from "@/src/types";
export default function Step1Name() {
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState(false);
  const authContext = useAuth();
  const router = useRouter();

  const handleIMG = async () => {
    const img = await pickImage();
    setImage(img);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const uid = authContext?.user?.auth?.uid;
      if (!uid) {
        setLoading(false);
        throw new Error("missing uid");
      }
      const imageURL = await uploadImage({ imageUri: image, userID: uid });
      if (!imageURL) return;
      const data: saveUserDataI = {
        imgURL: imageURL,
        name:name
      };
      await saveUserData(uid, data);
      setLoading(false);
      router.push("/onboarding/personalData");
    } catch (error) {
      console.log("error:",error)
      setLoading(false);
      Alert.alert("ocurrió un error, vuelve a intentarlo más tarde");
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
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        )}
        <Text style={styles.title}>¿Cómo te llamás?</Text>
        <TextInput
          placeholder="Ingresá tu nombre"
          style={styles.input}
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setName}
        />
        <Button
          title="Subir imagen de perfil"
          onPress={handleIMG}
          disabled={loading}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading || name ===""}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
