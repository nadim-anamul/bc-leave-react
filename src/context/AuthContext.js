import { createContext, useState, useContext } from 'react';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const tokenValue = localStorage.getItem('__token__');
    const getUser = localStorage.getItem('__user__');


    console.log('token auth', tokenValue)
    console.log('user', getUser)


    const logOut = () => {
        localStorage.clear();
        navigate('/')
        window.location.reload();
    };

    const values = {
        name: 'ovi'
    };

    return (
        <AuthContext.Provider value={{getUser, tokenValue,values}}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;


export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used inAuth provider Components');
    }
    return context;
};
