import React, { useContext, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { User } from 'firebase/auth';
import { getUserData } from '../utils/authUtils';
import { ReactNode } from 'react';
import { authContextI, userDataI } from '../types';
import { useRouter } from 'expo-router';

const AuthContext = createContext<authContextI>({
  user: {auth:null},
  isLoading: true,
  logOut: () => {},
  setUserAuth:(data:User)=>{}
});

export const useAuth = (): authContextI => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};





export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userDataI | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(firebaseUser) => {
      const userData = await getUserData(firebaseUser?.uid)
      console.log("userData:",userData)
      setUser({...userData,auth:firebaseUser});
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser({auth:null})
      router.push("/login")
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const setUserAuth = (data:User)=>{
    setUser((prev)=>{return{...prev,auth:data}})
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, logOut, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};