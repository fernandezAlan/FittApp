// hooks/useGoogleAuth.js
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // tu config de Firebase

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    //expoClientId: "TU_CLIENT_ID_DE_EXPO",
    androidClientId:"108221853210273850692",
    webClientId: "1074214431539-j9v4npbrc268iqajdnp02k914t47tupd.apps.googleusercontent.com", // de Firebase
  });

  useEffect(() => {
    if (response?.type === "success") {
      const id_token = response?.authentication?.idToken;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          console.log("Usuario autenticado con Google");
        })
        .catch((error) => {
          console.error("Error en login con Google", error);
        });
    }
  }, [response]);

  return {
    promptAsync,
    request,
  };
}
