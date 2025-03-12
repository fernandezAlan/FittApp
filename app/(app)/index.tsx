import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import IMCbox from "@/src/components/IMCbox";
import { HomeStyles as styles } from "../../src/styles/styles";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { useAuth } from "../auth";

const HomeScreen = () => {
  const { isLoading, authenticated } = useAuth();
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FACC15" />
      </View>
    );
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="black"/>
      <ImageBackground
        source={require("../../assets/images/fitness-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.overlay} />
          <ScrollView
            style={styles.container}
            //showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.greeting}>Hola, Usuario 👋</Text>
              <Text style={styles.subtitle}>¡Listo para entrenar hoy?</Text>
            </View>

            {/* Banner */}
            <ImageBackground
              source={require("../../assets/images/mancuernas.jpg")}
              style={styles.banner}
              resizeMode="cover"
            >
              <View style={styles.overlay_banner} />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1594737625785-c5c3b0144b4c",
                }}
                style={styles.bannerImage}
              />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText}>🔥 Entrenamiento del día</Text>
                <Text style={styles.bannerSubText}>Pecho y tríceps</Text>
              </View>
            </ImageBackground>

            <IMCbox />

            {/* Sección de acciones rápidas */}
            <View style={styles.quickActions}>
              <Text style={styles.sectionTitle}>Accesos rápidos</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionText}>Rutinas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionText}>Progreso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionText}>Nutrición</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Recomendaciones */}
            <View style={styles.tipsSection}>
              <Text style={styles.sectionTitle}>Consejos de hoy</Text>
              <View style={styles.tipCard}>
                <Text style={styles.tipText}>
                  💧 No olvides tomar al menos 2L de agua.
                </Text>
              </View>
              <View style={styles.tipCard}>
                <Text style={styles.tipText}>
                  🥗 Incluí vegetales en tu próxima comida.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;

export const options = {
  headerShown: false,
};
