import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

function RwdAdminSidebar(props) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        let handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        }
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    })
    return (
        <div className="rwd-admin-template__sidebar">
            <div className="sidebar" ref={menuRef}>
                <div className="sidebar__button" onClick={() => {
                    setShowMenu(!showMenu)
                }}>
                    <i className="fa fa-bars"></i>
                </div>

                <Link to="/" className="sidebar__img">
                    <img className="img" src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" />
                </Link>

                <div className={showMenu ? "sidebar__link sidebar__link--height" : "sidebar__link"} ref=
                {menuRef}>
                    <Link to="/quan_ly_khoa_hoc" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                        QUẢN LÝ KHÓA HỌC
                    </Link>
                    <Link to="/quan_ly_nguoi_dung" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                        QUẢN LÝ NGƯỜI DÙNG
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RwdAdminSidebar;