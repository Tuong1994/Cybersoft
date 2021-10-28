import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { useDispatch } from 'react-redux';
import { DangNhapBackEndAction } from '../../redux/actions/HocVienAction';
import * as yup from 'yup';
import ButtonLoading from '../Loading/ButtonLoading';
import InputField from '../Fields/Input/InputField';
import PasswordField from '../Fields/Password/PasswordField';

function LoginComponent({ login, setLogin }) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    const initialValues = {
        taiKhoan: "",
        matKhau: ""
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
        <div className={login ? "inbox__login inbox__active--height" : "inbox__login"}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {formikProps => {
                    const { isValid, isSubmitting } = formikProps
                    return <Form className="login__form" autoComplete="off">
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
                                <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} disabled={!isValid || isSubmitting} onClick={() => {
                                    setTimeout(() => {
                                        setLogin(false);
                                    }, 1000)
                                }}>
                                    <ButtonLoading />
                                    <span>ĐĂNG NHẬP</span>
                                </button>
                            }

                            <p className="button__text">
                                <span>Bạn chưa có tài khoản ? </span>
                                <NavLink to="/sign_up" className="text__link" onClick={() => {
                                    setLogin(false);
                                }}>
                                    Đăng ký
                                </NavLink>
                            </p>
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
    );
}

export default LoginComponent;