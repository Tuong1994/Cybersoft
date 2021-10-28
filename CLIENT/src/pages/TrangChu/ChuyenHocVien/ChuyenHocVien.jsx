import React from 'react';
import { NavLink } from 'react-router-dom';

function ChuyenHocVien(props) {
    return (
        <div className="student-stories">
            <div className="student-stories__title">
                <p>Stories - Câu chuyện học viên</p>
            </div>

            <div className="student-stories__images">
                <NavLink to="/cau_chuyen/le_anh_tu" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/LeAnhTu/student-4.jpg" alt="Lê Anh Tú" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">LÊ ANH TÚ</p>
                            <span className="info__link">
                                <i className="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/le_diem_chi" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/LeDiemChi/student-5.jpeg" alt="Lê Diễm Chi" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">LÊ DIỄM CHI</p>
                            <span className="info__link">
                                <i className="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/nguyen_nhat_dang_duy" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/NguyenNhatDangDuy/student-6.png" alt="Nguyễn Nhất Đăng Duy" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">NGUYỄN NHẤT ĐĂNG DUY</p>
                            <span className="info__link">
                                <i className="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className="student-stories__button">
                <NavLink to="/cau_chuyen" className="button--gradient">
                    XEM CÂU CHUYỆN HỌC VIÊN
                </NavLink>
            </div>
        </div>
    );
}

export default ChuyenHocVien;