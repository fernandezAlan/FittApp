import { Dimensions, StyleSheet } from "react-native";
let ScreenHeight = Dimensions.get("window").height;
export const HomeStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.8)', // 🔅 Cambiá el 0.5 para más o menos oscuridad,
      },
      overlay_banner: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)', // 🔅 Cambiá el 0.5 para más o menos oscuridad
      },
      container: {
       //flex: 1,
       //flexGrow:1,
      paddingHorizontal: 20,
      paddingBottom: 30,
      paddingTop:30
     // height:ScreenHeight,
      },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F1F5F9",
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    marginTop: 4,
  },
  banner: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 30,
  },
  bannerImage: {
    width: "100%",
    height: 160,
  },
  bannerTextContainer: {
    padding: 16,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FACC15",
  },
  bannerSubText: {
    fontSize: 14,
    color: "#E2E8F0",
    marginTop: 4,
  },
  quickActions: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    marginHorizontal: 4,
    paddingVertical: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  actionText: {
    color: "#E2E8F0",
    fontSize: 16,
    fontWeight: "600",
  },
  tipsSection: {
    marginBottom: 50,
  },
  tipCard: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  tipText: {
    color: "#CBD5E1",
    fontSize: 15,
  },
});

export const ExerciseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 20,
  },
  exerciseCard: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334155",
  },
  exerciseName: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: "500",
    flexShrink: 1,
  },
});