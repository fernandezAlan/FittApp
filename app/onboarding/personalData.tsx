import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./styles";
import { HomeStyles } from "@/src/styles/styles";
import { Genders, saveUserDataI } from "@/src/types";
import { useAuth } from "@/src/context/AuthContext";
import { updateUserData } from "@/src/utils/authUtils";
export default function Step2Personal() {
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<Genders>(Genders.Male);
  const [height, setHeight] = useState("");
  const [loading,setLoading] = useState<boolean>(false)
  const router = useRouter();
  const {user} = useAuth()
  const handleSubmit = async()=>{
    try{
      setLoading(true)
      const uid = user?.auth?.uid
      if(!uid){
        setLoading(false)
        throw new Error("missing uid")
      }
      const data:saveUserDataI = {
        gender,
        height:Number(height),
        age:Number(age)
      }
      await updateUserData(uid,data)
      setLoading(false)
      router.push("/onboarding/bodyData")
    }catch(error){
      setLoading(false)
      Alert.alert("ocurrió un error, por favor vuelve a intentarlo más tarde")
    }
  }
  return (
    <ImageBackground
      source={require("../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: "Datos personales",
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
        <TextInput
          placeholder="Edad"
          keyboardType="numeric"
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholderTextColor="#94A3B8"
        />
         <FlatList
            data={Object.values(Genders)}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setGender(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        <TextInput
          placeholder="Altura (cm)"
          keyboardType="numeric"
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
