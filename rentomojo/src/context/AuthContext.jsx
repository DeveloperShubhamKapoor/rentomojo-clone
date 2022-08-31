import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const initData = {
        userName:"",
        mobile:"",
        email:""
    };
    const [isAuth,setIsAuth] = useState(false)
    const [data,setData] = useState(initData)
  return <AuthContext.Provider value={{isAuth,data,setData}}>{children}</AuthContext.Provider>;
};
