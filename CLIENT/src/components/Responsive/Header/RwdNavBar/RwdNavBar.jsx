import React from 'react';
import { NavLink } from 'react-router-dom';

function RwdNavBar({ setShowNavBar }) {
    return (
        <div className="rwd-header__navbar">
            <div className="navbar__inner">
                <i className="fa fa-bars" onClick={() => {
                    setShowNavBar(true);
                }}></i>
                <NavLink to="/">
                    <img className="inner__logo" src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" />
                </NavLink>
            </div>
        </div>
    );
}

export default RwdNavBar;