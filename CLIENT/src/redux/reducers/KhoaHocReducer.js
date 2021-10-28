const stateDefault = {
  danhMucKhoaHocBackEnd: [],
  danhSachDanhMucVaKhoaHoc: [],
  danhSachKhoaHoc: [],
  danhSachKhoaHocPhanTrang: [],
  danhSachTimKiem: [],
  khoaHocTheoDanhMuc: [],
  thongTinKhoaHoc: {},
};

export const KhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_MUC_KHOA_HOC_BACKEND": {
      state.danhMucKhoaHocBackEnd = action.data;
      return { ...state };
    }
    case "LAY_DANH_SACH_DANH_MUC_VA_KHOA_HOC": {
      state.danhSachDanhMucVaKhoaHoc = action.danhSachDanhMucVaKhoaHoc;
      return { ...state };
    }
    case "LAY_DANH_SACH_KHOA_HOC": {
      state.danhSachKhoaHoc = action.danhSachKhoaHoc;
      return { ...state };
    }
    case "LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG": {
      state.danhSachKhoaHocPhanTrang = action.danhSachKhoaHocPhanTrang;
      return { ...state }
    }
    case "LAY_KHOA_HOC_THEO_DANH_MUC": {
      state.khoaHocTheoDanhMuc = action.data;
      return { ...state };
    }
    case "LAY_THONG_TIN_KHOA_HOC": {
      state.thongTinKhoaHoc = action.data;
      return { ...state };
    }
    case "LAY_KHOA_HOC_TIM_KIEM": {
      state.danhSachTimKiem = action.khoaHocTimKiem;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
