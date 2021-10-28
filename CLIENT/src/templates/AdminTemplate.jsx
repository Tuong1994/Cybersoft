import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { NavHashLink as Link } from "react-router-hash-link";
import RwdAdminSidebar from "../components/Responsive/AdminTemplate/RwdAdminSidebar";

const AdminTemplate = (props) => {
    const { taiKhoanNguoiDung, thongTinNguoiDung } = useSelector(state => state.HocVienReducer);
    const {thongTinTaiKhoan} = taiKhoanNguoiDung;
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div className="admin">
            <RwdAdminSidebar />
            <div className="admin__sidebar">
                <Link to="/" className="sidebar__img">
                    <img className="img" src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" />
                </Link>

                <span className="sidebar__line"></span>

                <div className="sidebar__link">
                    <Link to="/quan_ly_khoa_hoc" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                        QUẢN LÝ KHÓA HỌC
                    </Link>
                    <Link to="/quan_ly_nguoi_dung" className="link" activeClassName="selected" activeStyle={{ backgroundColor: "#fff", color: "#000" }}>
                        QUẢN LÝ NGƯỜI DÙNG
                    </Link>
                </div>
            </div>

            <div className="admin__content">
                <div className="content__nav">
                    <Link to="/thong_tin_hoc_vien" className="nav__user">
                        <img src={thongTinNguoiDung?.avatar ? thongTinNguoiDung?.avatar : thongTinTaiKhoan?.avatar || "https://i.pravatar.cc/300"} alt="avatar" className="user__avatar" />
                        <div className="user__detail">
                            {thongTinTaiKhoan?.hoTen}
                        </div>
                    </Link>
                </div>
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
};

export default AdminTemplate;