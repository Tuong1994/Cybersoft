import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThongTinTaiKhoanBackEndAction } from '../../../redux/actions/HocVienAction';
import Blob from '../../../components/Blob/Blob';
import KhoaHocCuaToi from './KhoaHocCuaToi';

function ThongTin(props) {
    const { thongTinNguoiDung, taiKhoanNguoiDung } = useSelector(state => state.HocVienReducer);
    const [password, setPassword] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(ThongTinTaiKhoanBackEndAction(taiKhoanNguoiDung.thongTinTaiKhoan))
    }, []);
    return (
        <div className="user">
            <Blob />
            <div className="user__detail">
                <h3 className="detail__title">
                    THÔNG TIN HỌC VIÊN
                </h3>
                <div className="detail__content">
                    <div className="content__item">
                        <p className="item__title">Tài khoản :</p>
                        <p className="item__text">{thongTinNguoiDung?.taiKhoan}</p>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Họ và Tên :</p>
                        <p className="item__text">{thongTinNguoiDung?.hoTen}</p>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Email :</p>
                        <p className="item__text">{thongTinNguoiDung?.email}</p>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Số điện thoại :</p>
                        <p className="item__text">{thongTinNguoiDung?.soDt}</p>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Loại người dùng :</p>
                        <p className="item__text">{thongTinNguoiDung?.maLoaiNguoiDung}</p>
                    </div>
                </div>
            </div>

            <div className="user__course">
                <div className="course__title">
                    <h3 className="title__name">KHÓA HỌC CỦA TÔI</h3>
                    <div className="title__input">
                        <input type="text" className="input" placeholder="Tìm kiếm..." onChange={(e) => {
                            setSearchValue(e.target.value);
                        }} />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="course__line"></div>
                <KhoaHocCuaToi thongTinNguoiDung={thongTinNguoiDung} searchValue={searchValue} />
            </div>
        </div>
    );
}

export default ThongTin;