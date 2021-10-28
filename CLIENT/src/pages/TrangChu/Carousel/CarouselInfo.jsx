import React from 'react';
import { NavLink } from 'react-router-dom';

function CarouselInfo(props) {
    return (
        <div className="carousel__info">
            <div className="info__item">
                KHỞI ĐẦU
            </div>
            <div className="info__item">
                SỰ NGHIỆP
            </div>
            <div className="info__item">
                CỦA BẠN
            </div>
            <div className="info__content">
                Trở thành lập trình
            </div>
            <div className="info__content">
                chuyên nghiệp tại CyberSoft
            </div>
            <div className="info__button">
                <NavLink to="/lo_trinh_hoc" className="button--gradient">
                    Xem khóa học
                </NavLink>
                <NavLink to="/lien_he"  className="button--border-white">
                    Tư vấn học
                </NavLink>
            </div>
        </div>
    );
}

export default CarouselInfo;