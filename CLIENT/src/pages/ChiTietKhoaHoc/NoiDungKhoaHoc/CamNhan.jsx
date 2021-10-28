import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImagePopup from '../../../components/Popup/ImagePopup';

function CamNhan(props) {
    const { danhSachHinhAnhDanhGia } = useSelector(state => state.ImageReducer);
    const [imgSlider, setImgSlider] = useState(false);
    return (
        <div className="wrapper__reviews" id="cam-nhan-hoc-vien">
            <ImagePopup trigger={imgSlider} setTrigger={setImgSlider} ImgList={danhSachHinhAnhDanhGia} />
            <h1 className="reviews__title">
                <i class="fa fa-heart"></i>
                <span>CẢM NHẬN HỌC VIÊN</span>
            </h1>
            <div className="reviews__images">
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/1.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/2.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/3.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/4.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/5.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/6.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/13.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/14.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/15.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/16.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/17.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/18.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/19.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/20.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/21.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/21.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/22.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/23.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/24.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/25.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/26.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/27.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/28.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/29.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/7.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/8.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/9.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/10.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/11.jpg" alt="review" />
                </div>
                <div className="images__wrapper" onClick={() => {
                    setImgSlider(true)
                }}>
                    <img className="img" src="../img/reviews/12.jpg" alt="review" />
                </div>
            </div>
        </div>
    );
}

export default CamNhan;