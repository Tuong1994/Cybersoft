import axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../App";
import {
  accessToken,
  domainBackend,
  taiKhoan,
} from "../../config/setting";
import { layDanhSachKhoaHocPhanTrangBackEndAction } from "./KhoaHocAction";

export const DangKyBackEndAction = (nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/DangKy`,
          method: "POST",
          data: nguoiDung,
        });
        dispatch(DangNhapBackEndAction(nguoiDung));
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: error,
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};

export const DangNhapBackEndAction = (nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/DangNhap`,
          method: "POST",
          data: nguoiDung,
        });

        localStorage.setItem(accessToken, result.data.token);
        localStorage.setItem(taiKhoan, JSON.stringify(result.data));
        dispatch({
          type: "DANG_NHAP",
          taiKhoan: result.data,
        });
        history.push("/");
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};

export const ThongTinTaiKhoanBackEndAction = (nguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyNguoiDung/layThongTinNguoiDung`,
        method: "POST",
        data: nguoiDung,
        headers: {
          Authorization: localStorage.getItem(accessToken),
        },
      });
      dispatch({
        type: "LAY_THONG_TIN_TAI_KHOAN",
        thongTinTaiKhoan: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  };
};

export const CapNhatThongTinBackEndAction = (nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/capNhatNguoiDung`,
          method: "PUT",
          data: nguoiDung,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        localStorage.setItem(taiKhoan, JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        history.push("/thong_tin_hoc_vien");
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};

export const GhiDanhKhoaHocBackEndAction = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/ghiDanhKhoaHoc`,
          method: "POST",
          data: maKhoaHoc,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
        dispatch({
          type: "DANG_KY_THANH_CONG",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};

export const HuyGhiDanhKhoaHocBackEndAction = (maKhoaHoc, trang) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/huyGhiDanhKhoaHoc`,
          method: "POST",
          data: maKhoaHoc,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
        Swal.fire({
          icon: "success",
          title: "Đã hủy thành công",
        });
        dispatch(ThongTinTaiKhoanBackEndAction(maKhoaHoc));
        dispatch(layDanhSachKhoaHocPhanTrangBackEndAction(trang));
        dispatch({
          type: "THONG_TIN_KHOA_HOC_CAP_NHAT",
          khoaHoc: result.data.khoaHoc
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};

export const uploadAvatarAction = (hinhAnh, nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/uploadAvatar`,
          method: "POST",
          data: hinhAnh,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        Swal.fire({
          icon: "success",
          title: "Upload thành công",
        });
        dispatch(ThongTinTaiKhoanBackEndAction(nguoiDung));
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
      }
    }, 1000);
  };
};
