import axios from "axios";
import {
  layDanhSachKhoaHocBackEndAction,
} from "./KhoaHocAction";
import {
  accessToken,
  domainBackend,
} from "../../config/setting";
import Swal from "sweetalert2";

export const layDanhSachNguoiDungBackEndAction = (page) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domainBackend}/api/QuanLyNguoiDung/layDanhSachNguoiDung?trang=${page}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_DANH_SACH_NGUOI_DUNG",
        data: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const themNguoiDungBackEndAction = (nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/themNguoiDung`,
          method: "POST",
          data: nguoiDung,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch(layDanhSachNguoiDungBackEndAction());
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
        });
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

export const capNhatNguoiDungBackEndAction = (nguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/capNhatNguoiDung`,
          method: "PUT",
          data: nguoiDung,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch(layDanhSachNguoiDungBackEndAction());
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
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

export const xoaNguoiDungBackEndAction = (maNguoiDung) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyNguoiDung/xoaNguoiDung?maNguoiDung=${maNguoiDung}`,
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem(accessToken),
          }
        });
        dispatch(layDanhSachNguoiDungBackEndAction());
        dispatch({
          type: "CLOSE_BUTTON_LOADING",
        });
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
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

export const themKhoaHocBackEndAction = (khoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/themKhoaHoc`,
          method: "POST",
          data: khoaHoc,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch(layDanhSachKhoaHocBackEndAction());
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
        });
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

export const themHinhAnhKhoaHocBackEndAction = (hinhAnh, maKhoaHoc, page) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    });
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/uploadHinhAnh?maKhoaHoc=${maKhoaHoc}`,
          method: "POST",
          data: hinhAnh,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          },
        });
        dispatch(layDanhSachKhoaHocBackEndAction(page));
        Swal.fire({
          icon: "success",
          title: "Upload thành công",
        });
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

export const capNhatKhoaHocBackEndAction = (khoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING"
    })
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/capNhatKhoaHoc`,
          method: "PUT",
          data: khoaHoc,
          headers: {
            Authorization: localStorage.getItem(accessToken),
          }
        });
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        })
        dispatch({
          type: "CLOSE_BUTTON_LOADING"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data
        })
        dispatch({
          type: "CLOSE_BUTTON_LOADING"
        })
      }
    }, 1000)
  }
}

export const xoaKhoaHocBackEndAction = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_BUTTON_LOADING",
    })
    setTimeout(async () => {
      try {
        await axios({
          url: `${domainBackend}/api/QuanLyKhoaHoc/xoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem(accessToken)
          }
        });
        dispatch(layDanhSachKhoaHocBackEndAction());
        dispatch({
          type: "CLOSE_BUTTON_LOADING"
        })
        Swal.fire({
          icon: "success",
          title: "Đã xóa thành công"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data
        })
        dispatch({
          type: "CLOSE_BUTTON_LOADING"
        })
      }
    }, 1000)
  }
}