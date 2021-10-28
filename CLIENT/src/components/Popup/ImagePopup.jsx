import React, { useRef, useState } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import useOverFlow from '../../hooks/useOverFlow';

function ImagePopup(props) {
    const [imgIndex, setImgIndex] = useState(0);
    const imageRef = useRef(null);
    useClickOutSide(imageRef, props.setTrigger)
    useOverFlow(props.trigger)
    return (props.trigger) ? (
        <div className="image-popup">
            <div className="image-popup__inner">
                <div className="inner__button">
                    <span className="button--close" onClick={() => {
                        props.setTrigger(false)
                    }}>
                        <i className="fa fa-times"></i>
                    </span>
                </div>
                <div className="inner__slider" ref={imageRef}>
                    <div className={imgIndex <= 0 ? "slider__prev slider__button--disabled" : "slider__prev"} onClick={() => {
                        setImgIndex(imgIndex - 1)
                    }}>
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="slider__main">
                        <div className="main__image">
                            <div className={imgIndex <= 0 ? "image__prev image__button--disabled" : "image__prev"} onClick={() => {
                                setImgIndex(imgIndex - 1)
                            }}>
                                <i className="fa fa-angle-left" ></i>
                            </div>
                            <img src={props.ImgList[imgIndex]?.src} alt="reviews" />
                            <div className={imgIndex >= props.ImgList.length - 1 ? "image__next image__button--disabled" : "image__next"} onClick={() => {
                                setImgIndex(imgIndex + 1)
                            }}>
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className={imgIndex >= props.ImgList?.length - 1 ? "slider__next slider__button--disabled" : "slider__next"}>
                        <i className="fa fa-angle-right" onClick={() => {
                            setImgIndex(imgIndex + 1)
                        }}></i>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default ImagePopup;