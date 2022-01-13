import React from 'react';
import logo from '../resources/braincraft-logo.png';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <header id="header">
            <nav className='navbar'>
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <a href="/" className="logo">
                    <img src={logo} alt="Brain Craft LTD. logo" />
                </a>
                <ul class="main-nav" id="js-menu">
                    <li>
                        <a href="/" className="nav-links">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">
                            Team Management
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">
                            Employee Management
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">
                            Leave
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links">
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
