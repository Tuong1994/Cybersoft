import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhMucKhoaHocBackEndAction, layKhoaHocTheoDanhMucBackEndAction } from '../../redux/actions/KhoaHocAction';

function DanhSachKhoaHoc(props) {
    const { danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhMucKhoaHocBackEndAction());
    }, [])

    let renderList = () => {
        return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
            return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="list" key={index} onClick={() => {
                dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
            }}>
                <div className="list__link">{danhMuc.tenDanhMuc}</div>
            </NavLink>
        })
    }

    return (
        <div className="link__sublist-1">
            <ul className="sublist__wrapper">
                <NavLink to="/tat_ca_khoa_hoc" className="list">
                    <div className="list__link">Tất cả</div>
                </NavLink>
                {renderList()}
            </ul>
        </div>
    );
}

export default DanhSachKhoaHoc;