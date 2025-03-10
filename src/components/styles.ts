import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 12,
  },
  bmiCard: {
    backgroundColor: "#1E293B",
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
