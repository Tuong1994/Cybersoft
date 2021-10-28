import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { capNhatNguoiDungBackEndAction } from "../../../redux/actions/AdminAction";
import { option, phoneRegExp } from "../../../config/setting";
import * as yup from "yup";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import InputField from "../../../components/Fields/Input/InputField";
import SelectField from "../../../components/Fields/Select/SelectField";
import PasswordField from "../../../components/Fields/Password/PasswordField";
import Blob from "../../../components/Blob/Blob";

function CapNhatNguoiDung() {
  const { buttonLoading } = useSelector((state) => state.LoadingReducer);
  const { nguoiDungCapNhat } = useSelector(state => state.AdminReducer);
  const dispatch = useDispatch();
  const renderOption = () => {
    return option?.map((item) => {
      return <option key={item.id} value={item.value}>
        {item.title}
      </option>
    })
  };
  const initialValues = {
    maNguoiDung: nguoiDungCapNhat?.maNguoiDung,
    taiKhoan: nguoiDungCapNhat?.taiKhoan,
    matKhau: nguoiDungCapNhat?.matKhau,
    hoTen: nguoiDungCapNhat?.hoTen,
    soDt: nguoiDungCapNhat?.soDt,
    email: nguoiDungCapNhat?.email,
    maLoaiNguoiDung: nguoiDungCapNhat?.maLoaiNguoiDung
  }
  const validationSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .max(20, "Dài nhất 20 ký tự")
      .required("Vui lòng không để trống"),
    matKhau: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .required("Vui lòng không để trống"),
    hoTen: yup.string().required("Vui lòng không để trống"),
    email: yup.string().email("Không hợp lệ").required("Vui lòng không để trống"),
    soDt: yup
      .string()
      .matches(phoneRegExp, "Không hợp lệ")
      .min(2, "Ít nhất 2 ký tự")
      .max(10, "Dài nhất 10 ký tự")
      .required("Vui lòng không để trống"),
    maLoaiNguoiDung: yup.string().required("Bạn chưa chọn loại người dùng"),
  });
  const handleSubmit = (values) => {
    dispatch(capNhatNguoiDungBackEndAction(values));
  }
  return (
    <div
      className="update-user"
    >
      <Blob />
      <div className="update-user__wrapper">
        <h3>CẬP NHẬT NGƯỜI DÙNG</h3>
        <span className="wrapper__line"></span>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formikProps => {
            const { isValid, isSubmitting } = formikProps;
            return <Form className="wrapper__form">
              <Field
                name="taiKhoan"
                component={InputField}

                label="Tài khoản"
                type="text"
                placeholder=" "
                disabled={true}
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
                name="hoTen"
                component={InputField}

                label="Họ tên"
                type="text"
                placeholder=" "
                disabled={false}
              />
              <Field
                name="email"
                component={InputField}

                label="Email"
                type="text"
                placeholder=" "
                disabled={false}
              />
              <Field
                name="soDt"
                component={InputField}

                label="Số điện thoại"
                type="text"
                placeholder=" "
                disabled={false}
              />
              <Field
                name="maLoaiNguoiDung"
                component={SelectField}

                label="Chọn loại người dùng"
                placeholder=" "
                option={renderOption}
              />
              <div className="form__button">
                <NavLink to="/quan_ly_nguoi_dung" className="button--gradient">
                  Quay lại
                </NavLink>
                {!isValid ? (
                  <button className="button--disabled" disabled={true}>
                    CẬP NHẬT
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={
                      buttonLoading
                        ? "button--gradient button--gradient-disabled"
                        : "button--gradient"
                    }
                    disabled={!isValid || isSubmitting}
                  >
                    <ButtonLoading />
                    <span>CẬP NHẬT</span>
                  </button>
                )}
              </div>
            </Form>
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CapNhatNguoiDung;
