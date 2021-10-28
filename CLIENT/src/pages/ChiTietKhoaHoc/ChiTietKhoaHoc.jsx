import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhMucKhoaHocBackEndAction, layThongTinKhoaHocBackEndAction } from '../../redux/actions/KhoaHocAction';
import { NavHashLink as Link } from 'react-router-hash-link';
import { taiKhoan } from '../../config/setting';
import { Redirect } from 'react-router';
import MoDau from './MoDau/MoDau';
import KhoaHocKhac from './KhoaHocKhac/KhoaHocKhac';
import Blob from '../../components/Blob/Blob';
import NoiDungKhoaHoc from './NoiDungKhoaHoc/NoiDungKhoaHoc';

function ChiTietKhoaHoc(props) {
    const { thongTinKhoaHoc, danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    let { id } = props.match.params;
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(layThongTinKhoaHocBackEndAction(id))
        dispatch(layDanhMucKhoaHocBackEndAction());
    }, [])
    if(!localStorage.getItem(taiKhoan)) {
        return <Redirect to="/sign_in" />
    }
    return (
        <div className="course-detail">
            <div className="course-detail__prologue">
                <MoDau thongTinKhoaHoc={thongTinKhoaHoc} />
            </div>

            <div className="course-detail__another" style={{ position: "relative" }}>
                <KhoaHocKhac danhMucKhoaHocBackEnd={danhMucKhoaHocBackEnd} />
                <Blob />
            </div>

            <div className="course-detail__content">
                <div className="content__sidebar">
                    <div className="sidebar__list">
                        <Link smooth to="#thong-tin-khoa-hoc"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Thông tin khóa học
                        </Link>
                        <Link smooth to="#doi-tuong-tham-gia"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Đối tượng tham gia
                        </Link>
                        <Link smooth to="#muc-tieu-ket-qua"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Mục tiêu và kết quả
                        </Link>
                        <Link smooth to="#diem-khac-biet"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Điểm khác biệt
                        </Link>
                        <Link smooth to="#giang-vien-phuong-phap"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Giảng viên và Phương pháp
                        </Link>
                        <Link smooth to="#bang-cap-viec-lam"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Bằng cấp và Việc làm
                        </Link>
                        <Link smooth to="#hinh-anh-lop-hoc"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Hình ảnh lớp học
                        </Link>
                        <Link smooth to="#cam-nhan-hoc-vien"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Cảm nhận học viên
                        </Link>
                        <Link smooth to="#hoc-phi-ghi-danh"
                            activeName="selected"
                            activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                            className="list__item">
                            Học phí và Ghi danh
                        </Link>
                    </div>
                </div>
                <div className="content__info">
                    <NoiDungKhoaHoc thongTinKhoaHoc={thongTinKhoaHoc} paramsId={id} />
                </div>
            </div>
        </div>
    );
}

export default ChiTietKhoaHoc;