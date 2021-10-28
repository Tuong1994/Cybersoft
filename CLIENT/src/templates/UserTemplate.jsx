import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavHashLink as Link } from 'react-router-hash-link';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RwdUserSidebar from '../components/Responsive/UserTemplate/RwdUserSidebar';
import UploadAvatar from '../pages/NguoiDung/UploadAvatar/UploadAvatar';

const UserTemplate = (props) => {
    const { taiKhoanNguoiDung, thongTinNguoiDung } = useSelector(state => state.HocVienReducer);
    const { thongTinTaiKhoan } = taiKhoanNguoiDung;
    const [uploadImg, setUploadImg] = useState(false);
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div>
            <Header />
            <RwdUserSidebar thongTinTaiKhoan={thongTinTaiKhoan} thongTinNguoiDung={thongTinNguoiDung} />
            <div className="user-template">
                <UploadAvatar uploadImg={uploadImg} setUploadImg={setUploadImg} thongTinTaiKhoan={thongTinTaiKhoan} thongTinNguoiDung={thongTinNguoiDung} />
                <div className="user-template__sidebar">
                    <div className="sidebar__user">
                        <div className="user__avatar">
                            <img
                                src={thongTinNguoiDung?.avatar ? thongTinNguoiDung?.avatar : thongTinTaiKhoan?.avatar || "https://i.pravatar.cc/300"}
                                alt="user avatar"
                                className="avatar__img"
                            />
                            <div className="avatar__upload" onClick={() => {
                                setUploadImg(true);
                            }}>
                                <i class="fa fa-camera-retro"></i>
                                <div className="upload__text">Upload hình ảnh</div>
                            </div>
                        </div>
                        <div className="user__name">
                            <p className="name">Hello, {thongTinTaiKhoan?.hoTen}</p>
                            {thongTinTaiKhoan?.maLoaiNguoiDung === "GV" ?
                                <Link to="/quan_ly_khoa_hoc" className="button--gradient">
                                    Tới trang quản trị
                                </Link>
                            : null}
                        </div>
                    </div>

                    <span className="sidebar__line"></span>

                    <div className="sidebar__link">
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

                <div className="user-template__content">
                    <Component {...propsRoute} />
                </div>
            </div>

            <Footer />
        </div>
    }} />
}

export default UserTemplate;