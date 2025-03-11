import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { ProgressStyles as styles } from "../../src/styles/styles"; // Ajusta esto según el path de tu archivo de estilos

// Datos de ejemplo
interface UserProgress {
  name: string;
  weight: number;
  weightGoal: number;
  bodyFat: number;
  caloriesBurned: number;
  minutesWorkedOut: number;
  workoutsCompleted: number;
  workoutsGoal: number;
  progress: number; // Entre 0 y 1
}

const ProgressScreen: React.FC = () => {
  const user: UserProgress = {
    name: "Juan Pérez",
    weight: 72,
    weightGoal: 65,
    bodyFat: 25,
    caloriesBurned: 3200,
    minutesWorkedOut: 185,
    workoutsCompleted: 4,
    workoutsGoal: 5,
    progress: 0.75,
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/fitness-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.overlay} />
            <ScrollView style={styles.container}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.greeting}>¡Hola, {user.name}!</Text>
                <Text style={styles.subtitle}>¡Mirá tu progreso!</Text>
              </View>

              {/* Progreso general */}
              <View style={styles.progressSection}>
                <Text style={styles.sectionTitle}>Progreso actual</Text>
                <ProgressBar
                  progress={user.progress}
                  color="#facc15"
                  style={styles.progressBar}
                />
                <Text style={styles.progressText}>
                  {`${(user.progress * 100).toFixed(0)}% completado`}
                </Text>
                <Text style={styles.workoutText}>
                  {`${user.workoutsCompleted}/${user.workoutsGoal} entrenamientos`}
                </Text>
              </View>

              {/* Peso y grasa corporal */}
              <View style={styles.statsSection}>
                <View style={styles.statBox}>
                  <Text style={styles.statTitle}>Peso actual</Text>
                  <Text style={styles.statValue}>{`${user.weight} kg`}</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statTitle}>Meta</Text>
                  <Text style={styles.statValue}>{`${user.weightGoal} kg`}</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statTitle}>IMC</Text>
                  <Text style={styles.statValue}>{`${user.bodyFat}%`}</Text>
                </View>
              </View>

              {/* Calorías y minutos */}
              <View style={styles.statsSection}>
                <View style={styles.statBox}>
                  <Text style={styles.statTitle}>Calorías quemadas</Text>
                  <Text style={styles.statValue}>{`${user.caloriesBurned} kcal`}</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statTitle}>Minutos entrenados</Text>
                  <Text style={styles.statValue}>{`${user.minutesWorkedOut} min`}</Text>
                </View>
              </View>

              {/* Historico de entrenamientos */}
              <View style={styles.historySection}>
                <Text style={styles.sectionTitle}>Últimos entrenamientos</Text>
                <View style={styles.historyItem}>
                  <Text style={styles.historyText}>Lunes: Pecho y tríceps - 60 min</Text>
                </View>
                <View style={styles.historyItem}>
                  <Text style={styles.historyText}>Martes: Espalda y bíceps - 60 min</Text>
                </View>
                <View style={styles.historyItem}>
                  <Text style={styles.historyText}>Miércoles: Cardio - 45 min</Text>
                </View>
                <View style={styles.historyItem}>
                  <Text style={styles.historyText}>Jueves: Piernas - 60 min</Text>
                </View>
              </View>

              {/* Botón de acceso rápido */}
              <View style={styles.quickActions}>
                <TouchableOpacity style={styles.quickActionCard}>
                  <Text style={styles.quickActionText}>Ver más detalles</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
};

export default ProgressScreen;
