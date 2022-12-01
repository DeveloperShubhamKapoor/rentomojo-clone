import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const initInfo={
  email:"",
  password:"",
  mobile:"",
  address:""
}

export const AuthContextProvider = ({ children }) => {
    
  const [isAuth,setIsAuth] = useState(false)
  const [userRegister,setUserRegister] = useState({initInfo})
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUserRegister({...userRegister,
      [name]:value
    })
  }
  return <AuthContext.Provider value={{isAuth,handleChange}}>{children}</AuthContext.Provider>;
};
