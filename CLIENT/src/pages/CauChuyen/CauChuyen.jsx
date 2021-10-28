import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function CauChuyen(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="stories">
            <div className="stories__title">
                <h3 className="title">STORIES</h3>
                <p className="text">Các bạn đến từ nhiều hoàn cảnh khác nhau và đều có những câu chuyện của riêng mình khi bắt đầu học lập trình. Hãy đến CyberSoft để viết riêng những câu chuyện của chính mình các bạn nhé.</p>
            </div>

            <div className="stories__images">
                <NavLink to="/cau_chuyen/le_anh_tu" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/LeAnhTu/student-4.jpg" alt="Lê Anh Tú" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">LÊ ANH TÚ</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
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
                                <i class="fa fa-link"></i>
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
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/trinh_thi_phuong_dung" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/TrinhThiPhuongDung/student-8.png" alt="Trịnh Thị Phương Dung" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">TRỊNH THỊ PHƯƠNG DUNG</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/nguyen_duy_thai" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/NguyenDuyThai/student-9.jpeg" alt="Nguyễn Duy Thái" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">NGUYỄN DUY THÁI</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/vo_thanh_nhon" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/VoThanhNhon/student-10.jpeg" alt="Võ  Thành Nhơn" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">VÕ THÀNH NHƠN</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/nguyen_duc_thai" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/NguyenDucThai/student-11.jpeg" alt="Nguyễn Đức Thái" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">NGUYỄN ĐỨC THÁI</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/le_van_phuong" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/LeVanPhuong/student-12.jpg" alt="Lê Văn Phương" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">LÊ VĂN PHƯƠNG</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/phan_ngoc_tuan_anh" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/PhanNgocTuanAnh/student-13.jpg" alt="Phan Ngọc Tuấn Anh" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">PHAN NGỌC TUẤN ANH</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/le_phuoc_thanh" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/LePhuocThanh/student-14.jpg" alt="Lê Phước Thành" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">LÊ PHƯỚC THÀNH</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/cau_chuyen/tran_phuong_nam" className="images__wrapper">
                    <img className="wrapper__img" src="../img/student/TranPhuongNam/student-15.jpg" alt="Trần Phương Nam" />
                    <div className="wrapper__info">
                        <div className="info">
                            <p className="info__name">TRẦN PHƯƠNG NAM</p>
                            <span className="info__link">
                                <i class="fa fa-link"></i>
                            </span>
                        </div>
                    </div>
                </NavLink>

            </div>
        </div>
    );
}

export default CauChuyen;