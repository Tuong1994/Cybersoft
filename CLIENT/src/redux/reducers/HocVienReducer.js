import { accessToken, taiKhoan } from "../../config/setting";

let taiKhoanDangNhap = "";
if (localStorage.getItem(taiKhoan)) {
  let thongTinTaiKhoan = localStorage.getItem(taiKhoan);
  taiKhoanDangNhap = JSON.parse(thongTinTaiKhoan);
}

const stateDefault = {
  taiKhoanNguoiDung: taiKhoanDangNhap,
  thongTinNguoiDung: taiKhoanDangNhap,
  dangKy: false,
  thongTinGhiDanh: {},
};

export const HocVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.taiKhoanNguoiDung = action.taiKhoan;
      return { ...state };
    }
    case "DANG_XUAT": {
      localStorage.removeItem(accessToken);
      localStorage.removeItem(taiKhoan);
      state.taiKhoanNguoiDung = "";
      return { ...state };
    }
    case "LAY_THONG_TIN_TAI_KHOAN": {
      let thongTinTaiKhoanMoi = { ...state.thongTinNguoiDung };
      thongTinTaiKhoanMoi = action.thongTinTaiKhoan;
      return { ...state, thongTinNguoiDung: thongTinTaiKhoanMoi };
    }
    case "DANG_KY_THANH_CONG": {
      state.dangKy = true;
      return { ...state };
    }
    case "DANG_KY_THAT_BAI": {
      state.dangKy = false;
      return { ...state };
    }
    case "THONG_TIN_GHI_DANH": {
      state.thongTinGhiDanh = action.thongTinGhiDanh;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
