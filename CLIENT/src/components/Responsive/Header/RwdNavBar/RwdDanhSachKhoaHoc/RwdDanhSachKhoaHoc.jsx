import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhMucKhoaHocBackEndAction, layKhoaHocTheoDanhMucBackEndAction } from '../../../../../redux/actions/KhoaHocAction';

function RwdDanhSachKhoaHoc({ listOne, setShowNavBar }) {
    const { danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhMucKhoaHocBackEndAction());
    }, [])

    let renderList = () => {
        return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
            return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="list" key={index} onClick={() => {
                dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                setShowNavBar(false);
            }}>
                <div className="list__link">{danhMuc.tenDanhMuc}</div>
            </NavLink>
        })
    }
    return (
        <div className={listOne ? "link__sublist-1 show-list-1" : "link__sublist-1"} >
            <ul className="sublist__list">
                <NavLink to="/tat_ca_khoa_hoc" className="list">
                    <div className="list__link">Tất cả</div>
                </NavLink>
                {renderList()}
            </ul>
        </div >
    );
}

export default RwdDanhSachKhoaHoc;