import React from 'react';

function HinhAnh({ setImgSlider }) {
    return (
        <div className="images">
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/1.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/2.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/3.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/4.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/5.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/6.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/7.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/8.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/9.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/10.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/11.jpg" alt="review" />
            </div>
            <div className="images__wrapper" onClick={() => {
                setImgSlider(true);
            }}>
                <img className="img" src="../img/reviews/12.jpg" alt="review" />
            </div>
        </div>
    );
}

export default HinhAnh;