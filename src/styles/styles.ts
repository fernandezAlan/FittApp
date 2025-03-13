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

export const ProgressStyles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "'rgba(0,0,0,0.8)'",
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: "#facc15",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  progressSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#1e293b9e",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  workoutText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    //backgroundColor: "#1e293b9e",
  },
  statBox: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1e293b9e",
    borderRadius: 10,
    //elevation: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  statTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a3a1a1",
    marginTop: 5,
  },
  historySection: {
    marginBottom: 20,
  },
  historyItem: {
    padding: 10,
    backgroundColor: "#1e293b9e",
    borderRadius: 5,
    marginBottom: 5,
    elevation: 3,
  },
  historyText: {
    fontSize: 16,
    color: "#fff",
  },
  quickActions: {
    alignItems: "center",
    marginBottom: 20,
  },
  quickActionCard: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#facc15",
    borderRadius: 30,
    elevation: 5,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
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

export const ProfileStyles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FACC15",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: "#94A3B8",
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 16,
    width: "30%",
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#94A3B8",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FACC15",
    marginTop: 8,
  },
  settingsSection: {
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  settingText: {
    fontSize: 16,
    color: "#F1F5F9",
  },
  iconButton: {
    padding: 8,
  },
});

export const LoginStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 24,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1E293B",
    color: "#E2E8F0",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#FACC15",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#1E293B",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export const CompleteProfileStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1E293B",
    color: "#F1F5F9",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
    fontSize: 16,
  },
});