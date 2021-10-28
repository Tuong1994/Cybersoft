import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImagePopup from '../../../components/Popup/ImagePopup';

function BangCapViecLam(props) {
    const [imgSlider, setImgSlider] = useState(false);
    const { danhSachHinhAnhBangCap } = useSelector(state => state.ImageReducer);
    return (
        <div className="wrapper__certificate" id="bang-cap-viec-lam">
            <ImagePopup trigger={imgSlider} setTrigger={setImgSlider} ImgList={danhSachHinhAnhBangCap} />
            <h1 className="certificate__title">
                <i class="fa fa-graduation-cap"></i>
                <span>BẰNG CẤP VÀ VIỆC LÀM</span>
            </h1>
            <div className="certificate__content">
                <p>Sau khi hoàn thành các dự án trong khóa học, CyberSoft sẽ cấp chứng nhận cho học viên.</p>
                <div className="content__images">
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/certificate/1.jpg" alt="certificate" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/certificate/2.jpg" alt="certificate" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/certificate/3.jpg" alt="certificate" className="img" />
                    </div>
                </div>
            </div>

            <div className="certificate__content">
                <h3 className="content__text">VỀ VIỆC LÀM SAU KHÓA HỌC</h3>
                <p className="content__text">Hướng dẫn làm CV và Deal lương, hỗ trợ kết nối việc làm với doanh nghiệp sau khi hoàn tất toàn bộ dự án trong khoá học</p>
                <div className="content__images">
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/jobs/1.png" alt="jobs" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/jobs/2.jpg" alt="jobs" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setImgSlider(true);
                    }}>
                        <img src="../img/jobs/3.png" alt="jobs" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BangCapViecLam;