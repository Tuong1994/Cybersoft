import React from 'react';
import CacLoTrinh from './CacLoTrinh';
import CacKhoaHoc from './CacKhoaHoc';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layDanhMucKhoaHocBackEndAction } from '../../../../redux/actions/KhoaHocAction';

function DanhMucKhoaHoc(props) {
    const { danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhMucKhoaHocBackEndAction());
    }, [])
    return (
        <div className="course__list">
            <CacLoTrinh danhMucKhoaHocBackEnd={danhMucKhoaHocBackEnd} />
            <CacKhoaHoc danhMucKhoaHocBackEnd={danhMucKhoaHocBackEnd} />
        </div>
    );
}

export default DanhMucKhoaHoc;