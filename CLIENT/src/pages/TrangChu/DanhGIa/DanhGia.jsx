import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HinhAnh from './HinhAnh';
import VideoOne from './VideoOne';
import VideoTwo from './VideoTwo';
import ImagePopup from '../../../components/Popup/ImagePopup';

function DanhGia(props) {
    const { danhSachHinhAnhDanhGia } = useSelector(state => state.ImageReducer);
    const [imgSlider, setImgSlider] = useState(false);
    return (
        <div className="review">
            <ImagePopup trigger={imgSlider} setTrigger={setImgSlider} ImgList={danhSachHinhAnhDanhGia} />
            <div className="review__title">
                <p>HỌC VIÊN ĐÃ NÓI GÌ VỀ CYBERSOFT ACADEMY</p>
            </div>
            <div className="review__video">
                <VideoOne />
                <VideoTwo />
            </div>
            <div className="review__images">
                <HinhAnh setImgSlider={setImgSlider} />
            </div>
            <div className="review__button">
                <NavLink to="/cam_nhan" className="button--gradient">
                    XEM CẢM NHẬN HỌC VIÊN
                </NavLink>
            </div>
        </div>
    );
}

export default DanhGia;