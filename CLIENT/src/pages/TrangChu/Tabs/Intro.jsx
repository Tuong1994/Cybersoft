import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import VideoPopup from '../../../components/Popup/VideoPopup';

function Intro(props) {
    const [introVideo, setIntroVideo] = useState(false);
    const linkIntro = "../videos/cybersoft.mp4"
    
    return (
        <div className="content__intro">
            <div className="intro__content">
                <div className="content__title">
                    <p className="title__text">Chúng tôi tin vào tiềm năng của con người</p>
                </div>
                <div className="content__text">
                    <p className="text">
                        CyberSoft được thành lập dựa trên niềm tin rằng bất cứ ai cũng có thể học lập trình.<br />Bất kể ai cũng có thể là một lập trình viên, tham gia trong đội ngũ Tech, bất kể tuổi tác, nền tảng, giới tính hoặc tình trạng tài chính. Chúng tôi không bỏ qua những người mới bắt đầu hoặc chưa có kinh nghiệm theo đuổi đam mê lập trình. Thay vào đó, chúng tôi chào đón học viên của tất cả các cấp độ kinh nghiệm. Lộ trình học tập của CyberSoft may đo cho từng đối tượng để học xong và đi làm ngay.
                    </p>
                </div>
                <div className="content__button">
                    <NavLink to="/gioi_thieu" className="button--gradient">
                        SỨ MỆNH ĐÀO TẠO
                    </NavLink>
                </div>
            </div>

            <div className="intro__img">
                <img className="img__class" src="../img/class/class-4.png" alt="class" />
                <span className="img__play-button" onClick={() => {
                    setIntroVideo(true);
                }}>
                    <i className="fa fa-play"></i>
                </span>
            </div>

            <VideoPopup trigger={introVideo} setTrigger={setIntroVideo} link={linkIntro} />
            
        </div>
    );
}

export default Intro;