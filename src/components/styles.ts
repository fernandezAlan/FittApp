import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 12,
  },
  bmiCard: {
    backgroundColor: "#1e293b9e",
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },
  bmiValueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
  bmiValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#F1F5F9",
  },
  bmiLabel: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 8,
  },
  bmiBar: {
    flexDirection: "row",
    height: 12,
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 8,
  },
  bmiRange: {
    height: "100%",
  },
  bmiLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bmiLabelText: {
    fontSize: 10,
    color: "#94A3B8",
  },
});

export const NutritionStyles = StyleSheet.create({
  nutritionCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  nutritionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  nutritionLabel: {
    fontSize: 16,
    color: "#E2E8F0",
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FACC15",
  },
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    color: "#F1F5F9",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#FACC15",
    borderRadius: 12,
    padding: 12,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#1E293B",
    fontSize: 18,
    fontWeight: "bold",
  },
});