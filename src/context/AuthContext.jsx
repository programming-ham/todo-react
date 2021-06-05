import {createContext, useState, useEffect} from "react";
import {auth} from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({loading: true, user: null});
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user === null) {
        console.log("not loging in")
        setAuthState({loading: false, user: null})
      } else {
        console.log("loging in", user)
        setAuthState({loading: false, user: user})
      }
    });
  }, []);
  

  return <AuthContext.Provider value = {authState}>{children}</AuthContext.Provider>
};