import axios from "axios";
import Swal from "sweetalert2";
import { domainBackend } from "../../config/setting";

export const layDanhMucKhoaHocBackEndAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyKhoaHoc/layDanhMucKhoaHoc`,
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_MUC_KHOA_HOC_BACKEND",
        data: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      })
    }
  };
};

export const layDanhSachDanhMucVaKhoaHocBackEndAction = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_PAGE_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/layDanhSachDanhMucVaKhoaHoc`,
          method: "GET",
        });
        dispatch({
          type: "LAY_DANH_SACH_DANH_MUC_VA_KHOA_HOC",
          danhSachDanhMucVaKhoaHoc: result.data,
        });
        dispatch({
          type: "CLOSE_PAGE_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data
        });
        dispatch({
          type: "CLOSE_PAGE_LOADING"
        })
      }
    }, 1000);
  };
};

export const layDanhSachKhoaHocBackEndAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyKhoaHoc/layDanhSachKhoaHoc`,
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_SACH_KHOA_HOC",
        danhSachKhoaHoc: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      })
    }
  };
};

export const layDanhSachKhoaHocPhanTrangBackEndAction = (trang) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyKhoaHoc/layDanhSachKhoaHocPhanTrang?trang=${trang}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG",
        danhSachKhoaHocPhanTrang: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      })
    }
  };
};

export const layKhoaHocTimKiemBackEndAction = (tenKhoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_PAGE_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/layDanhSachDanhMucVaKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_KHOA_HOC_TIM_KIEM",
          khoaHocTimKiem: result.data,
        });
        dispatch({
          type: "CLOSE_PAGE_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error
        })
        dispatch({
          type: "CLOSE_PAGE_LOADING"
        })
      }
    }, 1000);
  };
};

export const layKhoaHocTheoDanhMucBackEndAction = (maDanhMuc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_PAGE_LOADING",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/layKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_KHOA_HOC_THEO_DANH_MUC",
          data: result.data,
        });
        dispatch({
          type: "CLOSE_PAGE_LOADING",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data
        })
        dispatch({
          type: "CLOSE_PAGE_LOADING",
        })
      }
    }, 1000);
  };
};

export const layThongTinKhoaHocBackEndAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyKhoaHoc/layThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_KHOA_HOC",
        data: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      })
    }
  };
};
