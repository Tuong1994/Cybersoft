import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { DangNhapBackEndAction } from '../../redux/actions/HocVienAction';
import * as yup from "yup";
import ButtonLoading from '../../components/Loading/ButtonLoading';
import Blob from '../../components/Blob/Blob';
import InputField from '../../components/Fields/Input/InputField';
import PasswordField from '../../components/Fields/Password/PasswordField';

function DangNhap(props) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const initialValues = {
        taiKhoan: "",
        matKhau: "",
    };
    const validationSchema = yup.object().shape({
        taiKhoan: yup.string()
            .required("Vui lòng không để trống"),
        matKhau: yup.string()
            .required("Vui lòng không để trống"),
    });
    const handleSubmit = (values, actions) => {
        dispatch(DangNhapBackEndAction(values));
        setTimeout(() => {
            actions.resetForm({
                values: {
                    taiKhoan: "",
                    matKhau: ""
                }
            })
        }, 900)
    }

    return (
        <div className="login">
            <Blob />
            <div className="login__wrapper">
                <div className="wrapper__img">
                    <img src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" className="img" />
                </div>

                <span className="wrapper__line"></span>

                <h3 className="wrapper__title">ĐĂNG NHẬP</h3>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formikProps => {
                        const { isValid, isSubmitting } = formikProps
                        return <Form className="wrapper__form" autoComplete="off">
                            <Field
                                name="taiKhoan"
                                component={InputField}

                                label="Tài khoản"
                                placeholder=" "
                                type="text"
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
                            <div className="form__button">
                                {!isValid ?
                                    <button className="button--disabled" disabled={true}>ĐĂNG NHẬP</button> :
                                    <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} disabled={!isValid || isSubmitting}>
                                        <ButtonLoading />
                                        <span>ĐĂNG NHẬP</span>
                                    </button>
                                }
                                <p className="button__text">
                                    <span>Bạn chưa có tài khoản ? </span>
                                    <NavLink to="/sign_up" className="text__link">
                                        Đăng ký
                                    </NavLink>
                                </p>
                            </div>
                        </Form>
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default DangNhap;