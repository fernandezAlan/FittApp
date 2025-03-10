import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
export default () => {
  return (
    <View style={styles.bmiCard}>
      <Text style={styles.sectionTitle}>Tu IMC</Text>
      <View style={styles.bmiValueContainer}>
        <Text style={styles.bmiValue}>23.4</Text>
        <Text style={styles.bmiLabel}>Normal</Text>
      </View>

      {/* Barra de progreso IMC */}
      <View style={styles.bmiBar}>
        <View
          style={[
            styles.bmiRange,
            { backgroundColor: "#38BDF8", width: "20%" },
          ]}
        />
        <View
          style={[
            styles.bmiRange,
            { backgroundColor: "#22C55E", width: "20%" },
          ]}
        />
        <View
          style={[
            styles.bmiRange,
            { backgroundColor: "#FACC15", width: "20%" },
          ]}
        />
        <View
          style={[
            styles.bmiRange,
            { backgroundColor: "#F97316", width: "20%" },
          ]}
        />
        <View
          style={[
            styles.bmiRange,
            { backgroundColor: "#EF4444", width: "20%" },
          ]}
        />
      </View>
      <View style={styles.bmiLabels}>
        <Text style={styles.bmiLabelText}>Bajo</Text>
        <Text style={styles.bmiLabelText}>Normal</Text>
        <Text style={styles.bmiLabelText}>Sobrepeso</Text>
        <Text style={styles.bmiLabelText}>Obeso</Text>
        <Text style={styles.bmiLabelText}>Severo</Text>
      </View>
    </View>
  );
};
