import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HuyGhiDanhKhoaHocBackEndAction } from '../../../redux/actions/HocVienAction';
import Swal from 'sweetalert2';
import useOverFlow from '../../../hooks/useOverFlow';
import ButtonLoading from '../../../components/Loading/ButtonLoading';

function DanhSachHocVien({ studentList, setStudentList }) {
    const { khoaHocCapNhat } = useSelector(state => state.AdminReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const { trang } = useSelector(state => state.PaginationReducer);
    const { soLuongHocVien } = khoaHocCapNhat;
    const listRef = useRef(null);
    const dispatch = useDispatch();
    const renderList = () => {
        return soLuongHocVien?.map((hocVien, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{hocVien.taiKhoan}</td>
                <td>{hocVien.hoTen}</td>
                <td>{hocVien.email}</td>
                <td>{hocVien.soDt}</td>
                <td>
                    <div className="table__button">
                        <div className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"} onClick={() => {
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
                                        maKhoaHoc: khoaHocCapNhat.maKhoaHoc,
                                        taiKhoan: hocVien.taiKhoan,
                                    }
                                    dispatch(HuyGhiDanhKhoaHocBackEndAction(maKhoaHoc, trang));
                                }
                            })
                        }}>
                            <ButtonLoading />
                            {buttonLoading ? null : <i className="fa fa-times"></i>}
                        </div>
                    </div>
                </td>
            </tr>
        })
    }
    useOverFlow(studentList);
    return (
        <div className={studentList ? "list__student list__student--active" : "list__student"}>
            <div className={studentList ? "student__wrapper  student__wrapper--active" : "student__wrapper"} ref={listRef}>
                <h4 className="wrapper__title">
                    {khoaHocCapNhat?.tenKhoaHoc}
                </h4>
                <div className="wrapper__list">
                    <p>Danh sách học viên</p>
                    <div className="list__content">
                        {soLuongHocVien !== null && soLuongHocVien?.length !== 0 ?
                            <table className="content__table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tài khoản</th>
                                        <th>Họ Tên</th>
                                        <th>Email</th>
                                        <th>Điện thoại</th>
                                        <th>Hủy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderList()}
                                </tbody>
                            </table>
                            :
                            <div className="content__note">
                                <p>Chưa có học viên nào</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="wrapper__button">
                    <div className="button--gradient" onClick={() => {
                        setStudentList(false);
                    }}>
                        Quay lại
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DanhSachHocVien;