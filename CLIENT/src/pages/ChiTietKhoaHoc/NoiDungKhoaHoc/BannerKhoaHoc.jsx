import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

function BannerKhoaHoc(props) {
    return (
        <div className="wrapper__banner">
            <span className="banner__bubble--red"></span>
            <div className="banner__content">
                <h5>Bắt đầu sự nghiệp lập trình từ ZERO tại CyberSoft</h5>
                <h3>100% Thực Hành, Học Thật, Dự Án Thật, Việc Làm Thật</h3>
                <div className="content__button">
                    <Link smooth to="#hoc-phi-ghi-danh" className="button--gradient">
                        ĐĂNG KÝ ƯU ĐÃI
                    </Link>
                    <NavLink to="/lien_he" className="button--border-gradient">
                        INBOX TƯ VẤN
                    </NavLink>
                </div>
            </div>
            <span className="banner__bubble--blue"></span>
        </div>
    );
}

export default BannerKhoaHoc;