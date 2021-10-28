import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useOverFlow from '../../../hooks/useOverFlow';

function DangKyThanhCong() {
    const { dangKy } = useSelector(state => state.HocVienReducer);
    const { thongTinNguoiDung, thongTinGhiDanh } = useSelector(state => state.HocVienReducer);
    const dispatch = useDispatch();
    useOverFlow(dangKy)
    let renderAlert = () => {
        return <div className={dangKy ? "alert alert-active" : "alert"}>
            <div className={dangKy ? "alert__wrapper alert__wrapper--active" : "alert__wrapper"}>
                <span className="wrapper__close">
                    <i className="fa fa-times" onClick={() => {
                        dispatch({
                            type: "DANG_KY_THAT_BAI"
                        })
                    }}></i>
                </span>

                <h4 className="wrapper__title">
                    ĐĂNG KÝ THÀNH CÔNG
                </h4>

                <span className="wrapper__line"></span>

                <div className="wrapper__content">
                    <div className="content__user">
                        <div className="user__info">
                            <p>Tài khoản :</p>
                            <p>{thongTinNguoiDung?.taiKhoan}</p>
                        </div>
                        <div className="user__info">
                            <p>Họ tên :</p>
                            <p>{thongTinGhiDanh.hoTen}</p>
                        </div>
                        <div className="user__info">
                            <p>Điện thoại :</p>
                            <p>{thongTinGhiDanh.soDt}</p>
                        </div>
                        <div className="user__info">
                            <p>Email :</p>
                            <p>{thongTinGhiDanh.email}</p>
                        </div>
                    </div>

                    <span className="wrapper__line"></span>

                    <div className="content__course">
                        <div className="course__info">
                            <p>Mã khóa học :</p>
                            <p>{thongTinGhiDanh.maKhoaHoc}</p>
                        </div>
                        <div className="course__info">
                            <p>Tên khóa học :</p>
                            <p>{thongTinGhiDanh.tenKhoaHoc}</p>
                        </div>
                        <div className="course__info">
                            <p>Địa điểm :</p>
                            <p>{thongTinGhiDanh.diaDiem}</p>
                        </div>
                        {thongTinGhiDanh.tinNhan === "" ?
                            null :
                            <div className="course__info">
                                <p>Tin nhắn :</p>
                                <p>{thongTinGhiDanh.tinNhan}</p>
                            </div>}
                    </div>
                </div>

                <div className="wrapper__note">
                    <p>Để xem lại thông tin ghi danh, vui lòng vào thông tin tài khoản!!</p>
                </div>

                <div className="wrapper__button">
                    <NavLink to="/tat_ca_khoa_hoc" className="button--gradient" onClick={() => {
                        dispatch({
                            type: "DANG_KY_THAT_BAI"
                        })
                    }}>Đăng ký khóa học khác
                    </NavLink>
                    <NavLink to="/" className="button--gradient" onClick={() => {
                        dispatch({
                            type: "DANG_KY_THAT_BAI"
                        })
                    }}>
                        Quay lại trang chủ
                    </NavLink>
                </div>
            </div>
        </div>
    }
    return (
        <>
            {renderAlert()}
        </>
    );
}

export default DangKyThanhCong;