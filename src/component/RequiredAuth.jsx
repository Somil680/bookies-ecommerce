import { Navigate , useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import React from 'react';

function RequiredAuth({children}) {
    const { auth } = useAuth()
    return auth.isAuth ? children :  <Navigate to="/Login" replace />
}
export {RequiredAuth}