import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';

const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    return !isLoggedIn ? (<Route path={'/login'} element={<Login/> }/>) : (<Navigate to={'/'}/>);
};

export default PublicRoute;