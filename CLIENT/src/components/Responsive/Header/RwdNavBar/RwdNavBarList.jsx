import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import ButtonLoading from "../../../Loading/ButtonLoading";
import RwdDanhSachKhoaHoc from './RwdDanhSachKhoaHoc/RwdDanhSachKhoaHoc';
import RwdGocHocVien from './RwdGocHocVien/RwdGocHocVien';
import RwdVeCybersoft from './RwdVeCybersoft/RwdVeCybersoft';

function RwdNavBarList({ showNavBar, setShowNavBar }) {
    const { taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const { thongTinTaiKhoan } = taiKhoanNguoiDung;

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [listOne, setListOne] = useState(false);
    const [listTwo, setListTwo] = useState(false);
    const [listThree, setListThree] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className={showNavBar ? "rwd-navbar__list show-navbar__list" : "rwd-navbar__list"}>
            <div className="list__inner">
                <i className="fa fa-times" onClick={() => {
                    setShowNavBar(false);
                }}></i>

                {taiKhoanNguoiDung !== "" ?
                    <div className="inner__user">
                        <div className="user__name">
                            <NavLink to="/thong_tin_hoc_vien" className="name__link">
                                {thongTinTaiKhoan?.hoTen}
                            </NavLink>
                            <div className="name__button" onClick={() => {
                                setShowUserMenu(!showUserMenu)
                            }}>
                                <i className="fa fa-list-ul"></i>
                            </div>
                        </div>
                        <div className={showUserMenu ? "user__info user__info--active" : "user__info"}>
                            {thongTinTaiKhoan?.maLoaiNguoiDung === "GV" ?
                                <NavLink className="info__link" to="/quan_ly_khoa_hoc">
                                    <i className="fa fa-user-cog"></i>
                                    <span>Quản trị</span>
                                </NavLink>
                                : null
                            }
                            <NavLink to="/thong_tin_hoc_vien" className="info__link">
                                <i className="fa fa-user"></i>
                                <span>Tài khoản</span>
                            </NavLink>
                            <span className={buttonLoading ? "info__link info__link-loading" : "info__link"} onClick={() => {
                                dispatch({
                                    type: "OPEN_BUTTON_LOADING"
                                })
                                setTimeout(() => {
                                    dispatch({
                                        type: "DANG_XUAT",
                                    });
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
                            </span>
                        </div>
                        <span className="user__line"></span>
                    </div>
                    : null
                }

                <div className="inner__link">
                    <NavLink to="/" className="link">
                        Trang chủ
                    </NavLink>
                </div>

                <div className="inner__link">
                    <NavLink to="/lo_trinh_hoc" className="link">
                        Lộ trình học
                    </NavLink>
                </div>

                <div className="inner__link">
                    <div className="link" onClick={() => {
                        setListOne(!listOne);
                        setListTwo(false);
                        setListThree(false);
                    }}>
                        <span>Danh mục khóa học</span>
                        <i className={listOne ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                    </div>
                    <RwdDanhSachKhoaHoc listOne={listOne} setShowNavBar={setShowNavBar} />
                </div>

                <div className="inner__link">
                    <NavLink to="/cau_chuyen" className="link">
                        Stories
                    </NavLink>
                </div>

                <div className="inner__link">
                    <div className="link" onClick={() => {
                        setListTwo(!listTwo)
                        setListOne(false);
                        setListThree(false);
                    }}>
                        <span>Góc học viên</span>
                        <i className={listTwo ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                    </div>
                    <RwdGocHocVien listTwo={listTwo} />
                </div>

                <div className="inner__link">
                    <div className="link" onClick={() => {
                        setListThree(!listThree)
                        setListOne(false);
                        setListTwo(false);
                    }}>
                        <span>Về Cybersoft</span>
                        <i className={listThree ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                    </div>
                    <RwdVeCybersoft listThree={listThree} />
                </div>

                <div className="inner__inbox">
                    <a href="https://www.facebook.com/lophocviet/" target="_blank" className="inbox" rel="noreferrer">
                        INBOX TƯ VẤN 1-1
                    </a>
                    {taiKhoanNguoiDung === "" ?
                        <NavLink to="/sign_in" className="inbox" onClick={() => {
                            setShowNavBar(false)
                        }}>
                            ĐĂNG NHẬP
                        </NavLink>
                        :
                        null}
                </div>
            </div>
        </div>
    );
}

export default RwdNavBarList;