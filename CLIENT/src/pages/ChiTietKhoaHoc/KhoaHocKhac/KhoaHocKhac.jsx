import React from 'react';
import { NavLink } from 'react-router-dom';

function KhoaHocKhac({ danhMucKhoaHocBackEnd }) {
    let renderCourse = () => {
        return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
            return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="courses__card" key={index}>
                <div className="card__img">
                    <img className="img" src='../img/code.jpg' alt={danhMuc.tendanhMuc} />
                </div>
                <div className="card__content">
                    <p>{danhMuc.tenDanhMuc}</p>
                </div>
                <div className="card__tags">
                    <span>ReactJS</span>
                    <span>Angular</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                </div>
            </NavLink>
        })
    }
    return (
        <div className="another__courses">
            <h3>CÁC DANH MỤC KHÁC</h3>
            <div className="courses">
                {renderCourse()}
            </div>
        </div>
    );
}

export default KhoaHocKhac;