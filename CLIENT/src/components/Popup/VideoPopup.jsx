import React, { useRef } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import useOverFlow from '../../hooks/useOverFlow';

function VideoPopup(props) {
    const videoRef = useRef(null);
    useClickOutSide(videoRef, props.setTrigger)
    useOverFlow(props.trigger);
    return (props.trigger) ? (
        <div className={props.trigger ? "video-popup video-popup--active" : "video-popup"}>
            <div className="video-popup__inner">
                <div className="inner__button">
                    <span className="button--close" onClick={() => {
                        props.setTrigger(false)
                    }}>
                        <i className="fa fa-times"></i>
                    </span>
                </div>
                <iframe src={props.link} className="inner__content" ref={videoRef} title="video"></iframe>
            </div>
        </div>
    ) : null;
}

export default VideoPopup;

