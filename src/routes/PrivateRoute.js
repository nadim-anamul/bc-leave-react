import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../components/Home';

const PrivateRoute = () => {
    const { isLoggedIn, currentUser } = useAuth();
    return (
        <>
            {isLoggedIn ? (
                <>
                {/* <Route path={'/'} element={<Home />} /> */}
                    {/* {currentUser?.userRole === 'admin' && (
                        <Route path={''} element={} />
                    )}


                    {currentUser?.userRole === 'supervisor' && (
                        <Route path={''} element={} />
                    )}


                    {currentUser?.userRole === 'employee' && (
                        <Route path={''} element={} />
                    )} */}
                </>
            ) : (<Navigate to={'/login'} />)}
        </>
    );
};

export default PrivateRoute;
