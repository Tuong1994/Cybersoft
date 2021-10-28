let nguoiDung = "";
let khoaHoc = "";
if (localStorage.getItem("nguoiDung")) {
  let thongTin = localStorage.getItem("nguoiDung");
  nguoiDung = JSON.parse(thongTin);
}
if (localStorage.getItem("khoaHoc")) {
  let thongTin = localStorage.getItem("khoaHoc");
  khoaHoc = JSON.parse(thongTin);
}

const stateDefault = {
  danhSachNguoiDung: [],
  nguoiDungCapNhat: nguoiDung,
  khoaHocCapNhat: khoaHoc,
};

export const AdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_NGUOI_DUNG": {
      state.danhSachNguoiDung = action.data;
      return { ...state };
    }
    case "THONG_TIN_NGUOI_DUNG_CAP_NHAT": {
      let nguoiDungMoi = { ...state.nguoiDungCapNhat };
      nguoiDungMoi = action.nguoiDung
      state.nguoiDungCapNhat = nguoiDungMoi;
      return { ...state };
    }
    case "THONG_TIN_KHOA_HOC_CAP_NHAT": {
      let khoaHocMoi = { ...state.khoaHocCapNhat };
      khoaHocMoi = action.khoaHoc;
      state.khoaHocCapNhat = khoaHocMoi;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
