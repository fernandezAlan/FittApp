import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { HomeStyles, ProfileStyles } from "../../src/styles/styles"; // Estilos generales
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/src/context/AuthContext";
import { calculateBMI } from "@/src/utils/utils";
//import { useAuth } from "../auth";

const ProfileScreen = () => {
  const { user,logOut } = useAuth();
  const IMC = user?.weight && user.height ? calculateBMI(user.weight,user.height) : null
  console.log("user-profile:",user)
  /*
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#FACC15" />
      </View>
    );
  }
  */
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <ImageBackground
        source={require("../../assets/images/fitness-bg.jpg")}
        style={HomeStyles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={HomeStyles.overlay} />
            <ScrollView style={HomeStyles.container}>
              {/* Header del Perfil */}
              <View style={ProfileStyles.profileHeader}>
                <Image
                  source={{
                    uri: user?.imgURL ? user.imgURL : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  }}
                  style={ProfileStyles.profileImage}
                />
                <Text style={ProfileStyles.profileName}>{user?.name}</Text>
                <Text style={ProfileStyles.profileEmail}>
                  {user?.auth?.email}
                </Text>
              </View>

              {/* Estadísticas del Usuario */}
              <View style={ProfileStyles.statsContainer}>
                <View style={ProfileStyles.statCard}>
                  <Text style={ProfileStyles.statLabel}>Peso</Text>
                  <Text style={ProfileStyles.statValue}>{user?.weight} kg</Text>
                </View>
                <View style={ProfileStyles.statCard}>
                  <Text style={ProfileStyles.statLabel}>Altura</Text>
                  <Text style={ProfileStyles.statValue}>{user?.height} cm</Text>
                </View>
                <View style={ProfileStyles.statCard}>
                  <Text style={ProfileStyles.statLabel}>IMC</Text>
                  <Text style={ProfileStyles.statValue}>{IMC}</Text>
                </View>
              </View>

              {/* Configuración del Perfil */}
              <View style={ProfileStyles.settingsSection}>
                <Text style={HomeStyles.sectionTitle}>Configuración</Text>
                <TouchableOpacity style={ProfileStyles.settingItem}>
                  <Text style={ProfileStyles.settingText}>Editar Perfil</Text>
                  <Ionicons name="chevron-forward" size={24} color="#94A3B8" />
                </TouchableOpacity>
                <TouchableOpacity style={ProfileStyles.settingItem}>
                  <Text style={ProfileStyles.settingText}>
                    Cambiar Contraseña
                  </Text>
                  <Ionicons name="chevron-forward" size={24} color="#94A3B8" />
                </TouchableOpacity>
                <TouchableOpacity style={ProfileStyles.settingItem}>
                  <Text style={ProfileStyles.settingText}>Privacidad</Text>
                  <Ionicons name="chevron-forward" size={24} color="#94A3B8" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={ProfileStyles.settingItem}
                  onPress={logOut}
                >
                  <Text style={ProfileStyles.settingText}>Cerrar Sesión</Text>
                  <Ionicons name="log-out-outline" size={24} color="#EF4444" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
};

export default ProfileScreen;

export const options = {
  headerShown: false,
};
