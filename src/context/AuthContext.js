import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState({})

  function signUp(email, password){
    return createUserWithEmailAndPassword (auth, email, password);
  }
  
  function login (email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth)
  }

  useEffect (() => {
    const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ login, logOut, signUp, user }}>
      {children}
    </AuthContext.Provider>
    );
}

export function UserAuth() {
  return useContext(AuthContext);
}
