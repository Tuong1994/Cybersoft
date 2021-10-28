import React, { useEffect, useRef } from 'react';
import useOverFlow from "../../hooks/useOverFlow";
import { useDispatch, useSelector } from 'react-redux';

function AlertContact({ thongTin }) {
    const { alertContact } = useSelector(state => state.AlertReducer);
    const dispatch = useDispatch();
    const boxRef = useRef(null);
    useOverFlow(alertContact);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                dispatch({
                    type: "CLOSE_ALERT_CONTACT"
                })
            }
        }
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    })
    return (
        <div className={alertContact ? "alert-contact alert-contact--active" : "alert-contact"}>
            <div className={alertContact ? "alert-contact__wrapper alert-contact__wrapper--active" : "alert-contact__wrapper"} ref={boxRef}>
                <div className="wrapper__logo">
                    <img src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" className="logo__img" />
                </div>
                <ul className="wrapper__note">
                    <li className="note__list">
                        Cảm ơn học viên đã quan tâm tới Cybersoft
                    </li>
                    <li className="note__list">
                        Cybersoft sẽ lưu lại thông tin của học viên
                    </li>
                    <li className="note__list">
                        Cybersoft sẽ liên hệ học viên trong thời gian sớm nhất
                    </li>
                </ul>
                <span className="wrapper__line"></span>
                <div className="wrapper__info">
                    <h6 className="info__title">Thông tin liên hệ</h6>
                    <div className="info__group">
                        <strong className="group__name"><i className="fa fa-user"></i><span>Họ tên : </span></strong>
                        <span className="group__text">{thongTin?.hoTen}</span>
                    </div>
                    <div className="info__group">
                        <strong className="group__name"><i className="fa fa-envelope"></i><span>Email : </span></strong>
                        <span className="group__text">{thongTin?.email}</span>
                    </div>
                    <div className="info__group">
                        <strong className="group__name"><i className="fa fa-phone"></i><span>Điện thoại : </span></strong>
                        <span className="group__text">{thongTin?.soDt}</span>
                    </div>
                    <div className="info__group">
                        <strong className="group__name"><i className="fa fa-sticky-note"></i><span>Tin nhắn : </span></strong>
                        <span className="group__text">{thongTin?.tinNhan}</span>
                    </div>
                </div>
                <div className="wrapper__button">
                    <div className="button--gradient" onClick={() => {
                        dispatch({
                            type: "CLOSE_ALERT_CONTACT"
                        })
                    }}>
                        Quay lại
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertContact;