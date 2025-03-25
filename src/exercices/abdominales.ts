import { MuscleList } from "../types";

export default [
  {
    "id": "crunch-basico",
    "nombre": "Crunch básico",
    "nombre_ingles": "Basic Crunch",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "principiante",
    "descripcion": "Ejercicio clásico para trabajar la parte superior de los abdominales.",
    "instrucciones": [
      "Acuéstate boca arriba con las rodillas flexionadas.",
      "Coloca las manos detrás de la cabeza sin jalar el cuello.",
      "Eleva el torso contrayendo los abdominales.",
      "Baja lentamente a la posición inicial."
    ],
    "consejos": [
      "No uses el cuello para impulsarte.",
      "Haz el movimiento controlado y enfocado en la contracción abdominal."
    ],
    "repeticiones_sugeridas": "3 series de 15-20 repeticiones",
    "url_video": "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
    "imagen": "https://example.com/images/crunch-basico.jpg",
    "advertencias": "Evitar si tienes problemas cervicales."
  },
  {
    "id": "plancha",
    "nombre": "Plancha",
    "nombre_ingles": "Plank",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.lower_back, MuscleList.glutes],
    "tipo": "isometrico",
    "equipo": ["colchoneta"],
    "nivel": "intermedio",
    "descripcion": "Ejercicio isométrico que fortalece el core completo.",
    "instrucciones": [
      "Colócate boca abajo apoyando antebrazos y puntas de los pies.",
      "Mantén el cuerpo recto como una tabla.",
      "Aprieta el abdomen y mantén la posición el tiempo indicado."
    ],
    "consejos": [
      "Evita arquear la espalda.",
      "Mantén el cuello en línea con la columna."
    ],
    "repeticiones_sugeridas": "3 series de 30-60 segundos",
    "url_video": "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    "imagen": "https://example.com/images/plancha.jpg",
    "advertencias": ""
  },
  {
    "id": "elevaciones-piernas",
    "nombre": "Elevaciones de piernas",
    "nombre_ingles": "Leg Raises",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "intermedio",
    "descripcion": "Trabaja principalmente la parte inferior del abdomen.",
    "instrucciones": [
      "Acuéstate boca arriba con las piernas estiradas.",
      "Eleva las piernas hasta formar un ángulo de 90°.",
      "Baja lentamente sin tocar el suelo."
    ],
    "consejos": [
      "Mantén la zona lumbar pegada al suelo.",
      "Controla la bajada para mayor intensidad."
    ],
    "repeticiones_sugeridas": "3 series de 10-15 repeticiones",
    "url_video": "https://www.youtube.com/watch?v=JB2oyawG9KI",
    "imagen": "https://example.com/images/elevaciones-piernas.jpg",
    "advertencias": "Cuidado si tienes debilidad en la zona lumbar."
  },
  {
    "id": "ab-wheel-rollout",
    "nombre": "Rodillo abdominal",
    "nombre_ingles": "Ab Wheel Rollout",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.lower_back, MuscleList.shoulders],
    "tipo": "complejo",
    "equipo": ["rueda abdominal"],
    "nivel": "avanzado",
    "descripcion": "Ejercicio avanzado para el abdomen completo.",
    "instrucciones": [
      "Colócate de rodillas con las manos sobre el rodillo.",
      "Rueda hacia adelante lo más lejos posible sin tocar el suelo.",
      "Regresa a la posición inicial controlando el movimiento."
    ],
    "consejos": [
      "Aprieta el core durante todo el movimiento.",
      "Evita arquear la espalda."
    ],
    "repeticiones_sugeridas": "3 series de 8-12 repeticiones",
    "url_video": "https://www.youtube.com/watch?v=Stg7kKAp0PQ",
    "imagen": "https://example.com/images/ab-wheel.jpg",
    "advertencias": "No recomendado para principiantes o personas con problemas lumbares."
  },
  {
    "id": "crunch-bicicleta",
    "nombre": "Crunch bicicleta",
    "nombre_ingles": "Bicycle Crunch",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.obliques],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "intermedio",
    "descripcion": "Ejercicio dinámico para trabajar abdominales rectos y oblicuos.",
    "instrucciones": [
      "Acuéstate con las manos detrás de la cabeza y piernas elevadas.",
      "Lleva el codo derecho hacia la rodilla izquierda mientras extiendes la otra pierna.",
      "Alterna el movimiento como si pedalearas una bicicleta."
    ],
    "consejos": [
      "No jales del cuello.",
      "Haz el movimiento lento y controlado."
    ],
    "repeticiones_sugeridas": "3 series de 20 repeticiones (10 por lado)",
    "url_video": "https://www.youtube.com/watch?v=9FGilxCbdz8",
    "imagen": "https://example.com/images/bicicleta.jpg",
    "advertencias": ""
  },
  {
    "id": "crunch-oblicuo",
    "nombre": "Crunch oblicuo",
    "nombre_ingles": "Oblique Crunch",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.obliques],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "principiante",
    "descripcion": "Variante del crunch para enfocarse en los oblicuos.",
    "instrucciones": [
      "Acuéstate de lado con una pierna cruzada sobre la otra.",
      "Coloca una mano detrás de la cabeza.",
      "Lleva el codo hacia la cadera mientras contraes los oblicuos."
    ],
    "consejos": [
      "Haz el movimiento lateral, no hacia arriba.",
      "Mantén el abdomen contraído."
    ],
    "repeticiones_sugeridas": "3 series de 12-15 repeticiones por lado",
    "url_video": "https://www.youtube.com/watch?v=Zl0vI4N6kTo",
    "imagen": "https://example.com/images/oblicuo.jpg",
    "advertencias": ""
  },
  {
    "id": "toques-talones",
    "nombre": "Toques de talones",
    "nombre_ingles": "Heel Touches",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.obliques],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "principiante",
    "descripcion": "Ejercicio simple para trabajar los oblicuos y zona media.",
    "instrucciones": [
      "Acuéstate boca arriba con las rodillas flexionadas.",
      "Eleva ligeramente los hombros del suelo.",
      "Toca alternadamente los talones con las manos, girando el torso."
    ],
    "consejos": [
      "Mantén la tensión abdominal constante.",
      "Controla el ritmo del ejercicio."
    ],
    "repeticiones_sugeridas": "3 series de 20 repeticiones",
    "url_video": "https://www.youtube.com/watch?v=6kALZikXxLc",
    "imagen": "https://example.com/images/talones.jpg",
    "advertencias": ""
  },
  {
    "id": "v-ups",
    "nombre": "V-Ups",
    "nombre_ingles": "V-Ups",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.hip_flexor],
    "tipo": "complejo",
    "equipo": ["colchoneta"],
    "nivel": "intermedio",
    "descripcion": "Ejercicio intenso que activa el abdomen superior e inferior simultáneamente.",
    "instrucciones": [
      "Acuéstate con los brazos extendidos detrás de la cabeza.",
      "Eleva simultáneamente piernas y torso formando una 'V'.",
      "Baja con control a la posición inicial."
    ],
    "consejos": [
      "Exhala al subir.",
      "No uses impulso con los brazos."
    ],
    "repeticiones_sugeridas": "3 series de 10-15 repeticiones",
    "url_video": "https://www.youtube.com/watch?v=iP2fjvG0g3w",
    "imagen": "https://example.com/images/v-ups.jpg",
    "advertencias": "Evitar si tienes problemas lumbares."
  },
  {
    "id": "mountain-climbers",
    "nombre": "Escaladores",
    "nombre_ingles": "Mountain Climbers",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.shoulders, MuscleList.glutes],
    "tipo": "cardio",
    "equipo": ["ninguno"],
    "nivel": "intermedio",
    "descripcion": "Ejercicio cardiovascular que también fortalece el core.",
    "instrucciones": [
      "Adopta la posición de plancha alta.",
      "Lleva una rodilla al pecho y luego alterna rápidamente.",
      "Mantén el ritmo sin levantar la cadera."
    ],
    "consejos": [
      "Respira con ritmo.",
      "Mantén el abdomen contraído todo el tiempo."
    ],
    "repeticiones_sugeridas": "3 series de 30 segundos",
    "url_video": "https://www.youtube.com/watch?v=nmwgirgXLYM",
    "imagen": "https://example.com/images/escaladores.jpg",
    "advertencias": ""
  },
  {
    "id": "dead-bug",
    "nombre": "Bicho muerto",
    "nombre_ingles": "Dead Bug",
    "grupo_muscular": MuscleList.abdominals,
    "musculos_secundarios": [MuscleList.lower_back],
    "tipo": "aislamiento",
    "equipo": ["colchoneta"],
    "nivel": "principiante",
    "descripcion": "Ejercicio excelente para activar el core con bajo impacto.",
    "instrucciones": [
      "Acuéstate boca arriba con brazos y piernas en el aire.",
      "Extiende una pierna y el brazo opuesto sin tocar el suelo.",
      "Vuelve al centro y alterna lados."
    ],
    "consejos": [
      "Mantén la zona lumbar pegada al suelo.",
      "Hazlo lento y controlado."
    ],
    "repeticiones_sugeridas": "3 series de 10-12 repeticiones por lado",
    "url_video": "https://www.youtube.com/watch?v=4dWlyzQvYjY",
    "imagen": "https://example.com/images/dead-bug.jpg",
    "advertencias": ""
  }
]
