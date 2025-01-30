import {useState } from "react"
import { useAuth } from "../context/AuthContext";

const Login=()=>{
    const{login}=useAuth();
       const {username,setUsename}=useState("");
     const {password,setPassword}=useState("");
     
     const handelSubmit=(e)=>{
        e.preventDefault();
        login(username,password)
     };
     return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
                <input
                type="text"
                placeholder={username}
                onChange={(e)=> setUsename(e. target.value)}
                  required
                />
                <input
                type="password"
                placeholder={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
        </div>
     );
};

export default Login;