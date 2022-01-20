import React from 'react';
import {Navigate } from "react-router-dom";

const Failure = () => {
    sessionStorage.setItem("failed", "Sorry, Invalid email");
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return <Navigate to={'/'}></Navigate>
};

export default Failure;