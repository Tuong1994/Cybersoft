import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HuyGhiDanhKhoaHocBackEndAction } from '../../../redux/actions/HocVienAction';
import Swal from 'sweetalert2';
import ButtonLoading from '../../../components/Loading/ButtonLoading';

function KhoaHocCuaToi({ thongTinNguoiDung, searchValue }) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    const renderCourses = () => {
        return thongTinNguoiDung?.chiTietGhiDanh?.filter(khoaHoc => {
            if (searchValue === "") {
                return khoaHoc
            } else if (khoaHoc.tenKhoaHoc.toLowerCase().includes(searchValue.toLowerCase())) {
                return khoaHoc
            }
        }).map((khoaHoc, index) => {
            return <div className="list__card" key={index}>
                <div className="card__wrapper">
                    <div className="wrapper__image">
                        <img src={khoaHoc?.hinhAnh ? khoaHoc?.hinhAnh : "../img/code.jpg"} alt={khoaHoc?.tenKhoaHoc} className="image" />
                    </div>
                    <div className="wrapper__info">
                        <div className="info__content">
                            <strong>Khóa học : </strong>
                            <p>{khoaHoc?.tenKhoaHoc}</p>
                        </div>
                        <div className="info__content">
                            <strong>Bí danh : </strong>
                            <p>{khoaHoc?.biDanh}</p>
                        </div>
                        <div className="info__button">
                            <div className={buttonLoading ? "button button-disabled" : "button"} onClick={() => {
                                Swal.fire({
                                    title: 'Bạn có muốn hủy ghi danh ?',
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#7462f9',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Hủy ghi danh'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        let maKhoaHoc = {
                                            maKhoaHoc: khoaHoc.maKhoaHoc,
                                            taiKhoan: thongTinNguoiDung.taiKhoan,
                                        }
                                        dispatch(HuyGhiDanhKhoaHocBackEndAction(maKhoaHoc))
                                    }
                                })

                            }}>
                                <ButtonLoading />
                                {buttonLoading ? null :
                                    <>
                                        <i className="fa fa-trash-alt"></i>
                                        <span className="button__text">Hủy ghi danh</span>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card__line"></div>

                <div className="card__viewmore">
                    <div className="viewmore__info">
                        <strong>Mô tả</strong>
                        <p>{khoaHoc?.moTa}</p>
                    </div>
                </div>
            </div >
        })
    }
    return (
        <div className="course__list">
            {thongTinNguoiDung?.chiTietGhiDanh?.length !== 0 ?
                renderCourses()
                :
                <div className="list__note">
                    <p>Bạn chưa đăng ký khóa học nào</p>
                </div>
            }
        </div>
    );
}

export default KhoaHocCuaToi;