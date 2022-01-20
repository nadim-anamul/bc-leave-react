import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../resources/braincraft-logo.png';

const Nav = () => {
    const { isLoggedIn, currentUser, logOut } = useAuth();

    console.log('currentUser', currentUser.userRole);
    return (
        <header id="header">
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <a href="/" className="logo">
                    <img src={logo} alt="Brain Craft LTD. logo" />
                </a>

                {isLoggedIn && (
                    <ul className="main-nav" id="js-menu">
                        <li>
                            <Link to="/dashboard" className="nav-links">
                                Home
                            </Link>
                        </li>

                        {currentUser?.userRole === 'admin' && (
                            <>
                                <li>
                                    <Link
                                        to="/team-management"
                                        className="nav-links"
                                    >
                                        Team Management
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/employee-management"
                                        className="nav-links"
                                    >
                                        Employee Management
                                    </Link>
                                </li>
                            </>
                        )}

                        {(currentUser?.userRole === 'admin' ||
                            currentUser?.userRole === 'supervisor') && (
                            <li>
                                <Link
                                    to="/leave-management"
                                    className="nav-links"
                                >
                                    Leave Management
                                </Link>
                            </li>
                        )}

                        <li>
                            <Link to="/profile" className="nav-links">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button className="nav-links" onClick={logOut}>
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Nav;
