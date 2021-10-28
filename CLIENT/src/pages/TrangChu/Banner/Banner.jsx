import React from 'react';

function Banner(props) {
    return (
        <div className="banner">
            <h3 className="banner__title">Cybersoft - Đào tạo lập trình theo lộ trình dự án</h3>
            <div className="banner__content">
                <div className="banner__img">
                    <img className="img" src="../img/map.png" alt="map" />
                </div>
                <div className="banner__info">
                    <div className="info__group">
                        <p className="group__title">7</p>
                        <p className="group__content">Trung tâm</p>
                    </div>
                    <div className="info__group">
                        <p className="group__title">5170</p>
                        <p className="group__content">Học viên</p>
                    </div>
                    <div className="info__group">
                        <p className="group__title">65</p>
                        <p className="group__content">Đối tác</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;