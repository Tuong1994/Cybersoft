import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

function BangDanhSachNguoiDung({ danhSachNguoiDung, searchValue }) {
    const dispatch = useDispatch();
    const renderList = () => {
        return danhSachNguoiDung?.filter(nguoiDung => {
            if(searchValue === "") {
                return nguoiDung
            } else if (nguoiDung.taiKhoan.toLowerCase().includes(searchValue.toLowerCase())
                || nguoiDung.hoTen.toLowerCase().includes(searchValue.toLowerCase())
                || nguoiDung.email.toLowerCase().includes(searchValue.toLowerCase())
            ) {
                return nguoiDung
            }
        }).map((nguoiDung, index) => {
            return <tr key={index}>
                <td>
                    <div className="table__button">
                        <div className="button__wrapper">
                            <div type="button" className="wrapper__note">Xóa</div>
                            <button type="button" className="button" onClick={() => {
                                dispatch({
                                    type: "THONG_TIN_NGUOI_DUNG_CAP_NHAT",
                                    nguoiDung: nguoiDung
                                });
                                dispatch({
                                    type: "OPEN_ALERT_DELETE"
                                });
                            }}>
                                <i className="fa fa-trash-alt"></i>
                            </button>
                        </div>
                        <div className="button__wrapper">
                            <div className="wrapper__note">Cập nhật</div>
                            <NavLink to="/cap_nhat_nguoi_dung" className="button" onClick={() => {
                                dispatch({
                                    type: "THONG_TIN_NGUOI_DUNG_CAP_NHAT",
                                    nguoiDung: nguoiDung
                                });
                                localStorage.setItem("nguoiDung", JSON.stringify(nguoiDung))
                            }}><i className="fa fa-edit"></i>
                            </NavLink>
                        </div>
                    </div>
                </td>
                <td>{index + 1}</td>
                <td>
                    <p>{nguoiDung.taiKhoan}</p>
                </td>
                <td>
                    <p>{nguoiDung.hoTen}</p>
                </td>
                <td>
                    <p>{nguoiDung.email}</p>
                </td>
                <td>
                    <p>{nguoiDung.soDt}</p>
                </td>
                <td>
                    <p>{nguoiDung.maLoaiNguoiDung}</p>
                </td>
            </tr>
        })
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th><i className="fa fa-cogs"></i></th>
                    <th>STT</th>
                    <th>Tài Khoản</th>
                    <th>Họ Tên</th>
                    <th>Email</th>
                    <th>Điện Thoại</th>
                    <th>Loại Người Dùng</th>
                </tr>
            </thead>
            <tbody>
                {renderList()}
            </tbody>
        </table>
    );
}

export default BangDanhSachNguoiDung;