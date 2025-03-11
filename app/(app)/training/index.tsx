import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { HomeStyles } from "@/src/styles/styles";

const routines = [
  {
    id: "1",
    name: "Fuerza Total",
    emoji: "🏋️",
    days: 4,
  },
  {
    id: "2",
    name: "Hipertrofia Dividida",
    emoji: "💪",
    days: 5,
  },
  {
    id: "3",
    name: "Entrenamiento Funcional",
    emoji: "🤸",
    days: 3,
  },
];

export default function TrainingScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  return (
    <ImageBackground
      source={require("../../../assets/images/fitness-bg.jpg")}
      style={HomeStyles.backgroundImage}
      resizeMode="cover"
    >
      <Stack.Screen
        options={{
          title: 'Mis Rutinas',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#facc15',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
        }}
      />
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <View style={HomeStyles.overlay} />
          <FlatList
            data={routines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/training/${item.id}`)}
                style={{
                  backgroundColor: "#1e293b9e",
                  //opacity:0.7,
                  padding: 16,
                  borderRadius: 12,
                  marginBottom: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#f1f5f9",
                      fontSize: 18,
                      fontWeight: "600",
                    }}
                  >
                    {item.emoji} {item.name}
                  </Text>
                  <Text style={{ color: "#94a3b8", fontSize: 14 }}>
                    {item.days} días / semana
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#facc15" />
              </Pressable>
            )}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#1e293b9e",
              padding: 16,
              borderRadius: 12,
              marginTop: 30,
              alignItems: "center",
            }}
            onPress={() => router.push("/exercises")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#FACC15",
              }}
            >
              📚 Ver todos los ejercicios
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
