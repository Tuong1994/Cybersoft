const express = require("express");
const { authRouter } = require("./auth.router");
const { courseRouter } = require("./course.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();

rootRouter.use("/QuanLyNguoiDung", userRouter);
rootRouter.use("/QuanLyNguoiDung", authRouter);

rootRouter.use("/QuanLyKhoaHoc", courseRouter)

module.exports = {
    rootRouter
}