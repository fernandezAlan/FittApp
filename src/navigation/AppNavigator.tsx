import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar pantallas
import HomeScreen from "../screens/HomeScreen";
import TrainingScreen from "../screens/TrainingScreen";
import NutritionScreen from "../screens/NutritionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

// Crear Stacks
//const AuthStack = createStackNavigator();
//const MainTabs = createBottomTabNavigator();

const RootStack = createNativeStackNavigator({
    screens: {
      Home: HomeScreen,
      Training:TrainingScreen,
      Nutrition:NutritionScreen,
      Profile:ProfileScreen
    },
  });

  const Navigation = createStaticNavigation(RootStack);
// Stack de Autenticación
/*
const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
);
*/

// Tabs Principales}
/*
const MainNavigator = () => (
    <MainTabs.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            const icons: { [key: string]: keyof typeof Ionicons.glyphMap } = {
                Home: "home",
                Training: "barbell",
                Nutrition: "restaurant",
                Profile: "person",
            };
            return <Ionicons name={icons[route.name as keyof typeof icons]} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "gray",
    })}
    >
    <MainTabs.Screen name="Home" component={HomeScreen} />
    <MainTabs.Screen name="Training" component={TrainingScreen} />
    <MainTabs.Screen name="Nutrition" component={NutritionScreen} />
    <MainTabs.Screen name="Profile" component={ProfileScreen} />
    </MainTabs.Navigator>
);

*/
// Navegación principal
export default function AppNavigator() {
    return <Navigation />;
}
