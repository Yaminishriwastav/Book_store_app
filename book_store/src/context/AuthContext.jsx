import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("token") ? true : false);
    const navigate = useNavigate();

    const login = (username, password) => {
        if (username === "admin" && password === "1234") {
            localStorage.setItem("token", "fake-jwt-token");
            setIsAuth(true);
            navigate("/books");
        } else {
            alert("Invalid Credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
