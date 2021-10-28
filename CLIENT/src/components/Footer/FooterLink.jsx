import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTheoDanhMucBackEndAction } from '../../redux/actions/KhoaHocAction';

function FooterLink({ danhMucKhoaHoc }) {
    const dispatch =  useDispatch();
    let renderLink = () => {
        return danhMucKhoaHoc?.map((danhMuc, index) => {
            return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="link link__title" key={index} onClick={() => {
                dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                window.scrollTo(0,0);
            }}>
                {danhMuc.tenDanhMuc}
            </NavLink>
        })
    }
    return (
        <div className="footer__link">
            <div className="link__info">
                <p className="info">&copy; Bản quyền CyberSoft 2017 - 2021 - Empower by
                    <NavLink to="/" className="link link__web">
                        CyberSoft
                    </NavLink>
                </p>
            </div>

            <div className="link__list">
                {renderLink()}
            </div>

            <div className="link__social">
                <p>GET SOCIAL</p>
                <div className="social__icon">
                    <a href="https://www.facebook.com/lophocviet/" target="_blank" className="link icon" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCWc3ASTJcb0FeO2oFfX8IDQ" target="_blank" className="link icon" rel="noreferrer">
                        <i className="fa fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterLink;