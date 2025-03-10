import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export default function TabLayout() {
  return (
    
  <Tabs
  screenOptions={({ route }) => ({
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: '#aaa',
    tabBarStyle: {
      backgroundColor: '#1a1a1a',
      borderTopColor: '#333',
      height: 60,
      paddingBottom: 5,
    },
    headerShown: false
  })}
  >
  <Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="home" color={color} />,
    animation:"shift",
  }}
  />
  <Tabs.Screen
  name="training"
  options={{
    title: 'Rutinas',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="barbell" size={24} color={color} />
    ),
    animation:"shift",
  }}

  />
  <Tabs.Screen
  name="progress"
  options={{
    title: 'Progreso',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="analytics" size={24} color={color} />
    ),
    animation:"shift",
  }}
  />
  <Tabs.Screen
  name="nutrition"
  options={{
    title: 'Nutrición',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="restaurant" size={24} color={color} />
    ),
    animation:"shift",
  }}
  />
  <Tabs.Screen
  name="profile"
  options={{
    title: 'Perfil',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" size={24} color={color} />
    ),
    animation:"shift",
  }}
  />
  </Tabs>
);
}
