import React from 'react';
import CarouselInfo from './CarouselInfo';

function Carousel(props) {
    return (
        <div className="carousel">
            <div className="carousel__background">
                <video poster="../imgs/class-all.jpg" autoPlay={true} loop={true} muted={true} className="background__video">
                    <source  src="../videos/cybersoft.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="carousel__content">
                <CarouselInfo />
            </div>
        </div>
    );
}

export default Carousel;