import React, { useState, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { selectAccount } from "@/api/member";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [auth, setAuth] = useState("");
    const [token, setToken] = useState("");
    const router = useRouter();
 
    const login = async (myForm) => {
        // 清除 localStorage
        localStorage.removeItem("token");
        const result = await selectAccount(myForm);
        if (result.success) {
            localStorage.setItem("token", result.token);
            setToken(result.token);
            setAuth(true);
            return true;
        } else {
            return false;
        }
    }

    const logOut = () => {
        console.log("Ddd")
        setUser(null);
        setToken("");
        setAuth(false);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            setToken(storedToken);
            setAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ token, auth,login, user, logOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
