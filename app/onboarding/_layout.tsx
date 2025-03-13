import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animationDuration:2,
        animation: "slide_from_right", // 👈 transición suave
        headerShown: true,            // ocultar header si no lo usás
      }}
    />
  );
}