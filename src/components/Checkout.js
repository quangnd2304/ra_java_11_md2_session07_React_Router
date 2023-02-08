import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default function Checkout() {
    const isLogin = true;
    return isLogin ? <Home /> : <Navigate to={'/login'} />
}
