import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import createJWT from "@/utils/createJWT";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // hooks
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // authentication functionalities
  const createUser= (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = async (name: string, photo: string) => {
    setLoading(true);
    return updateProfile(auth.currentUser as User, {
      displayName: name,
      photoURL: photo
    });
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser && currentUser.email){
        const user={email:currentUser.email}
        createJWT(user)
        .then((res:any)=>{
          setLoading(false);
        })
      }
    });
    return () => unsubscribe();
  }, []);

  // context values
  const authContextValue = {
    user,
    loading,
    createUser,
    profileUpdate,
    signIn,
    googleLogin,
    logOut
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
