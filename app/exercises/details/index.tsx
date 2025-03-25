// ExerciseDetailScreen.js
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, HomeStyles, exerciseDetail as styles } from "@/src/styles/styles";
import data from "../../../src/exercices/abdominales"
import { Stack } from "expo-router";
const ExerciseDetailScreen = () => {
  const  ejercicio  = data[0]
  const localImage = require("../../../assets/images/mancuernas.jpg");
  return (
     <ImageBackground
          source={require("../../../assets/images/fitness-bg.jpg")}
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
                      freezeOnBlur: false,
                      //detachPreviousScreen: false,
                    }}
                  />
    <ScrollView style={styles.container}>
      <Image source={localImage} style={styles.image} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{ejercicio.nombre}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={32} color={Color.principal} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>{ejercicio.grupo_muscular}</Text>
      <Text style={styles.description}>{ejercicio.descripcion}</Text>
      
      <Text style={styles.sectionTitle}>Instrucciones</Text>
      {ejercicio.instrucciones.map((step, index) => (
        <Text key={index} style={styles.listItem}>• {step}</Text>
      ))}
      
      <Text style={styles.sectionTitle}>Consejos</Text>
      {ejercicio.consejos.map((tip, index) => (
        <Text key={index} style={styles.listItem}>✔ {tip}</Text>
      ))}
      
      <Text style={styles.sectionTitle}>Repeticiones Sugeridas</Text>
      <Text style={styles.reps}>{ejercicio.repeticiones_sugeridas}</Text>
      
      <Text style={styles.sectionTitle}>Advertencias</Text>
      <Text style={styles.warning}>{ejercicio.advertencias}</Text>
      
      <TouchableOpacity style={styles.videoButton} onPress={() => {}}>
        <Ionicons name="logo-youtube" size={24} color="red" />
        <Text style={styles.videoText}>Ver Video</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

export default ExerciseDetailScreen;
