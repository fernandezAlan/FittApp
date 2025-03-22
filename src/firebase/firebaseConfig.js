// src/auth/firebaseConfig.js
import { initializeApp,getApps, getApp} from 'firebase/app';
import { getAuth,getReactNativePersistence,initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId:process.env.EXPO_PUBLIC_MEASUREMENT_ID
};

// ✅ Solo inicializa si no fue inicializado antes
export const app = getApps().length === 0 ? initializeApp(firebaseConfig,{}) : getApp();
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})//getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);  
