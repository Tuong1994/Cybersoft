import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { phoneRegExp } from '../../../config/setting';
import { CapNhatThongTinBackEndAction } from '../../../redux/actions/HocVienAction';
import * as yup from 'yup';
import Blob from '../../../components/Blob/Blob';
import ButtonLoading from '../../../components/Loading/ButtonLoading';
import InputField from '../../../components/Fields/Input/InputField';
import PasswordField from '../../../components/Fields/Password/PasswordField';

function CapNhat(props) {
    const { taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const { thongTinTaiKhoan } = taiKhoanNguoiDung;
    const initialValues = {
        maNguoiDung: thongTinTaiKhoan?.maNguoiDung,
        taiKhoan: thongTinTaiKhoan?.taiKhoan,
        matKhau: thongTinTaiKhoan?.matKhau,
        matKhauXacNhan: thongTinTaiKhoan?.matKhau,
        hoTen: thongTinTaiKhoan?.hoTen,
        email: thongTinTaiKhoan?.email,
        soDt: thongTinTaiKhoan?.soDt,
        maLoaiNguoiDung: thongTinTaiKhoan?.maLoaiNguoiDung,
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
    const handleSubmit = (values) => {
        dispatch(CapNhatThongTinBackEndAction(values));
    }
    return (
        <div className="update">
            <Blob />
            <div className="update__wrapper">
                <div className="wrapper__img">
                    <img src="../img/logo/logo-cyber-nav.svg" alt="cybersoft" className="img" />
                </div>

                <span className="wrapper__line"></span>

                <h3 className="wrapper__title">CẬP NHẬT THÔNG TIN</h3>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formikProps => {
                        const { isValid, isSubmitting } = formikProps;
                        return <Form className="wrapper__form" autoComplete="off">
                            <Field
                                name="taiKhoan"
                                component={InputField}

                                label="Tài khoản"
                                type="text"
                                placeholder=" "
                                disabled={true}
                                icon="fa fa-user"
                            />
                            <Field
                                name="matKhau"
                                component={PasswordField}

                                label="Mật khẩu"
                                placeholder=" "
                                disabled={true}
                                icon={false}
                            />
                            <Field
                                name="matKhauXacNhan"
                                component={PasswordField}

                                label="Nhập lại mật khẩu"
                                placeholder=" "
                                disabled={true}
                                icon={false}
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
                                    <button className="button--disabled" disabled={true}>CẬP NHẬT</button> :
                                    <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} disabled={!isValid || isSubmitting} onClick={() => {
                                    }}>
                                        <ButtonLoading />
                                        <span>CẬP NHẬT</span>
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

export default CapNhat;