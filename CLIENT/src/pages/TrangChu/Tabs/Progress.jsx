import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import VideoPopup from '../../../components/Popup/VideoPopup';

function Progress(props) {
    const [studentVideo, setStudentVideo] = useState(false);
    const linkStudent = "../videos/review-2.mp4";
    
    return (
        <div className="content__progress">
            <div className="progress__content">
                <div className="content__info">
                    <p className="info__text">Bạn có thể dành nhiều tháng thậm chí cả năm để cố gắng tự học những thứ này và không có định hướng hoặc bạn có thể đến đây và lấy nó ngay.</p>
                </div>
                <div className="content__author">
                    <div className="author">
                        <img className="author__img" src="../img/ceo.jpg" alt="le-quang-song" />
                        <span className="author__info author__name">Lê Quang Song</span>
                        <span className="author__info">CEO CyberSoft</span>
                    </div>
                    <div className="author__thought">
                        <p className="thought">15 năm kinh nghiệm Code, Quản lý, Đào tạo & Khởi nghiệp</p>
                    </div>
                </div>
                <div className="content__button">
                    <NavLink to="/lo_trinh_hoc" className="button--gradient">
                        LỘ TRÌNH HỌC
                    </NavLink>
                </div>
            </div>

            <div className="progress__img">
                <img className="img__student" src="../img/student/student-7.png" alt="student" />
                <span className="img__play-button" onClick={() => {
                    setStudentVideo(true)
                }}>
                    <i className="fa fa-play"></i>
                </span>
            </div>

            <VideoPopup trigger={studentVideo} setTrigger={setStudentVideo} link={linkStudent} />
        </div>
    );
}

export default Progress;
