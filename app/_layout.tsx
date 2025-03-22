import { Stack, Slot } from "expo-router";
import { AuthProvider } from "@/src/context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          animationDuration: 2,
          //animation: "slide_from_right", // 👈 transición suave
          headerShown: false, // ocultar header si no lo usás
        }}
      >
        <Slot />
      </Stack>
    </AuthProvider>
  );
}
