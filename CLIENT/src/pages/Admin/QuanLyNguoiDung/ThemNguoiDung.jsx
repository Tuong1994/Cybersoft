import React from "react";
import { Formik, Form, Field } from "formik";
import { option, phoneRegExp } from "../../../config/setting";
import { useDispatch, useSelector } from "react-redux";
import { themNguoiDungBackEndAction } from "../../../redux/actions/AdminAction";
import * as yup from "yup";
import useOverFlow from "../../../hooks/useOverFlow";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import InputField from "../../../components/Fields/Input/InputField";
import PasswordField from "../../../components/Fields/Password/PasswordField";
import SelectField from "../../../components/Fields/Select/SelectField";

function ThemNguoiDung({ addUser, setAddUser }) {
  const { buttonLoading } = useSelector((state) => state.LoadingReducer);
  const dispatch = useDispatch();
  useOverFlow(addUser);
  const renderOption = () => {
    return option?.map((item) => {
      return <option key={item.id} value={item.value}>{item.title}</option>
    })
  }
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
  };
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
    email: yup
      .string()
      .email("Không hợp lệ")
      .required("Vui lòng không để trống"),
    soDt: yup
      .string()
      .matches(phoneRegExp, "Không hợp lệ")
      .min(2, "Ít nhất 2 ký tự")
      .max(10, "Dài nhất 10 ký tự")
      .required("Vui lòng không để trống"),
    maLoaiNguoiDung: yup.string().required("Bạn chưa chọn loại người dùng"),
  });
  const handleSubmit = (values, actions) => {
    dispatch(themNguoiDungBackEndAction(values));
    setTimeout(() => {
      actions.resetForm({
        values: {
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: "",
        }
      })
    }, 1000)
  }
  return (
    <div className={addUser ? "add-user add-user--show" : "add-user"}>
      <div className={addUser ? "add-user__wrapper add-user__wrapper--active" : "add-user__wrapper"}>
        <span
          className="wrapper__close"
          onClick={() => {
            setAddUser(false);
          }}
        >
          <i className="fa fa-times"></i>
        </span>
        <h3>THÊM NGƯỜI DÙNG</h3>

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
                disabled={false}
              />
              <Field
                name="matKhau"
                component={PasswordField}

                label="Mật khẩu"
                placeholder=" "
                disabled={false}
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
                {!isValid ? (
                  <button className="button--disabled" disabled={true}>
                    THÊM NGƯỜI DÙNG
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
                    <span>THÊM NGƯỜI DÙNG</span>
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

export default ThemNguoiDung;
