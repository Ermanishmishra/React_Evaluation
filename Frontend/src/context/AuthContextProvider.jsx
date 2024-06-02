import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
   const [authDetails, setAuthDetails] = useState({
    isAuthenticated : false,
    token : null,
    email : null
   })

   const login = (token,email)=>{
    setAuthDetails({
        isAuthenticated : true,
        token : token,
        email : email
    })
    const logout = (token,email)=>{
        setAuthDetails({
            isAuthenticated:false,
            token:null,
            email:null
    })
}
    return <AuthContext.Provider value={{authDetails, login,logout}}>
        {children}
    </AuthContext.Provider>
}