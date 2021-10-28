const express = require("express");
const {
  layDanhMucKhoaHoc,
  layDanhSachDanhMucVaKhoaHoc,
  layKhoaHocTheoDanhMuc,
  themKhoaHoc,
  capNhatKhoaHoc,
  xoaKhoaHoc,
  uploadHinhAnh,
  ghiDanhKhoaHoc,
  huyGhiDanhKhoaHoc,
  laythongTinKhoaHoc,
  layDanhSachKhoaHoc,
  layDanhSachKhoaHocPhanTrang,
} = require("../controllers/course.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/check-verify.middleware");
const { courseUpload } = require("../middlewares/upload/upload.middleware");
const { kiemTraChiTietGhiDanh, kiemTraChiTietGhiDanhTonTai, kiemTraIdKhoaHoc } = require("../middlewares/validations/check-exist.middleware");
const courseRouter = express.Router();

courseRouter.get("/layDanhMucKhoaHoc", layDanhMucKhoaHoc);

courseRouter.get("/layDanhSachDanhMucVaKhoaHoc", layDanhSachDanhMucVaKhoaHoc);

courseRouter.get("/layDanhSachKhoaHoc", layDanhSachKhoaHoc);

courseRouter.get("/layDanhSachKhoaHocPhanTrang", layDanhSachKhoaHocPhanTrang)

courseRouter.get("/layKhoaHocTheoDanhMuc", layKhoaHocTheoDanhMuc);

courseRouter.get("/layThongTinKhoaHoc", laythongTinKhoaHoc);

courseRouter.post("/themKhoaHoc", authenticate, authorize(["GV"]), kiemTraIdKhoaHoc, themKhoaHoc);

courseRouter.put(
  "/capNhatKhoaHoc",
  authenticate,
  authorize(["GV"]),
  capNhatKhoaHoc
);

courseRouter.delete("/xoaKhoaHoc", authenticate, authorize(["GV"]), xoaKhoaHoc);

courseRouter.post(
  "/uploadHinhAnh",
  authenticate,
  authorize(["GV"]),
  courseUpload(),
  uploadHinhAnh
);

courseRouter.post(
  "/ghiDanhKhoaHoc",
  authenticate,
  kiemTraChiTietGhiDanh,
  ghiDanhKhoaHoc);

courseRouter.post(
  "/huyGhiDanhKhoaHoc",
  authenticate,
  kiemTraChiTietGhiDanhTonTai,
  huyGhiDanhKhoaHoc);

module.exports = {
  courseRouter,
};
