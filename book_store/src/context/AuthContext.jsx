import { createContext,useState,useContext, Children } from "react";
import {useNavigate} from "react-router-dom";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const navigate=useNavigate();
     
    const login=(userData)=>{
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData));
         navigate("/books")

    };

    const logout=()=>{
       setUser(null);
       localStorage.removeItem('user')
       navigate("/login")
    };
    return(
        <Authcontext.Provider value={{user,login,logout}}>
         {children}
        </Authcontext.Provider>
       
    );
};
export const useAuth=()=>useContext(AuthContext)