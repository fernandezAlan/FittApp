
// auth.ts
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Simula una función que verifica si el usuario está autenticado
const checkAuth = async () => {
  const token = await AsyncStorage.getItem("token");
  return !!token;
};

const clear = async () => {
  await AsyncStorage.clear();
};

export const useAuth = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  
  const logOut = async () => {
    setLoading(true);
    await clear();
    setAuthenticated(false);
    setLoading(false);
  };
  
  const verify = async () => {
    const loggedIn = await checkAuth();
    
    if (!loggedIn) {
      router.replace("/login");
    } else {
      setAuthenticated(true);
  }
  
  setLoading(false);
};
useEffect(() => {
  verify();
}, [authenticated]);

return { isLoading, authenticated, logOut };
};

