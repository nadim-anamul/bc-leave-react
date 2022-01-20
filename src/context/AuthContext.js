//== Import libraries
import { createContext, useContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

//== Create context
export const AuthContext = createContext();

//== Global user useContext values
export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    //== All changeable states
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [currentUser, setCurrentUser] = useState('');

    //== Change path hook from react-router-dom
    const navigate = useNavigate();

    //== Get values from local storage
    const getUser = localStorage.getItem('__user__');
    const getToken = localStorage.getItem('__token__');

    //== Token validation check with jwt-decode module
    const isTokenExpired = (token) => {
        try {
            const decodedToken = decode(token);
            if (Date.now() >= decodedToken?.exp * 1000 - 60000) {
                logOut();
            }
        } catch (error) {
            return false;
        }
    };

    //== set value if logged and user have and initial render
    useEffect(() => {
        const tokenValidate = !!getToken && !isTokenExpired(getToken);
        setIsLoggedIn(tokenValidate);

        if (!!getUser) {
            setCurrentUser(JSON.parse(getUser));
        } else {
            setCurrentUser('');
        }

        setLoading(false);
        //eslint-disable-next-line
    }, [getToken, getUser]);

    //== Logout functionality
    const logOut = () => {
        localStorage.clear();
        navigate('/');
        // window.location.reload();
    };

    //== Context provider values
    const values = {
        isLoggedIn,
        currentUser,
        setLoading,
        loading,
        logOut,
    };

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
