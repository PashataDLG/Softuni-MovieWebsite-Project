import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import * as authService from '../../services/authService';

export default function Logout() {
    const { token, onLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(token)
            .then(() => {
                onLogout();
                navigate('/');
            })
            .catch((err) => {
                alert(err);
                navigate('/');
            });
    })
};