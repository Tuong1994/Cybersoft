import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as yup from "yup";
import ButtonLoading from "../Loading/ButtonLoading";
import FooterAlert from './FooterAlert';

function FooterContact(props) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const [alertNote, setAlertNote] = useState(false);
    const dispatch = useDispatch()
    const initialValues = {
        email: "",
    }
    const validationSchema = yup.object().shape({
        email: yup.string()
            .email("Không hợp lệ")
            .required("Vui lòng không để trống"),
    })
    const handleSubmit = (values, actions) => {
        dispatch({
            type: "OPEN_BUTTON_LOADING"
        })
        setTimeout(() => {
            dispatch({
                type: "CLOSE_BUTTON_LOADING"
            });
            setAlertNote(true)
            actions.resetForm({
                values: {
                    email: ""
                }
            })
        }, 1000)
    }
    return (
        <div className="footer__contact">
            <FooterAlert alertNote={alertNote} setAlertNote={setAlertNote} />
            <div className="contact__inner contact__event">
                <div className="event__title">
                    <p className="text">NHẬN TIN SỰ KIỆN VÀ KHUYẾN MÃI</p>
                </div>
                <div className="event__content">
                    <p className="text">CyberSoft sẽ gởi các khóa học trực tuyến và các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formikProps => {
                        const { isValid, touched, errors, isSubmitting } = formikProps;
                        return <Form className="event__form">
                            <div className="form__input">
                                <Field name="email" type="text" placeholder="your.address@email.com" className="input" />
                                {touched.email && errors.email ?
                                    <span className="input__errors">{errors.email}</span>
                                    : null}
                            </div>
                            <div className="form__button">
                                {!isValid ?
                                    <button type="button" className="button--disabled" disabled={true}>
                                        ĐĂNG KÝ ƯU ĐÃI
                                    </button>
                                    :
                                    <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} disabled={!isValid || isSubmitting}>
                                        <ButtonLoading />
                                        <span>ĐĂNG KÝ ƯU ĐÃI</span>
                                    </button>
                                }
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>

            <div className="contact__inner contact__facebook">
                <div className="facebook__info">
                    <img className="info__img" src="../img/member.jpg" alt="member" />
                    <div className="info">
                        <a href="https://www.facebook.com/lophocviet/" target="_blank" className="info__link" rel="noreferrer">
                            <img className="link__img" src="../img/logo/fb_logo.jpg" alt="fb-logo" />
                            <div className="link__content">
                                <p className="content__title">
                                    CyberSoft - Đào Tạo Lập Trình Theo Lộ Trình Dự án
                                </p>
                                <p className="content__text">36.959 lượt thích</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="facebook__video">
                    <video poster="../imgs/class-all.jpg" autoPlay={true} loop={true} muted={true} className="video">
                        <source src="../videos/cybersoft.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default FooterContact;