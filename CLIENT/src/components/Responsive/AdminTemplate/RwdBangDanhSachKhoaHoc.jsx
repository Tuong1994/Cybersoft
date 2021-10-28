import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachKhoaHocBackEndAction } from "../../../redux/actions/KhoaHocAction";
import ButtonLoading from '../../Loading/ButtonLoading';

function RwdBangDanhSachKhoaHoc({ setUploadModal, searchValue, setStudentList }) {
    const { danhSachTimKiem, danhSachKhoaHoc } = useSelector(state => state.KhoaHocReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const [loadMore, setLoadMore] = useState(4);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachKhoaHocBackEndAction())
    }, [])
    const renderCourses = () => {
        if (searchValue === "") {
            return danhSachKhoaHoc?.slice(0, loadMore).map((khoaHoc, index) => {
                return <div className="rwd-list__card" key={index}>
                    <div className="card__wrapper">
                        <div className="wrapper__image" onClick={() => {
                            setUploadModal(true);
                            dispatch({
                                type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                khoaHoc: khoaHoc
                            })
                        }}>
                            <img src={khoaHoc?.hinhAnh ? khoaHoc?.hinhAnh : "../img/code.jpg"} alt={khoaHoc?.tenKhoaHoc} className="image" />
                            <div className="image__button">
                                <i class="fa fa-camera-retro"></i>
                            </div>
                        </div>
                        <div className="wrapper__info">
                            <div className="info__content">
                                <strong>Khóa học : </strong>
                                <p>{khoaHoc?.tenKhoaHoc}</p>
                            </div>
                            <div className="info__content">
                                <strong>Danh mục : </strong>
                                <p>{khoaHoc?.tenDanhMuc}</p>
                            </div>
                            <div className="info__content">
                                <strong>Bí danh : </strong>
                                <p>{khoaHoc?.biDanh}</p>
                            </div>
                            <div className="info__content">
                                <strong>Ngày tạo : </strong>
                                <p>{khoaHoc?.ngayTao}</p>
                            </div>
                            <div className="info__content">
                                <strong>Người tạo : </strong>
                                {khoaHoc.nguoiTao === null ? <p>Admin</p> : <p>{khoaHoc.nguoiTao?.hoTen}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="card__line"></div>

                    <div className="card__button">
                        <div className="button__list" onClick={() => {
                            setStudentList(true);
                            dispatch({
                                type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                khoaHoc: khoaHoc
                            })
                        }}>
                            <i class="fa fa-list"></i>
                            <span>Danh sách học viên</span>
                        </div>
                        <div className="button__wrapper">
                            <div className="wrapper">
                                <div className="wrapper__note">Xóa</div>
                                <div className="button" onClick={() => {
                                    dispatch({
                                        type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                        khoaHoc: khoaHoc
                                    });
                                    dispatch({
                                        type: "OPEN_ALERT_DELETE"
                                    })
                                }}>
                                    <i class="fa fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="wrapper__note">Cập nhật</div>
                                <NavLink to="/cap_nhat_khoa_hoc" className="button" onClick={() => {
                                    dispatch({
                                        type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                        khoaHoc: khoaHoc
                                    })
                                    localStorage.setItem("khoaHoc", JSON.stringify(khoaHoc));
                                }}>
                                    <i class="fa fa-edit"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card__viewmore">
                        <div className="viewmore__info">
                            <strong>Mô tả</strong>
                            <p>{khoaHoc?.moTa}</p>
                        </div>
                    </div>
                </div >
            })
        } else if (danhSachTimKiem?.length === 0) {
            return <div className="rwd-list__note">
                <p>Không tìm thấy kết quả</p>
            </div>
        } else if (danhSachTimKiem?.length !== 0) {
            return danhSachTimKiem?.map((khoaHoc, index) => {
                return <div className="rwd-list__card" key={index}>
                    <div className="card__wrapper">
                        <div className="wrapper__image" onClick={() => {
                            setUploadModal(true);
                            dispatch({
                                type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                khoaHoc: khoaHoc
                            })
                        }}>
                            <img src={khoaHoc?.hinhAnh ? khoaHoc?.hinhAnh : "../img/code.jpg"} alt={khoaHoc?.tenKhoaHoc} className="image" />
                            <div className="image__button">
                                <i class="fa fa-camera-retro"></i>
                            </div>
                        </div>
                        <div className="wrapper__info">
                            <div className="info__content">
                                <strong>Khóa học : </strong>
                                <p>{khoaHoc?.tenKhoaHoc}</p>
                            </div>
                            <div className="info__content">
                                <strong>Danh mục : </strong>
                                <p>{khoaHoc?.tenDanhMuc}</p>
                            </div>
                            <div className="info__content">
                                <strong>Bí danh : </strong>
                                <p>{khoaHoc?.biDanh}</p>
                            </div>
                            <div className="info__content">
                                <strong>Ngày tạo : </strong>
                                <p>{khoaHoc?.ngayTao}</p>
                            </div>
                            <div className="info__content">
                                <strong>Người tạo : </strong>
                                {khoaHoc.nguoiTao === null ? <p>Admin</p> : <p>{khoaHoc.nguoiTao?.hoTen}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="card__line"></div>

                    <div className="card__button">
                        <div className="button__list" onClick={() => {
                            setStudentList(true);
                            dispatch({
                                type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                khoaHoc: khoaHoc
                            })
                        }}>
                            <i class="fa fa-list"></i>
                            <span>Danh sách học viên</span>
                        </div>
                        <div className="button__wrapper">
                            <div className="wrapper">
                                <div className="wrapper__note">Xóa</div>
                                <div className="button" onClick={() => {
                                    dispatch({
                                        type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                        khoaHoc: khoaHoc
                                    });
                                    dispatch({
                                        type: "OPEN_ALERT_DELETE"
                                    })
                                }}>
                                    <i class="fa fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="wrapper__note">Cập nhật</div>
                                <NavLink to="/cap_nhat_khoa_hoc" className="button" onClick={() => {
                                    dispatch({
                                        type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
                                        khoaHoc: khoaHoc
                                    })
                                    localStorage.setItem("khoaHoc", JSON.stringify(khoaHoc));
                                }}>
                                    <i class="fa fa-edit"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card__viewmore">
                        <div className="viewmore__info">
                            <strong>Mô tả</strong>
                            <p>{khoaHoc?.moTa}</p>
                        </div>
                    </div>
                </div >
            })
        }
    }
    return (
        <div className="rwd-list">
            {renderCourses()}
            {searchValue !== "" || danhSachTimKiem?.length !== 0 || loadMore >= danhSachKhoaHoc.length ?
                null 
                :
                <div className="rwd-list__button" onClick={() => {
                    dispatch({
                        type: "OPEN_BUTTON_LOADING"
                    })
                    setTimeout(() => {
                        setLoadMore((preValue) => preValue + 4)
                        dispatch({
                            type: "CLOSE_BUTTON_LOADING"
                        })
                    }, 1000)
                }}>
                    <div className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"}>
                        <ButtonLoading />
                        <span>Xem thêm</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default RwdBangDanhSachKhoaHoc;