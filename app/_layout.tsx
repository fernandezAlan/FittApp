import { Stack, Slot } from "expo-router";
import { AuthProvider } from "@/src/context/AuthContext";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animationDuration: 2,
        //animation: "slide_from_right", // 👈 transición suave
        headerShown: false, // ocultar header si no lo usás
      }}
    >
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </Stack>
  );
}
