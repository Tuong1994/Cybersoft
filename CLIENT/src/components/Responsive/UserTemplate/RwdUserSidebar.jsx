import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import useClickOutSide from "../../../hooks/useClickOutSide";

function RwdUserSidebar({ thongTinTaiKhoan, thongTinNguoiDung }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    useClickOutSide(menuRef, setShowMenu)
    return (
        <div className="rwd-user-template__sidebar">
            <div className="sidebar" ref={menuRef} >
                <div className="sidebar__button" onClick={() => {
                    setShowMenu(!showMenu)
                }}>
                    <i class="fa fa-bars"></i>
                </div>

                <div className="sidebar__user">
                    {thongTinTaiKhoan?.maLoaiNguoiDung === "GV" ?
                        <Link to="/quan_ly_khoa_hoc" className="button--gradient user__button">
                            <i class="fa fa-user-cog"></i>
                        </Link>
                        : null}
                    <img
                        src={thongTinNguoiDung?.avatar ? thongTinNguoiDung?.avatar : thongTinTaiKhoan?.avatar || "https://i.pravatar.cc/300"}
                        alt="user avatar"
                        className="user__avatar"
                    />
                    <div className="user__name">
                        {thongTinTaiKhoan?.hoTen}
                    </div>
                </div>

                <div className={showMenu ? "sidebar__link sidebar__link--height" : "sidebar__link"} ref={menuRef}>
                    <div className="link__wrapper">
                        <Link to="/thong_tin_hoc_vien" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                            THÔNG TIN HỌC VIÊN
                        </Link>
                        <Link to="/cap_nhat_hoc_vien" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                            CẬP NHẬT THÔNG TIN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RwdUserSidebar;