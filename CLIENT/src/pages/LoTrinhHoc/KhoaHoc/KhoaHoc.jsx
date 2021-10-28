import React from 'react';
import GioiThieuLoTrinh from './GioiThieuLoTrinh/GioiThieuLoTrinh';
import DanhMucKhoaHoc from './DanhMucKhoaHoc/DanhMucKhoaHoc';

function KhoaHoc(props) {
    return (
        <div className="route__course">
            <GioiThieuLoTrinh />
            <DanhMucKhoaHoc />
        </div>
    );
}

export default KhoaHoc;