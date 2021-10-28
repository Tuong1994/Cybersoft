import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { layDanhSachNguoiDungBackEndAction, xoaNguoiDungBackEndAction } from "../../../redux/actions/AdminAction";
import AlertDelete from "../../../components/Alert/AlertDelete";
import BangDanhSachNguoiDung from "./BangDanhSachNguoiDung";
import ThemNguoiDung from "./ThemNguoiDung";
import Pagination from "../../../components/Pagination/Pagination";

function QuanLyNguoiDung(props) {
  const { danhSachNguoiDung, nguoiDungCapNhat } = useSelector((state) => state.AdminReducer);
  const { page } = useSelector(state => state.PaginationReducer);

  const [addUser, setAddUser] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { danhSach, tongHocVien, hocVienMoiTrang } = danhSachNguoiDung;
  const alertTitle = "Bạn có xóa người dùng này ?"
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(xoaNguoiDungBackEndAction(nguoiDungCapNhat?.maNguoiDung));
  }
  useEffect(() => {
    dispatch(layDanhSachNguoiDungBackEndAction(page));
  }, [page]);
  return (
    <div className="user-manage">
      <div className="user-manage__title">
        <h3 className="title__name">QUẢN LÝ NGƯỜI DÙNG</h3>
        <div className="title__input">
          <div className="input__search">
            <input type="text" placeholder="Tìm kiếm..." className="input" onChange={(e) => {
              setSearchValue(e.target.value);
            }} />
            <i className="fa fa-search"></i>
          </div>
          <div
            className="button--gradient input__button"
            onClick={() => {
              setAddUser(true);
            }}
          >
            <i className="fa fa-plus"></i>
            <span>THÊM NGƯỜI DÙNG</span>
          </div>
        </div>
      </div>

      <span className="user-manage__line"></span>

      <div className="user-manage__table">
        <BangDanhSachNguoiDung
          danhSachNguoiDung={danhSach}
          searchValue={searchValue}
        />
      </div>
      {danhSach?.length < 10 ?
        null :
        <Pagination perPage={hocVienMoiTrang} total={tongHocVien} />
      }
      <ThemNguoiDung addUser={addUser} setAddUser={setAddUser} />
      <AlertDelete handleDispatch={handleDispatch} title={alertTitle} />
    </div>
  );
}

export default QuanLyNguoiDung;
