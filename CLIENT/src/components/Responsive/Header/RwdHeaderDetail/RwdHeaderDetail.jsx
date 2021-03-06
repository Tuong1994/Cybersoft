import React from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTimKiemBackEndAction } from '../../../../redux/actions/KhoaHocAction';
import { history } from '../../../../App';
import useClickOutSide from "../../../../hooks/useClickOutSide";
import ButtonLoading from "../../../Loading/ButtonLoading";

function RwdHeaderDetail(props) {
    const { taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const { thongTinTaiKhoan } = taiKhoanNguoiDung

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [searchInput, setSearchInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();
    const userMenuRef = useRef();
    const searchRef = useRef();
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    useClickOutSide(searchRef, setSearchInput);
    useClickOutSide(userMenuRef, setShowUserMenu)

    return (
        <div className="rwd-header__detail">
            <div className="detail">
                <div className="detail__user">
                    {taiKhoanNguoiDung === "" ?
                        null
                        :
                        <div className="user">
                            <NavLink to="/thong_tin_hoc_vien" className="user__link">
                                {thongTinTaiKhoan?.hoTen}
                            </NavLink>
                            <div className="user__button" onClick={() => {
                                setShowUserMenu(!showUserMenu)
                            }} ref={userMenuRef}>
                                <i className="fa fa-list-ul"></i>
                            </div>
                            <div className={showUserMenu ? "user__info user__info--active" : "user__info"} ref={userMenuRef}>
                                {thongTinTaiKhoan?.maLoaiNguoiDung === "GV" ?
                                    <NavLink className="info__link" to="/quan_ly_khoa_hoc">
                                        <i className="fa fa-user-cog"></i>
                                        <span>Qu???n tr???</span>
                                    </NavLink>
                                    : null
                                }
                                <NavLink to="/thong_tin_hoc_vien" className="info__link">
                                    <i className="fa fa-user"></i>
                                    <span>T??i kho???n</span>
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
                                    <span>????ng xu???t</span>
                                </span>
                            </div>
                        </div>
                    }
                </div>

                <div className="detail__item">
                    <i className="fa fa-bars" onClick={() => {
                        setShowDetail(!showDetail)
                    }}></i>
                    <div className={showDetail ? "item show-item" : "item"}>
                        <div className="item__link">
                            <NavLink className="link" to="/"><i className="fa fa-home"></i></NavLink>
                        </div>
                        <div className="item__link">
                            <a className="link" href="https://cybersoft.edu.vn/blog/" target="_blank" rel="noreferrer">B??I VI???T</a>
                        </div>
                        <div className="item__link">
                            <a className="link" href="https://cyberlearn.vn/" target="_blank" rel="noreferrer">H???C ONLINE CYBERLEARN.VN</a>
                        </div>
                        <div className="item__link">
                            <NavLink className="link" to="/lien_he"><i className="fa fa-envelope"></i></NavLink>
                        </div>
                        <div className="item__phone">
                            <a className="phone__link" href="tel:0961051014">
                                <i className="fa fa-phone"></i>
                                <span>Hotline: 0961.05.10.14</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="detail__search" ref={searchRef}>
                    <i className={!searchInput ? "fa fa-search" : "fa fa-times"} onClick={() => {
                        setSearchInput(!searchInput);
                    }}></i>
                    <div className={searchInput ? "search__input show-input" : "search__input"} ref={searchRef}>
                        <div className="input__wrapper">
                            <input className="input" type="text" placeholder="search..." onChange={handleChange} value={searchValue} />
                            <NavLink to="/tim_kiem" className={searchValue === "" ? "wrapper__button wrapper__button--disabled" : "wrapper__button"} onClick={() => {
                                setSearchValue("");
                                setSearchInput(false);
                                dispatch(layKhoaHocTimKiemBackEndAction(searchValue))
                            }}>
                                <i className="fa fa-search"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RwdHeaderDetail;