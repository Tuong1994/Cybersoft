import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoPopup from '../../../../components/Popup/VideoPopup';

function LoiMoDau(props) {
    const [introVideo, setIntroVideo] = useState(false);
    const [translateX, setTranslateX] = useState(false);
    const linkIntro = "../videos/cybersoft.mp4"
    useEffect(() => {
        setTranslateX(true);
    }, [])

    return (
        <div className="introduce__prologue">
            <div className={translateX ? "prologue__wrapper prologue__wrapper--translateX" : "prologue__wrapper"}>
                <div className="prologue__content">
                    <div className="content__title">
                        <h2>CYBERSOFT - ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH</h2>
                    </div>
                    <div className="content__info">
                        <p>Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.</p>
                    </div>
                    <div className="content__button">
                        <NavLink to="/lo_trinh_hoc" className="button--gradient">
                            LỘ TRÌNH HỌC
                        </NavLink>
                        <NavLink to="/tat_ca_khoa_hoc" className="button--gradient">
                            DANH SÁCH KHÓA HỌC
                        </NavLink>
                    </div>
                </div>
                <div className="prologue__img">
                    <img className="img__class" src="../img/class/class-4.png" alt="class" />
                    <span className="img__play-button" onClick={() => {
                        setIntroVideo(true);
                    }}>
                        <i className="fa fa-play"></i>
                    </span>
                </div>
            </div>

            <VideoPopup trigger={introVideo} setTrigger={setIntroVideo} link={linkIntro} />
        </div>
    );
}

export default LoiMoDau;