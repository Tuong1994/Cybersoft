import React, { useRef } from 'react';
import useOverFlow from "../../hooks/useOverFlow";
import useClickOutSide from "../../hooks/useClickOutSide";

function FooterAlert({ alertNote, setAlertNote }) {
    const noteRef = useRef(null)
    useOverFlow(alertNote)
    useClickOutSide(noteRef, setAlertNote)
    return (
        <div className={alertNote ? "footer__alert footer__alert--active" : "footer__alert"}>
            <div className={alertNote ? "alert__wrapper alert__wrapper--active" : "alert__wrapper"} ref={noteRef}>
                <h4>Cảm ơn</h4>
                <p>Cybersoft sẽ gửi thông tin sự kiện qua email cho bạn. Bạn nhớ truy cập email để kiểm tra nhé.</p>
                <div className="button--gradient" onClick={() => {
                    setAlertNote(false);
                }}>
                    <i className="fa fa-long-arrow-alt-left"></i>
                </div>
            </div>
        </div>
    );
}

export default FooterAlert;