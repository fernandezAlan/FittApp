import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { HomeStyles ,NutritionStyles} from "../../src/styles/styles"; // Estilos generales
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressChart } from "react-native-chart-kit";

const NutritionScreen = () => {
  // Datos de ejemplo para el gráfico de progreso
  const chartData = {
    labels: ["Calorías", "Proteínas", "Grasas", "Carbohidratos"],
    data: [0.7, 0.5, 0.3, 0.8], // Porcentajes de progreso
  };

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
              {/* Header */}
              <View style={HomeStyles.header}>
                <Text style={HomeStyles.greeting}>Nutrición 🥗</Text>
                <Text style={HomeStyles.subtitle}>
                  Alimentación saludable para tus objetivos
                </Text>
              </View>

              {/* Información Nutricional Diaria */}
              <View style={HomeStyles.quickActions}>
                <Text style={HomeStyles.sectionTitle}>Hoy has consumido</Text>
               
                  <View style={NutritionStyles.nutritionItem}>
                    <Text style={NutritionStyles.nutritionLabel}>Calorías</Text>
                    <Text style={NutritionStyles.nutritionValue}>1200 kcal</Text>
                  </View>
                  <View style={NutritionStyles.nutritionItem}>
                    <Text style={NutritionStyles.nutritionLabel}>Proteínas</Text>
                    <Text style={NutritionStyles.nutritionValue}>80 g</Text>
                  </View>
                  <View style={NutritionStyles.nutritionItem}>
                    <Text style={NutritionStyles.nutritionLabel}>Grasas</Text>
                    <Text style={NutritionStyles.nutritionValue}>40 g</Text>
                  </View>
                  <View style={NutritionStyles.nutritionItem}>
                    <Text style={NutritionStyles.nutritionLabel}>Carbohidratos</Text>
                    <Text style={NutritionStyles.nutritionValue}>150 g</Text>
                  </View>
               
              </View>

              {/* Gráfico de Progreso Nutricional */}
              <View style={HomeStyles.quickActions}>
                <Text style={HomeStyles.sectionTitle}>Progreso Nutricional</Text>
                <View style={NutritionStyles.chartContainer}>
                  <ProgressChart
                    data={chartData}
                    width={300}
                    height={220}
                    strokeWidth={15}
                    radius={12}
                    chartConfig={{
                      backgroundColor: "#1E293B",
                      backgroundGradientFrom: "#1E293B",
                      backgroundGradientTo: "#334155",
                      decimalPlaces: 2,
                      color: (opacity = 1) => `rgba(250, 204, 21, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    }}
                    hideLegend={false}
                  />
                </View>
              </View>

              {/* Recomendaciones de Alimentos */}
              <View style={HomeStyles.tipsSection}>
                <Text style={HomeStyles.sectionTitle}>Recomendaciones</Text>
                <View style={HomeStyles.tipCard}>
                  <Text style={HomeStyles.tipText}>
                    🥑 Incluye grasas saludables como aguacate o nueces.
                  </Text>
                </View>
                <View style={HomeStyles.tipCard}>
                  <Text style={HomeStyles.tipText}>
                    🍗 Consume proteínas magras como pollo o pescado.
                  </Text>
                </View>
                <View style={HomeStyles.tipCard}>
                  <Text style={HomeStyles.tipText}>
                    🥦 Añade vegetales verdes en cada comida.
                  </Text>
                </View>
              </View>

              {/* Registro de Comidas */}
              <View style={HomeStyles.quickActions}>
                <Text style={HomeStyles.sectionTitle}>Registra tu comida</Text>
                <View style={NutritionStyles.inputContainer}>
                  <TextInput
                    style={NutritionStyles.input}
                    placeholder="¿Qué has comido?"
                    placeholderTextColor="#94A3B8"
                  />
                  <TouchableOpacity style={NutritionStyles.addButton}>
                    <Text style={NutritionStyles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
};

export default NutritionScreen;

export const options = {
  headerShown: false,
};