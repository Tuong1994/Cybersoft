import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTheoDanhMucBackEndAction } from '../../../../redux/actions/KhoaHocAction';

function CacLoTrinh({ danhMucKhoaHocBackEnd }) {
    const dispatch = useDispatch();
    let renderRoutes = (index) => {
        if (index === 1) {
            return danhMucKhoaHocBackEnd?.slice(0, 4).map((danhMuc, index) => {
                return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="item__link" key={index} onClick={() => {
                    dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                    window.scrollTo(0, 0);
                }}>
                    <p className="link__text">{index + 1}</p>
                    <p className="link__text">{danhMuc.tenDanhMuc}</p>
                    <p className="link__text">6.5 tháng</p>
                </NavLink>
            })
        } else if (index === 2) {
            return danhMucKhoaHocBackEnd?.slice(2, 6).map((danhMuc, index) => {
                return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="item__link" key={index} onClick={() => {
                    dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                    window.scrollTo(0, 0);
                }}>
                    <p className="link__text">{index + 1}</p>
                    <p className="link__text">{danhMuc.tenDanhMuc}</p>
                    <p className="link__text">6.5 tháng</p>
                </NavLink>
            })
        }
    }
    return (
        <div className="list__routes">
            <div className="routes__zero">
                <div className="zero__content">
                    <div className="zero__title">
                        <p>LỘ TRÌNH HỌC TỪ ZERO</p>
                    </div>
                    <div className="zero__item">
                        {renderRoutes(1)}
                    </div>
                </div>
                <div className="zero__img">
                    <img className="img" src="../img/class/class-1.jpg" alt="class" />
                    <div className="img__info">
                        <p>Lộ trình trái ngành, mất gốc</p>
                    </div>
                </div>
            </div>
            <div className="routes__basis">
                <div className="basis__content">
                    <div className="basis__title">
                        <p>LỘ TRÌNH HỌC ĐÃ CÓ NỀN TẢNG</p>
                    </div>
                    <div className="basis__item">
                        {renderRoutes(2)}
                    </div>
                </div>
                <div className="basis__img">
                    <img className="img" src="../img/class/class-3.png" alt="class" />
                    <div className="img__info">
                        <p>Lộ trình đã có nền tảng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CacLoTrinh;