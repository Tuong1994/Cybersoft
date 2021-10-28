import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImagePopup from '../../components/Popup/ImagePopup';

function CamNhanHocVien(props) {
    const { danhSachHinhAnhDanhGia } = useSelector(state => state.ImageReducer);
    const [showSlide, setShowSlide] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="student-reviews">
            <ImagePopup trigger={showSlide} setTrigger={setShowSlide} ImgList={danhSachHinhAnhDanhGia} />
            <div className="student-reviews__images">
                <div className="images__wrapper" onClick={() => {
                    setShowSlide(true);
                }}>
                    <img className="img" src="../img/reviews/1.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/2.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/3.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/4.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/5.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/6.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/13.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/14.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/15.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/16.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/17.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/18.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/19.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/20.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/21.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/21.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/22.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/23.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/24.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/25.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/26.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/27.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/28.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/29.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/30.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/31.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/32.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/33.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/34.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/35.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/36.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/37.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/38.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/7.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/8.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/9.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/10.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/11.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
                <div className="images__wrapper">
                    <img className="img" src="../img/reviews/12.jpg" alt="review" onClick={() => {
                        setShowSlide(true);
                    }} />
                </div>
            </div>
        </div>
    );
}

export default CamNhanHocVien;