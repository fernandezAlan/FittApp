import { doc, setDoc, getDoc, updateDoc, UpdateData } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { storage, db } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { saveUserDataI, UploadImagePropsI, userDataI } from "../types";

export const handleFirebaseError = (code: string) => {
  let error = "Ocurrió un error al iniciar sesión.";
  switch (code) {
    case "auth/invalid-email":
      error = "El correo electrónico no es válido.";
      break;
    case "auth/user-not-found":
      error = "No se encontró una cuenta con ese correo.";
      break;
    case "auth/invalid-credential":
      error = "La contraseña es incorrecta.";
      break;
    case "auth/too-many-requests":
      error = "Demasiados intentos. Intenta más tarde.";
      break;
  }
  return error;
};

export const pickImage = async () => {
  let image = null;
  // Pedir permisos
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissionResult.granted) {
    alert("Se requieren permisos para acceder a la galería.");
    return;
  }

  // Abrir galería
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true, // Permite recorte
    aspect: [1, 1], // Relación de aspecto (cuadrada)
    quality: 1,
  });

  if (!result.canceled) {
    image = result.assets[0].uri;
  }

  return image;
};

export const uploadImage = async ({
  imageUri,
  userID,
}: UploadImagePropsI): Promise<string | null | undefined> => {
  if (!imageUri) return null;
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const filename = `profile_images/${userID}/profileIMG.jpg`;
    const storageRef = ref(storage, filename);

    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error:any) {
    throw new Error(error)
  }
};

export const saveUserData = async (uid: string, data: saveUserDataI) => {
  try {
    await setDoc(doc(db, "users", uid), data); // Crea o reemplaza el documento
  } catch (error:any) {
    throw new Error(error)
  }
};

export const getUserData = async (uid: string | undefined) => {
  if (uid === undefined) return null;
  try {
    const userDoc = await getDoc(doc(db, "users", uid));

    if (userDoc.exists()) {
      return userDoc.data(); // Devuelve los datos del usuario
    } else {
      console.log("No se encontró el usuario.");
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo datos del usuario:", error);
    return null;
  }
};

export const updateUserData = async (uid: string, data: saveUserDataI) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, data as UpdateData<saveUserDataI>);
  } catch (error:any) {
    throw new Error(error)
  }
};
