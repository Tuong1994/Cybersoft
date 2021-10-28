import React from 'react';
import { useState } from 'react';
import HeaderDetail from './HeaderDetail';
import NavBar from './NavBar';
import RwdNavBar from '../Responsive/Header/RwdNavBar/RwdNavBar';
import RwdNavBarList from '../Responsive/Header/RwdNavBar/RwdNavBarList';

function Header(props) {
    const [showNavBar, setShowNavBar] = useState(false);
    return (
        <header className="header">
            <HeaderDetail />
            <NavBar />
            <RwdNavBar setShowNavBar={setShowNavBar} />
            <RwdNavBarList showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
        </header>
    );
}

export default Header;