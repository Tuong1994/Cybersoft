const express = require("express");
const { dangNhap, dangKy } = require("../controllers/auth.controller");
const {
  kiemTraTaiKhoan,
} = require("../middlewares/validations/check-exist.middleware");
const authRouter = express.Router();

authRouter.post("/DangNhap", dangNhap);
authRouter.post("/DangKy", kiemTraTaiKhoan, dangKy);

module.exports = {
  authRouter,
};
