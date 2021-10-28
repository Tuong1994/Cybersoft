import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { xoaKhoaHocBackEndAction } from '../../../redux/actions/AdminAction';
import { layDanhSachKhoaHocPhanTrangBackEndAction, layKhoaHocTimKiemBackEndAction } from '../../../redux/actions/KhoaHocAction';
import AlertDelete from '../../../components/Alert/AlertDelete';
import BangDanhSachKhoaHoc from './BangDanhSachKhoaHoc';
import ThemKhoaHoc from './ThemKhoaHoc';
import UploadHinhAnh from './UploadHinhAnh';
import Pagination from '../../../components/Pagination/Pagination';

function QuanLyKhoaHoc(props) {
    const { danhSachKhoaHocPhanTrang } = useSelector(state => state.KhoaHocReducer);
    const { khoaHocCapNhat } = useSelector(state => state.AdminReducer);
    const { trang } = useSelector(state => state.PaginationReducer);
    
    const [searchValue, setSearchValue] = useState("");
    const [addCourse, setAddCourse] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);

    const { danhSach, tongKhoaHoc, khoaHocMoiTrang } = danhSachKhoaHocPhanTrang;
    const alertTitle = "Bạn có xóa khóa học dùng này ?"
    const dispatch = useDispatch();
    const handleDispatch = () => {
        dispatch(xoaKhoaHocBackEndAction(khoaHocCapNhat.maKhoaHoc))
    }
    useEffect(() => {
        dispatch(layDanhSachKhoaHocPhanTrangBackEndAction(trang));
    }, [trang])
    return (
        <div className="course-manage">
            <div className="course-manage__title">
                <h3 className="title__name">QUẢN LÝ KHÓA HỌC</h3>
                <div className="title__input">
                    <div className="input__search">
                        <input type="text" placeholder="Tìm kiếm..." className="input" onChange={(e) => {
                            setSearchValue(e.target.value);
                        }} />
                        <i className="fa fa-search" onClick={() => {
                            dispatch(layKhoaHocTimKiemBackEndAction(searchValue));
                            dispatch({
                                type: "OPEN_LIST_LOADING"
                            })
                        }}></i>
                    </div>
                    <div className="button--gradient input__button" onClick={() => {
                        setAddCourse(true);
                    }}>
                        <i class="fa fa-plus"></i>
                        <span>
                            THÊM KHÓA HỌC
                        </span>
                    </div>
                </div>
            </div>

            <span className="course-manage__line"></span>

            <div className="course-manage__list">
                <BangDanhSachKhoaHoc danhSachKhoaHoc={danhSach} setUploadModal={setUploadModal} searchValue={searchValue} />
            </div>
            <Pagination perPage={khoaHocMoiTrang} total={tongKhoaHoc} />

            <ThemKhoaHoc addCourse={addCourse} setAddCourse={setAddCourse} />
            <UploadHinhAnh uploadModal={uploadModal} setUploadModal={setUploadModal} />
            <AlertDelete handleDispatch={handleDispatch} title={alertTitle} />
        </div>
    );
}

export default QuanLyKhoaHoc;