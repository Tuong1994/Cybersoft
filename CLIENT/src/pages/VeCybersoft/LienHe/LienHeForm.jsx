import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { phoneRegExp } from '../../../config/setting';
import * as yup from "yup";

function LienHeForm(props) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const initialValues = {
        hoTen: "",
        email: "",
        soDt: "",
        tinNhan: "",
    };
    const validationSchema = yup.object().shape({
        hoTen: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .max(30, "Dài nhất 30 ký tự")
            .required("Vui lòng không để trống"),
        email: yup.string()
            .email("Không hợp lệ")
            .min(2, "Ít nhất 2 ký tự")
            .max(25, "Dài nhất 25 ký tự")
            .required("Vui lòng không để trống"),
        soDt: yup.string()
            .matches(phoneRegExp, "Không hợp lệ")
            .min(2, "Ít nhất 2 ký tự")
            .max(10, "Nhiều nhất 10 ký tự")
            .required("Vui lòng không để trống"),
        tinNhan: yup.string()
            .max(500, "Nhiều nhất 500 ký tự"),
    });
    const handleSubmit = (values, actions) => {
        setLoading(true);
        setTimeout(() => {
            dispatch({
                type: "THONG_TIN_LIEN_HE",
                thongTinLienHe: values
            });
            dispatch({
                type: "OPEN_ALERT_CONTACT"
            })
            setLoading(false);
            actions.resetForm({
                values: {
                    hoTen: "",
                    email: "",
                    soDt: "",
                    tinNhan: "",
                }
            })
        }, 1000)
    }
    return (
        <div className="advisory__form">
            <div className="form__info">
                <div className="info__title">
                    <h2>VĂN PHÒNG</h2>
                    <span className="title__line"></span>
                </div>
                <div className="info__content">
                    <p>LIÊN HỆ</p>
                    <ul className="content__list">
                        <li className="list">
                            Cơ sở 1 - Trụ sở chính: 112 Cao Thắng, Quận 3, TPHCM
                        </li>
                        <li className="list">
                            Cơ sở 2: Lầu 2 - 459 Sư Vạn Hạnh, Quận 10, TPHCM (Ngay ĐH Y Dược Phạm Ngọc Thạch
                        </li>
                        <li className="list">
                            Cơ sở 3: 82 Ung Văn Khiêm, Bình Thạnh, TPHCM (Cuối đường D2, gần ĐH HuTech)
                        </li>
                        <li className="list">
                            Cơ sở 4: 110 Đường số 10 nội bộ khu CityLand Phan Văn Trị - Gò Vấp, TPHCM
                        </li>
                        <li className="list">
                            Cơ sở 5: 56 Lê Cảnh Tuân, Tân Phú, TPHCM
                        </li>
                        <li className="list">
                            Cơ sở 6: 6C Đường số 8, Linh Tây, Thủ Đức, TPCHM (gần ĐH Cảnh Sát)
                        </li>
                        <li className="list">
                            Cơ sở 7: 103 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng
                        </li>
                    </ul>
                    <p>Tel: (+84) 961.05.10.14</p>
                    <p>Email: info@cybersoft.edu.vn</p>
                    <p>Hotline: 0961.05.10.14</p>
                </div>
            </div>

            <div className="form__wrapper">
                <div className="form__title">
                    <h2 className="title">
                        ĐĂNG KÝ TƯ VẤN
                    </h2>
                    <span className="title__line"></span>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formikProps => {
                        const { isValid, touched, errors, isSubmitting } = formikProps;
                        return <Form className="form">
                            <div className="form__group">
                                <div className="group__content">
                                    <Field name="hoTen" type="text" className="group__input" placeholder="Họ và tên *" />
                                    <span className="group__icon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                                {touched.hoTen && errors.hoTen ?
                                <span className="group__error">{errors.hoTen}</span> : null}
                            </div>
                            <div className="form__group">
                                <div className="group__content">
                                    <Field name="email" type="text" className="group__input" placeholder="Email liên hệ *" />
                                    <span className="group__icon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                                {touched.email && errors.email ?
                                <span className="group__error">{errors.email}</span> : null}
                            </div>
                            <div className="form__group">
                                <div className="group__content">
                                    <Field name="soDt" type="text" className="group__input" placeholder="Điện thoại liên hệ *" />
                                    <span className="group__icon">
                                        <i class="fa fa-phone"></i>
                                    </span>
                                </div>
                                {touched.soDt && errors.soDt ?
                                <span className="group__error">{errors.soDt}</span> : null}
                            </div>
                            <div className="form__group">
                                <div className="group__content">
                                    <Field as="textarea" name="tinNhan" cols="15" rows="10" className="group__input textarea" placeholder="Bạn cần tư vấn thêm chương trình này, vui lòng để lại tin nhắn tại đây...">
                                    </Field>
                                </div>
                                {touched.tinNhan && errors.tinNhan ?
                                <span className="group__error">{errors.tinNhan}</span> : null}
                            </div>
                            <div className="form__button">
                                {!isValid ?
                                    <button type="button" className="button--red-disabled" disabled={true}>
                                        ĐĂNG KÝ TƯ VẤN
                                    </button>
                                    :
                                    <button type="submit" className={loading ? "button--red button--red-loading" : "button--red"} disabled={!isValid || isSubmitting}>
                                        {loading ? <i className="fa fa-spinner"></i> : null}
                                        <span>ĐĂNG KÝ TƯ VẤN</span>
                                    </button>
                                }
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default LienHeForm;