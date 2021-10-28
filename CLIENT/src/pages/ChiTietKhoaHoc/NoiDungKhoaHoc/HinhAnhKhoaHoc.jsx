import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImagePopup from '../../../components/Popup/ImagePopup';

function HinhAnhKhoaHoc(props) {
    const { danhSachHinhAnhKhoaHoc } = useSelector(state => state.ImageReducer);
    const [imgSlider, setImgSlider] = useState(false);
    return (
        <div className="wrapper__images" id="hinh-anh-lop-hoc">
            <ImagePopup trigger={imgSlider} setTrigger={setImgSlider} ImgList={danhSachHinhAnhKhoaHoc} />
            <h1 className="images__title">
                <i class="fa fa-retweet"></i>
                <span>HÌNH ẢNH KHÓA HỌC</span>
            </h1>
            <p>Các học viên tích cực thảo luận, phân tích, trao đổi với bạn học, với Mentor và Giảng viên trong suốt quá trình học.</p>
            <div className="images__wrapper">
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/1.jpg" alt="class" className="img" />
                </div>
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/2.jpg" alt="class" className="img" />
                </div>
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/3.jpg" alt="class" className="img" />
                </div>
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/4.jpg" alt="class" className="img" />
                </div>
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/5.jpg" alt="class" className="img" />
                </div>
                <div className="wrapper__img" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/class/6.jpg" alt="class" className="img" />
                </div>
            </div>
        </div>
    );
}

export default HinhAnhKhoaHoc;