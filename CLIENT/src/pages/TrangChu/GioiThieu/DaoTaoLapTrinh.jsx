import React from 'react';
import { NavLink } from 'react-router-dom';

function DaoTaoLapTrinh(props) {
    return (
        <div className="intro__content">
            <div className="content__inner">
                <div className="inner__detail">
                    <p className="detail__title">
                        <i className="fa fa-graduation-cap"></i>
                        <span>Đào tào nghề lập trình chuyên sâu từ ZERO</span>
                    </p>

                    <p className="detail__info">CyberSoft khai thác nhu cầu tuyển dụng lập trình, kết nối việc làm tới doanh nghiệp và tích hợp các dự án với công nghệ mới nhất vào phương pháp đào tạo tích cực cho các học viên học xong có việc làm ngay. Chương trình giảng dạy được biên soạn may đo dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm. </p>

                    <div className="detail__button">
                        <NavLink to="/lo_trinh_hoc" className="button--gradient">
                            DANH SÁCH KHÓA HỌC
                        </NavLink>
                        <NavLink to="/lien_he" className="button--border-gradient">
                            INBOX TƯ VẤN HỌC TẬP
                        </NavLink>
                    </div>
                </div>

                <div className="inner__img">
                    <img className="img__class" src="../img/class/class-1.jpg" alt="class-1" />
                </div>
            </div>
        </div>
    );
}

export default DaoTaoLapTrinh;