import React from 'react';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { phoneRegExp } from '../../config/setting';
import { DangKyBackEndAction } from '../../redux/actions/HocVienAction';
import { useSelector } from 'react-redux';
import Blob from '../../components/Blob/Blob';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import InputField from '../../components/Fields/Input/InputField';
import PasswordField from '../../components/Fields/Password/PasswordField';

function DangKy(props) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    const initialValues = {
        taiKhoan: "",
        matKhau: "",
        matKhauXacNhan: "",
        hoTen: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "HV",
    };
    const validationSchema = yup.object().shape({
        taiKhoan: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .max(20, "Dài nhất 20 ký tự")
            .required("Vui lòng không để trống"),
        matKhau: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .required("Vui lòng không để trống"),
        matKhauXacNhan: yup.string()
            .oneOf([yup.ref("matKhau")], "Mật khẩu không đúng")
            .required("Vui lòng không để trống"),
        hoTen: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .max(50, "Dài nhất 50 ký tự")
            .required("Vui lòng không để trống"),
        email: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .max(30, "Dài nhất 30 ký tự")
            .email("Không hợp lệ")
            .required("Vui lòng không để trống"),
        soDt: yup.string()
            .min(2, "Ít nhất 2 ký tự")
            .max(15, "Dài nhất 15 ký tự")
            .matches(phoneRegExp, "Không hợp lệ")
            .required("Vui lòng không để trống"),
    });
    const handleSubmit = (values, actions) => {
        dispatch(DangKyBackEndAction(values));
        setTimeout(() => {
            actions.resetForm({
                values: {
                    taiKhoan: "",
                    matKhau: "",
                    matKhauXacNhan: "",
                    hoTen: "",
                    email: "",
                    soDt: "",
                }
            })
        }, 1000)
    }
    return (
        <div className="register">
            <Blob />
            <div className="register__wrapper">
                <div className="wrapper__img">
                    <img src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" className="img" />
                </div>

                <span className="wrapper__line"></span>

                <h3 className="wrapper__title">ĐĂNG KÝ</h3>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formikProps => {
                        const { isValid, isSubmitting } = formikProps;
                        return <Form className="wrapper__form" autoComplete="off" >
                            <Field
                                name="taiKhoan"
                                component={InputField}

                                label="Tài khoản"
                                type="text"
                                placeholder=" "
                                disabled={false}
                                icon="fa fa-user"
                            />
                            <Field
                                name="matKhau"
                                component={PasswordField}

                                label="Mật khẩu"
                                placeholder=" "
                                disabled={false}
                                icon={true}
                            />
                            <Field
                                name="matKhauXacNhan"
                                component={PasswordField}

                                label="Nhập lại mật khẩu"
                                placeholder=" "
                                disabled={false}
                                icon={true}
                            />
                            <span className="form__line"></span>
                            <Field
                                name="hoTen"
                                component={InputField}

                                label="Họ tên"
                                type="text"
                                placeholder=" "
                                disabled={false}
                                icon="fa fa-id-card"
                            />
                            <Field
                                name="email"
                                component={InputField}

                                label="Email"
                                type="text"
                                placeholder=" "
                                disabled={false}
                                icon="fa fa-envelope"
                            />
                            <Field
                                name="soDt"
                                component={InputField}

                                label="Số điện thoại"
                                type="text"
                                placeholder=" "
                                disabled={false}
                                icon="fa fa-phone"
                            />

                            <div className="form__button">
                                {!isValid ?
                                    <button className="button--disabled" disabled={true}>ĐĂNG KÝ</button> :
                                    <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} disabled={!isValid || isSubmitting}>
                                        <ButtonLoading />
                                        <span>ĐĂNG KÝ</span>
                                    </button>
                                }
                                <p className="button__text">
                                    <span>Bạn đã có tài khoản ? Hãy bấm đăng nhập trên menu</span>
                                </p>
                                <p className="button__text">
                                    <span>Bạn đã có tài khoản ? </span>
                                    <NavLink to="/sign_in" className="text__link">
                                        Đăng nhập
                                    </NavLink>
                                </p>
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>
        </div >
    );
}

export default DangKy;