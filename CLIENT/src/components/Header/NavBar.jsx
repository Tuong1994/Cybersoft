import React from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavHashLink as Link } from 'react-router-hash-link';
import { history } from '../../App';
import DanhSachKhoaHoc from './DanhSachKhoaHoc';
import GocHocVien from './GocHocVien';
import VeCybersoft from './VeCybersoft';
import LoginComponent from '../LoginComponent/LoginComponent';
import useClickOutSide from '../../hooks/useClickOutSide';
import ButtonLoading from '../Loading/ButtonLoading';
import useScroll from '../../hooks/useScroll';

function NavBar() {
    const { taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const { thongTinTaiKhoan } = taiKhoanNguoiDung;
    const [scrollY, setScrollY] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(false);
    const dispatch = useDispatch();
    const userRef = useRef();
    useScroll(setScrollY)
    useClickOutSide(userRef, setUser)
    return (
        <div className={scrollY ? "header__navbar header__navbar--sticky" : "header__navbar"}>
            <Link to="/"
                activeClassName="selected"
                activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                className="navbar__link">
                <div className="item__link">
                    TRANG CHỦ
                </div>
            </Link>
            <Link to="/lo_trinh_hoc"
                activeClassName="selected"
                activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                className="navbar__link">
                <div className="item__link">
                    LỘ TRÌNH HỌC
                </div>
            </Link>
            <div className="navbar__link navbar__sublist-1">
                <div className="item__link">
                    <span>DANH MỤC KHÓA HỌC</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <DanhSachKhoaHoc />
            </div>
            <Link to="/cau_chuyen"
                activeClassName="selected"
                activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                className="navbar__link">
                <div className="item__link">
                    STORIES
                </div>
            </Link>
            <div className="navbar__link navbar__sublist-2">
                <div className="item__link">
                    <span>GÓC HỌC VIÊN</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <GocHocVien />
            </div>
            <div className="navbar__link navbar__sublist-3">
                <div className="item__link">
                    <span>VỀ CRYBERSOFT</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <VeCybersoft />
            </div>
            <div className="navbar__inbox">
                <a href="https://www.facebook.com/lophocviet/" target="_blank" className="inbox__link" rel="noreferrer">
                    INBOX TƯ VẤN 1-1
                </a>

                {taiKhoanNguoiDung === "" ?
                    <span className="inbox__link" onClick={() => {
                        setLogin(!login)
                    }}>
                        {login ? "X" : "ĐĂNG NHẬP"}
                    </span>
                    :
                    <div className="inbox__user" ref={userRef}>
                        <Link to="/thong_tin_hoc_vien" className="user__link">
                            {thongTinTaiKhoan?.hoTen}
                        </Link>
                        <i className="fa fa-list-ul" onClick={() => {
                            setUser(!user)
                        }}></i>
                        <div className={user ? "user__logout user__logout--height" : "user__logout"} ref={userRef}>
                            {thongTinTaiKhoan?.maLoaiNguoiDung === "GV" ?
                                <Link className="logout__link" to="/quan_ly_khoa_hoc">
                                    <i className="fa fa-user-cog"></i>
                                    <span>Quản trị</span>
                                </Link>
                                : null
                            }
                            <Link to="/thong_tin_hoc_vien" className="logout__link">
                                <i className="fa fa-user"></i>
                                <span>Tài khoản</span>
                            </Link>
                            <div className={buttonLoading ? "logout__link logout__link-loading" : "logout__link"} onClick={() => {
                                dispatch({
                                    type: "OPEN_BUTTON_LOADING"
                                })
                                setTimeout(() => {
                                    dispatch({
                                        type: "DANG_XUAT",
                                    })
                                    setUser(false);
                                    dispatch({
                                        type: "CLOSE_BUTTON_LOADING"
                                    })
                                    history.push("/")
                                }, 1000)
                            }}>
                                {buttonLoading ?
                                    <ButtonLoading />
                                    :
                                    <i className="fa fa-power-off"></i>
                                }
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                }
                <LoginComponent login={login} setLogin={setLogin} />
            </div>
        </div>
    );
}

export default NavBar;