import React from 'react';
import { TouchableOpacity, Image, Text, View, ImageBackground } from 'react-native';
import { ExerciseI } from '@/src/types';
import { HomeStyles, ExcerciseCardstyles as styles } from '../styles/styles';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

interface Props {
  exercise: ExerciseI;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const router = useRouter();
  return (
    <ImageBackground
          source={require("../../assets/images/mancuernas.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
    <TouchableOpacity  activeOpacity={0.85} key={exercise.id} style={styles.bg} onPress={()=>router.push("/exercises/details")}>
      <View style={styles.info}>
        <Text style={styles.name}>{exercise.nombre}</Text>
      </View>
    </TouchableOpacity>
    </ImageBackground>
  );
};

export default ExerciseCard;
