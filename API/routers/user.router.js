const express = require("express");
const {
  layDanhSachNguoiDung,
  themNguoiDung,
  layThongTinNguoiDung,
  capNhatNguoiDung,
  xoaNguoiDung,
  uploadAvatar,
} = require("../controllers/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/check-verify.middleware");
const { userUpload } = require("../middlewares/upload/upload.middleware");
const {
  kiemTraIdNguoiDung,
  kiemTraTaiKhoan,
} = require("../middlewares/validations/check-exist.middleware");
const userRouter = express.Router();

userRouter.get("/layDanhSachNguoiDung", layDanhSachNguoiDung);

userRouter.post(
  "/layThongTinNguoiDung",
  authenticate,
  layThongTinNguoiDung
);

userRouter.post(
  "/themNguoiDung",
  authenticate,
  authorize(["GV"]),
  kiemTraTaiKhoan,
  themNguoiDung
);

userRouter.put("/capNhatNguoiDung", authenticate, capNhatNguoiDung);

userRouter.delete(
  "/xoaNguoiDung",
  authenticate,
  authorize(["GV"]),
  kiemTraIdNguoiDung,
  xoaNguoiDung
);

userRouter.post("/uploadAvatar", authenticate, userUpload(), uploadAvatar)

module.exports = {
  userRouter,
};
