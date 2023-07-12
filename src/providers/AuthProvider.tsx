import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
 // hooks
 const [user,setUser]=useState(null)
 const[loading,setLoading]=useState(true)

 // authentications functionalities
 const createUser=(email:string,password:string)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
 }

 const profileUpdate=(name:string,photo:string)=>{
     setLoading(true)
     return updateProfile(auth.currentUser,{
         displayName:name,
         photoURL:photo
     })
 }

 const signIn=(email:string,password:string)=>{
     setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
 }

const googleLogin=()=>{
 setLoading(true)
 return signInWithPopup(auth,googleProvider)
}

// const gitLogin=()=>{
//  setLoading(true)
//  return signInWithPopup(auth,gitProvider)
// }


 const logOut=()=>{
     setLoading(true)
     return signOut(auth)
 }

 useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser)
         setLoading(false)  
     })
     return ()=>unsubscribe()
 },[])

 // context values 
  const authContextValue = {
    user,
    loading,
    createUser,
    profileUpdate,
    signIn,
    googleLogin,
    // gitLogin,
    logOut
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
