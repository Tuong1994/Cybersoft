import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhMucKhoaHocBackEndAction } from "../../../redux/actions/KhoaHocAction";
import { capNhatKhoaHocBackEndAction } from "../../../redux/actions/AdminAction";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import Blob from "../../../components/Blob/Blob";
import InputField from "../../../components/Fields/Input/InputField";
import SelectField from "../../../components/Fields/Select/SelectField";
import TextAreaField from "../../../components/Fields/TextArea/TextAreaField";
import FileField from "../../../components/Fields/File/FileField";

function CapNhatKhoaHoc() {
  const { danhMucKhoaHocBackEnd } = useSelector((state) => state.KhoaHocReducer);
  const { khoaHocCapNhat } = useSelector(state => state.AdminReducer);
  const { buttonLoading } = useSelector((state) => state.LoadingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhMucKhoaHocBackEndAction());
  }, []);
  const renderOption = () => {
    return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
      return <option value={danhMuc.maDanhMuc} key={index}>{danhMuc.tenDanhMuc}</option>;
    })
  };
  const initialValues = {
    maDanhMuc: khoaHocCapNhat?.maDanhMuc,
    maKhoaHoc: khoaHocCapNhat?.maKhoaHoc,
    tenKhoaHoc: khoaHocCapNhat?.tenKhoaHoc,
    biDanh: khoaHocCapNhat?.biDanh,
    moTa: khoaHocCapNhat?.moTa,
    danhGia: khoaHocCapNhat?.danhGia,
    luotXem: khoaHocCapNhat?.luotXem,
    ngayTao: khoaHocCapNhat?.ngayTao,
    // hinhAnh: khoaHocCapNhat?.hinhAnh,
    taiKhoanNguoiTao: khoaHocCapNhat?.taiKhoanNguoiTao,
  };
  const validationSchema = yup.object().shape({
    maDanhMuc: yup.string().required("Bạn chưa chọn danh mục"),
    maKhoaHoc: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .max(10, "Nhiều nhất 10 ký tự")
      .required("Vui lòng không để trống"),
    tenKhoaHoc: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .required("Vui lòng không để trống"),
    biDanh: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .required("Vui lòng không để trống"),
    moTa: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .required("Vui lòng không để trống"),
    ngayTao: yup.string().required("Bạn chưa chọn ngày"),
    // hinhAnh: yup.string().required("Bạn chưa chọn hình ảnh"),
  });
  const handleSubmit = (values) => {
    dispatch(capNhatKhoaHocBackEndAction(values));
  }
  return (
    <div className="update-course" >
      <Blob />
      <div className="update-course__wrapper">
        <h3>CẬP NHẬT KHÓA HỌC</h3>
        <span className="wrapper__line"></span>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formikProps => {
            const { isValid, isSubmitting } = formikProps;
            return <Form Form className="wrapper__form" autoComplete="off">

              <Field
                name="maKhoaHoc"
                component={InputField}

                label="Mã khóa học"
                type="text"
                placeholder=" "
                disabled={true}
              />
              <Field
                name="tenKhoaHoc"
                component={InputField}

                label="Tên khóa học"
                type="text"
                placeholder=" "
                disabled={false}
              />
              <Field
                name="biDanh"
                component={InputField}

                label="Bí danh"
                type="text"
                placeholder=" "
                disabled={false}
              />
              <Field
                name="maDanhMuc"
                component={SelectField}

                label="Chọn danh mục khóa học"
                option={renderOption}
                disabled={true}
              />
              <Field
                name="moTa"
                component={TextAreaField}

                label="Mô tả"
                cols="30"
                rows="5"
                placeholder=" "
              />
              <Field
                name="ngayTao"
                component={InputField}

                label="Ngày tạo"
                type="date"
                placeholder=" "
              />
              {/* <Field
                name="hinhAnh"
                component={FileField}

                type="file"
                label="Hình ảnh"
                placeholder=" "
              /> */}
              <div className="form__button">
                <NavLink to="/quan_ly_khoa_hoc" className="button--gradient">
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
                    CẬP NHẬT
                  </button>
                )}
              </div>
            </Form>
          }}
        </Formik>
      </div>
    </div >
  );
}

export default CapNhatKhoaHoc;
