import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)', // 🔅 Cambiá el 0.5 para más o menos oscuridad,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#1E293B",
    color: "#F1F5F9",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FACC15",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#1E293B",
    fontWeight: "bold",
    fontSize: 16,
  },
});
