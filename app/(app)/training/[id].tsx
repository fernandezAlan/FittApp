import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { HomeStyles } from '@/src/styles/styles';
interface MockRoutinesI {
    '1': {
        name: string;
        daysPerWeek: number;
        goal: string;
        schedule: {
            Lunes: string[];
            Martes: string[];
            Jueves: string[];
            Sábado: string[];
        };
    };
    '2': {
        name: string;
        daysPerWeek: number;
        goal: string;
        schedule: {
            Lunes: string[];
            Martes: string[];
            Miércoles: string[];
            Viernes: string[];
            Sábado: string[];
        };
    },
    '3': {
        name: string;
        daysPerWeek: number;
        goal: string;
        schedule: {
            Lunes?: string[];
            Martes?: string[];
            Miércoles?: string[];
            Viernes?: string[];
            Sábado?: string[];
        };
    };
}

const mockRoutines:MockRoutinesI =  {
    '1': {
      name: '🏋️ Fuerza Total',
      daysPerWeek: 4,
      goal: 'Ganar fuerza y mejorar rendimiento',
      schedule: {
        Lunes: ['Sentadillas', 'Press de banca', 'Remo con barra'],
        Martes: ['Peso muerto', 'Dominadas', 'Fondos'],
        Jueves: ['Prensa', 'Press militar', 'Face pulls'],
        Sábado: ['Peso muerto rumano', 'Curl femoral', 'Abdominales'],
      },
    },
    '2': {
      name: '💪 Hipertrofia Dividida',
      daysPerWeek: 5,
      goal: 'Aumentar masa muscular',
      schedule: {
        Lunes: ['Pecho', 'Tríceps'],
        Martes: ['Espalda', 'Bíceps'],
        Miércoles: ['Piernas'],
        Viernes: ['Hombros', 'Abdominales'],
        Sábado: ['Full Body'],
      },
    },
    '3': {
      name: '🔥 Entrenamiento Funcional',
      daysPerWeek: 3,
      goal: 'Mejorar movilidad, resistencia y coordinación',
      schedule: {
        Lunes: ['Burpees', 'Saltos al cajón', 'Battle ropes'],
        Miércoles: ['Kettlebell swings', 'TRX rows', 'Farmer’s walk'],
        Viernes: ['Sprint intervals', 'Escalera de agilidad', 'Lanzamiento de balón'],
      },
    },
  };


export default function RoutineDetailScreen() {
  const { id } = useLocalSearchParams();
  const routine = mockRoutines[id as '1' | '2' | '3'];
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  
  if (!routine) {
    return (
      <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a', padding: 16 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Rutina no encontrada 😓</Text>
      </SafeAreaView>
      </>
    );
  }

  return (
      <>
       <ImageBackground
            source={require("../../../assets/images/fitness-bg.jpg")}
            style={HomeStyles.backgroundImage}
            resizeMode="cover"
          >
    <SafeAreaView style={{ flex: 1 }}>
    <View style={HomeStyles.overlay} />
    <Stack.Screen
        options={{
          title: mockRoutines[id as '1' | '2' | '3'].name,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#facc15',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
          },
        }}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ color: '#94a3b8', fontSize: 16, marginBottom: 4 }}>
          🗓️ {routine.daysPerWeek} días por semana
        </Text>
        <Text style={{ color: '#94a3b8', fontSize: 16, marginBottom: 20 }}>
          🎯 Objetivo: {routine.goal}
        </Text>

        {Object.entries(routine.schedule).map(([day, exercises]) => (
          <View
          key={day}
          style={{
            backgroundColor: '#1e293b',
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
          }}
          >
            <Text style={{ color: '#f1f5f9', fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
              {day}
            </Text>
            {exercises.map((ex, i) => (
              <Text key={i} style={{ color: '#cbd5e1', fontSize: 15 }}>
                • {ex}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  </>
  );
}
