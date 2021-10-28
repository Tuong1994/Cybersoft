import React from 'react';
import { useState } from 'react';
import VideoPopup from '../../../components/Popup/VideoPopup';

function VideoOne(props) {
    const [studentVideoOne, setStudentVideoOne] = useState(false);
    const linkVideoOne = "../videos/review-1.mp4"; 

    return (
        <div className="video__one">
            <img className="img" src="../img/student/student-2.png" alt="student" />
            <span className="play-button" onClick={() => {
                setStudentVideoOne(true);
            }}>
                <i className="fa fa-play"></i>
            </span>

            <VideoPopup trigger={studentVideoOne} setTrigger={setStudentVideoOne} link={linkVideoOne} />
        </div>
    );
}

export default VideoOne;