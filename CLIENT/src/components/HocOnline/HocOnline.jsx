import React from 'react';
import { NavLink } from 'react-router-dom';

function HocOnline(props) {
    return (
        <div className="online">
            <span className="online__bubble--red"></span>

            <div className="online__img">
                <img className="img__bubble" src="../img/bubble.png" alt="online-class" />
            </div>

            <div className="online__info">
                <div className="info__detail">
                    <p className="detail__title">
                        Học Online tại CyberLearn.vn
                    </p>
                    <p className="detail__text">
                        Hơn 92% trên hơn 3000 học viên CyberSoft học theo lộ trình và có việc làm tốt. CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia.
                    </p>
                </div>

                <div className="info__button">
                    <NavLink to="/lo_trinh_hoc" className="button--gradient">
                        DANH SÁCH KHÓA HỌC
                    </NavLink>
                    <NavLink to="/lien_he" className="button--border-gradient">
                        INBOX TƯ VẤN HỌC TẬP
                    </NavLink>
                </div>
            </div>

            <span className="online__bubble--blue"></span>
        </div>
    );
}

export default HocOnline;