import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { phoneRegExp } from '../../../config/setting';
import { GhiDanhKhoaHocBackEndAction } from '../../../redux/actions/HocVienAction';
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import DangKyThanhCong from '../DangKyThanhCong/DangKyThanhCong';

function GhiDanh({ thongTinKhoaHoc, paramsId }) {
    const { taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    const { handleChange, handleSubmit, handleBlur, touched, errors, isValid } = useFormik({
        initialValues: {
            maKhoaHoc: paramsId,
            taiKhoan: taiKhoanNguoiDung?.thongTinTaiKhoan.taiKhoan,
            hoTen: "",
            email: "",
            soDt: "",
            diaDiem: "",
            tinNhan: "",
        },
        validationSchema: yup.object().shape({
            hoTen: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .required("Không được để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Không được để trống"),
            soDt: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(15, "Dài nhất 15 ký tự")
                .matches(phoneRegExp, "Không hợp lệ")
                .required("Không được để trống"),
            diaDiem: yup.string()
                .required("Bạn chưa chọn địa điểm")
        }),
        onSubmit: (values) => {
            dispatch(GhiDanhKhoaHocBackEndAction(values));
            dispatch({
                type: "THONG_TIN_GHI_DANH",
                thongTinGhiDanh: {
                    maKhoaHoc: paramsId,
                    tenKhoaHoc: thongTinKhoaHoc.tenKhoaHoc,
                    hoTen: values.hoTen,
                    email: values.email,
                    soDt: values.soDt,
                    diaDiem: values.diaDiem,
                    tinNhan: values.tinNhan,
                }
            })
        }
    })
    return (
        <div className="wrapper__register" id="hoc-phi-ghi-danh">
            <DangKyThanhCong />

            <h1 className="register__title">
                <i class="fa fa-qrcode"></i>
                <span>HỌC PHÍ VÀ GHI DANH</span>
            </h1>

            <div className="register__wrapper">
                <div className="wrapper__form">
                    <h3 className="form__title">GHI DANH</h3>
                    <Formik>
                        <Form className="form" onSubmit={handleSubmit}>
                            <div className="form__group">
                                <div className="group__content">
                                    <Field type="text" className="group__input" placeholder="Họ và tên *" name="hoTen" onChange={handleChange} onBlur={handleBlur} />
                                    <span className="group__icon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                                {touched.hoTen && errors.hoTen ? <span className="group__errors">{errors.hoTen}</span> : null}
                            </div>

                            <div className="form__group">
                                <div className="group__content">
                                    <Field type="text" className="group__input" placeholder="Email liên hệ *" name="email" onChange={handleChange} onBlur={handleBlur} />
                                    <span className="group__icon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                                {touched.email && errors.email ? <span className="group__errors">{errors.email}</span> : null}
                            </div>

                            <div className="form__group">
                                <div className="group__content">
                                    <Field type="text" className="group__input" placeholder="Điện thoại liên hệ *" name="soDt" onChange={handleChange} onBlur={handleBlur} />
                                    <span className="group__icon">
                                        <i class="fa fa-phone"></i>
                                    </span>
                                </div>
                                {touched.soDt && errors.soDt ? <span className="group__errors">{errors.soDt}</span> : null}
                            </div>

                            <div className="form__group">
                                <div className="group__content">
                                    <Field as="select" name="diaDiem" className="group__input" onChange={handleChange} onBlur={handleBlur}>
                                        <option value="">Chọn nơi học</option>
                                        <option value="Quận 3 - Cao Thắng">
                                            Quận 3 - Cao Thắng
                                        </option>
                                        <option value="Quận 10 - Sự Vạn Hạnh">
                                            Quận 10 - Sự Vạn Hạnh
                                        </option>
                                        <option value="Quận Bình Thạnh - 82 Ung Văn Khiêm">

                                            Quận Bình Thạnh - 82 Ung Văn Khiêm
                                        </option>
                                        <option value="Quận Gò Vấp - Cityland Phan Văn Trị">
                                            Quận Gò Vấp - Cityland Phan Văn Trị
                                        </option>
                                        <option value="Quận Thủ Đức - 6C Đường Số 8, Linh Tây">
                                            Quận Thủ Đức - 6C Đường Số 8, Linh Tây
                                        </option>
                                        <option value="Quận Tân phú - Lê Cảnh Tuân">
                                            Quận Tân phú - Lê Cảnh Tuân
                                        </option>
                                        <option value="Đà Nẵng - 103 Nguyễn Hữu Dật, Hải Châu">
                                            Đà Nẵng - 103 Nguyễn Hữu Dật, Hải Châu
                                        </option>
                                    </Field>
                                </div>
                                {touched.diaDiem && errors.diaDiem ? <span className="group__errors">{errors.diaDiem}</span> : null}
                            </div>

                            <div className="form__group">
                                <div className="group__content">
                                    <Field as="textarea" name="tinNhan" cols="15" rows="10" className="group__input textarea" placeholder="Bạn cần tư vấn thêm chương trình này, vui lòng để lại tin nhắn tại đây..." onChange={handleChange} onBlur={handleBlur}>
                                    </Field>
                                </div>
                            </div>

                            <div className="form__button">
                                {!isValid ?
                                    <button type="submit" className="button--disabled" disabled={true}>
                                        GHI DANH
                                    </button>
                                    :
                                    <button type="submit" className={buttonLoading ? "button--red button--red--disabled" : "button--red"} disabled={buttonLoading ? true : false} >
                                        <ButtonLoading />
                                        <span>GHI DANH</span>
                                    </button>
                                }
                            </div>
                        </Form>
                    </Formik>
                </div>

                <div className="wrapper__info">
                    <h3 className="info__title">
                        LỊCH KHAI GIẢNG
                    </h3>

                    <table className="info__table">
                        <thead>
                            <tr>
                                <th colSpan="4">LỚP TẠI HỒ CHÍ MINH</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 1</td>
                                <td>Quận 10</td>
                                <td>Tối T2 + T6</td>
                                <td>17/05</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 2</td>
                                <td>Gò Vấp</td>
                                <td>Tối T3 + T5</td>
                                <td>15/07</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 3</td>
                                <td>Bình Thạnh</td>
                                <td>Tối T4 + Sáng CN</td>
                                <td>29/09</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 4</td>
                                <td>Quận 3</td>
                                <td>Tối T3 + T5</td>
                                <td>28/09</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 5</td>
                                <td>Thủ Đức</td>
                                <td>Tối T2 + T6</td>
                                <td>30/09</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 6</td>
                                <td>Tân Phú</td>
                                <td>Chiều T7 + CN</td>
                                <td>02/10</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 7</td>
                                <td>Quận 10</td>
                                <td>Tối T2 + T6</td>
                                <td>19/08</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 8</td>
                                <td>Quận 3</td>
                                <td>Tối T3 + T5</td>
                                <td>04/11</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 9</td>
                                <td>Bình Thạnh</td>
                                <td>Chiều T7 + CN</td>
                                <td>25/09</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc?.tenKhoaHoc} 10</td>
                                <td>Tân Phú</td>
                                <td>Chiều T7 + CN</td>
                                <td>14/11</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="info__table">
                        <thead>
                            <tr>
                                <th colSpan="4">LỚP TẠI ĐÀ NẴNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{thongTinKhoaHoc.tenKhoaHoc} 1</td>
                                <td>Q.Hải Châu - ĐN</td>
                                <td>Tối T2 + T6</td>
                                <td>17/05</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc.tenKhoaHoc} 2</td>
                                <td>Q.Hải Châu - ĐN</td>
                                <td>Tối T3 + T5</td>
                                <td>15/07</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc.tenKhoaHoc} 3</td>
                                <td>Q.Hải Châu - ĐN</td>
                                <td>Tối T4 + Sáng CN</td>
                                <td>29/09</td>
                            </tr>
                            <tr>
                                <td>{thongTinKhoaHoc.tenKhoaHoc} 4</td>
                                <td>Q.Hải Châu - ĐN</td>
                                <td>Tối T3 + T5</td>
                                <td>28/09</td>
                            </tr>
                        </tbody>
                    </table>

                    <span className="info__line"></span>

                    <div className="info__endow">
                        <p>CÁC CHƯƠNG TRÌNH ƯU ĐÃI :</p>
                        <ul className="endow__list">
                            <li className="list">
                                Học theo nhóm hoặc có bạn giới thiệu giảm 400.000 đ
                            </li>
                            <li className="list">
                                Liên hệ Hotline: 0961.05.10.14 để biết thêm chi tiết
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GhiDanh;