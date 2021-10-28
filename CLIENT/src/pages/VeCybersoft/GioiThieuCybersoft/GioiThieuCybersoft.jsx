import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhMucKhoaHocBackEndAction } from '../../../redux/actions/KhoaHocAction';
import LoiMoDau from './LoiMoDau/LoiMoDau';
import NoiDung from './NoiDung/NoiDung';

function GioiThieuCybersoft(props) {
    const { danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(layDanhMucKhoaHocBackEndAction());
    }, [])
    return (
        <div className="introduce">
            <LoiMoDau />
            <NoiDung danhMucKhoaHocBackEnd={danhMucKhoaHocBackEnd} />
        </div>
    );
}

export default GioiThieuCybersoft;