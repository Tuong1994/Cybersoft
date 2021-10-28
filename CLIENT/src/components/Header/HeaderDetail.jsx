import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTimKiemBackEndAction } from '../../redux/actions/KhoaHocAction';
import useClickOutSide from '../../hooks/useClickOutSide';
import RwdHeaderDetail from '../Responsive/Header/RwdHeaderDetail/RwdHeaderDetail';
import useScroll from '../../hooks/useScroll';

function HeaderDetail(props) {
    const [searchInput, setSearchInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [height, setHeight] = useState(false);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    useScroll(setHeight)
    useClickOutSide(searchRef, setSearchInput);
    return (
        <div className={height ? "header__detail header__detail--height" : "header__detail"}>
            <div className="detail__social">
                <div className="social__logo">
                    <a href="https://www.facebook.com/lophocviet/" target="_blank" className="logo__link" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className="social__logo">
                    <a href="https://www.youtube.com/c/CyberSoftAcademy" target="_blank" className="logo__link" rel="noreferrer"><i className="fa fa-play"></i></a>
                </div>
            </div>

            <div className="detail__info">
                <div className="info__logo">
                    <img className="logo__img" src="../img/logo/cybersoft_logo.png" alt="cybersoft" />
                </div>

                <div className="info__content">
                    <div className="content__link">
                        <NavLink className="link" to="/"><i className="fa fa-home"></i></NavLink>
                    </div>
                    <div className="content__link">
                        <a className="link" href="https://cybersoft.edu.vn/blog/" target="_blank" rel="noreferrer">BÀI VIẾT</a>
                    </div>
                    <div className="content__link">
                        <a className="link" href="https://cyberlearn.vn/" target="_blank" rel="noreferrer">HỌC ONLINE CYBERLEARN.VN</a>
                    </div>
                    <div className="content__link">
                        <NavLink className="link" to="/lien_he"><i className="fa fa-envelope"></i></NavLink>
                    </div>
                    <div className="content__phone">
                        <a className="phone__link" href="tel:0961051014">
                            <i className="fa fa-phone"></i>
                            <span>Hotline: 0961.05.10.14</span>
                        </a>
                    </div>

                    <div className="content__search" ref={searchRef}>
                        <i className={searchInput ? "fa fa-times" : "fa fa-search"} onClick={() => {
                            setSearchInput(!searchInput);
                        }}></i>
                        <div className={searchInput ? "search__input show-input" : "search__input"} ref={searchRef}>
                            <input className="input" type="text" placeholder="tìm kiếm..." onChange={handleChange} value={searchValue} />
                            <NavLink to="/tim_kiem" className={searchValue === "" ? "search__icon search__icon--disabled" : "search__icon"} onClick={() => {
                                setSearchValue("");
                                setSearchInput(false);
                                dispatch(layKhoaHocTimKiemBackEndAction(searchValue));
                            }}>
                                <i className="fa fa-search"></i>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>

            <RwdHeaderDetail />
        </div>
    );
}

export default HeaderDetail;