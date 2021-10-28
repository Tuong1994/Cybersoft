import React from "react";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhMucKhoaHocBackEndAction } from "../../../redux/actions/KhoaHocAction";
import { Formik, Form, Field } from "formik";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import useOverFlow from "../../../hooks/useOverFlow";
import InputField from "../../../components/Fields/Input/InputField";
import SelectField from "../../../components/Fields/Select/SelectField";
import TextAreaField from "../../../components/Fields/TextArea/TextAreaField";
import FileField from "../../../components/Fields/File/FileField";
import { themKhoaHocBackEndAction } from "../../../redux/actions/AdminAction";

function ThemKhoaHoc({ addCourse, setAddCourse }) {
  const { danhMucKhoaHocBackEnd } = useSelector(
    (state) => state.KhoaHocReducer
  );
  const { taiKhoanNguoiDung } = useSelector((state) => state.HocVienReducer);
  const { buttonLoading } = useSelector((state) => state.LoadingReducer);
  const dispatch = useDispatch();
  useOverFlow(addCourse);
  useEffect(() => {
    dispatch(layDanhMucKhoaHocBackEndAction());
  }, []);
  const renderOption = () => {
    return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
      return (
        <option value={danhMuc.maDanhMuc} key={index}>
          {danhMuc.tenDanhMuc}
        </option>
      );
    })
  }
  const initialValues = {
    maDanhMuc: "",
    maKhoaHoc: "",
    tenKhoaHoc: "",
    biDanh: "",
    danhGia: 0,
    luotXem: 0,
    moTa: "",
    ngayTao: "",
    // hinhAnh: "",
    taiKhoaNguoiTao: taiKhoanNguoiDung?.thongTinTaiKhoan?.taiKhoan,
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
  const handleSumit = (values, actions) => {
    dispatch(themKhoaHocBackEndAction(values));
    setTimeout(() => {
      actions.resetForm({
        values: {
          maDanhMuc: "",
          maKhoaHoc: "",
          tenKhoaHoc: "",
          biDanh: "",
          moTa: "",
          ngayTao: "",
          // hinhAnh: "",
        }
      })
    }, 1000)
  }
  return (
    <div className={addCourse ? "add-course add-course--show" : "add-course"}>
      <div className={addCourse ? "add-course__wrapper add-course__wrapper--active" : "add-course__wrapper"}>
        <span
          className="wrapper__close"
          onClick={() => {
            setAddCourse(false);
          }}
        >
          <i className="fa fa-times"></i>
        </span>
        <h3>THÊM KHÓA HỌC</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSumit}
        >
          {formikProps => {
            const { isValid, isSubmitting } = formikProps;
            return <Form className="wrapper__form" autoComplete="off">
              <Field
                name="maKhoaHoc"
                component={InputField}

                label="Mã khóa học"
                type="text"
                placeholder=" "
                disabled={false}
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
                disabled={false}
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
                {!isValid ? (
                  <button className="button--disabled" disabled={true}>
                    THÊM KHÓA HỌC
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
                    <span>THÊM KHÓA HỌC</span>
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

export default ThemKhoaHoc;
