import React from 'react';
import DanhMucLoiIch from './DanhMucLoiIch';

function LoiIch(props) {
    return (
        <div className="benefit" id="benefit">
            <div className="benefit__wrapper">
                <div className="wrapper__title">
                    <span className="title__gradient">Điểm ưu việt</span>
                    <p className="title__text">CHỈ CÓ TẠI CYBERSOFT</p>
                </div>
                <div className="wrapper__content">
                    <DanhMucLoiIch />
                </div>
            </div>
        </div>
    );
}

export default LoiIch;