import React from 'react';
import { useState } from 'react';
import VideoPopup from '../../../components/Popup/VideoPopup';

function VideoTwo(props) {
    const [studentVideoTwo, setStudentVideoTwo] = useState(false);
    const linkVideoTwo = "../videos/review-2.mp4";

    return (
        <div className="video__two">
            <img className="img" src="../img/student/student-7.png" alt="student" />
            <span className="play-button" onClick={() => {
                setStudentVideoTwo(true);
            }}>
                <i className="fa fa-play"></i>
            </span>

            <VideoPopup trigger={studentVideoTwo} setTrigger={setStudentVideoTwo} link={linkVideoTwo} />
        </div>
    );
}

export default VideoTwo;