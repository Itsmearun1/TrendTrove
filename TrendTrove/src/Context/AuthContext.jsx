import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
export const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const logout = () => {
    console.log("logout");
    setIsAuth(false);
  };
  if(isAuth){
    return <Navigate to="/" />
  }
  return <AuthContext.Provider value={(isAuth,login,logout,setToken)}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
