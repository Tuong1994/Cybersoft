import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useOverFlow from "../../hooks/useOverFlow";
import ButtonLoading from '../Loading/ButtonLoading';

function AlertDelete({ handleDispatch, title }) {
    const { alertDelete } = useSelector(state => state.AlertReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch()
    const boxRef = useRef(null);
    useOverFlow(alertDelete)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                dispatch({
                    type: "CLOSE_ALERT_DELETE"
                })
            }
        }
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    })
    return (
        <div className={alertDelete ? "alert-box alert-box--active" : "alert-box"}>
            <div className={alertDelete ? "alert-box__wrapper alert-box__wrapper--active" : "alert-box__wrapper"} ref={boxRef}>
                <div className="wrapper__icon">
                    <i className="fa fa-exclamation-triangle"></i>
                </div>
                <div className="wrapper__title">
                    <p>{title}</p>
                </div>
                <div className="wrapper__button">
                    <div className="button--gradient" onClick={() => {
                        dispatch({
                            type: "CLOSE_ALERT_DELETE"
                        })
                    }}>
                        Quay lại
                    </div>
                    <div className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} onClick={handleDispatch}>
                        <ButtonLoading />
                        <span>Xóa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertDelete;