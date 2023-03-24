import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthProvider({
    children,
}) {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalog')
        } catch (err) {
            console.log('There is a problem');
        }
    };

    const contextValues = {
        onLoginSubmit,
        userId: auth._id
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};