import React from 'react';
import { NavLink } from 'react-router-dom';

function DinhHuong(props) {
    return (
        <div className="direction">
            <div className="direction__info">
                <p className="info__text">
                    Định hướng và Chuẩn hóa lộ trình từ trái ngành mất gốc lập trình đến Có việc làm
                </p>
                <p className="info__text">
                    Học Thật, Dự Án Thật, Giảng Viên Kinh Nghiệm, Tận Tâm
                </p>
            </div>
            <div className="direction__button">
                <NavLink to="/lo_trinh_hoc" className="button--gradient">
                    DANH SÁCH KHÓA HỌC
                </NavLink>
                <NavLink to="/lien_he" className="button--border-gradient">
                    INBOX TƯ VẤN HỌC TẬP
                </NavLink>
            </div>
            
        </div>
    );
}

export default DinhHuong;