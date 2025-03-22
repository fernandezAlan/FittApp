/**
 * Calcula el Índice de Masa Corporal (IMC).
 * @param weightKg - Peso en kilogramos
 * @param heightCm - Altura en centímetros
 * @returns El IMC redondeado a 2 decimales
 */
export const calculateBMI = (weightKg: number, heightCm: number): number => {
    if (heightCm <= 0 || weightKg <= 0) {
      throw new Error("Altura y peso deben ser mayores a 0.");
    }
  
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    return parseFloat(bmi.toFixed(2));
  };