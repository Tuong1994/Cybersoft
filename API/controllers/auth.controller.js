const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const dangNhap = async (req, res) => {
  const { taiKhoan, matKhau } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    if (nguoiDung) {
      const isAuth = bcryptjs.compareSync(matKhau, nguoiDung.matKhau);
      if (isAuth) {
        const payLoad = {
          maNguoiDung: nguoiDung.id,
          taiKhoan: nguoiDung.taiKhoan,
          matKhau: nguoiDung.matKhau,
          email: nguoiDung.email,
          hoTen: nguoiDung.hoTen,
          soDt: nguoiDung.soDt,
          avatar: nguoiDung.avatar,
          maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
        };
        const secretKey = "prophet456";
        const token = jwt.sign(payLoad, secretKey, {
          expiresIn: 30 * 24 * 60 * 60,
        });
        res.status(200).send({
          thongTinTaiKhoan: payLoad,
          token: token,
        });
      } else {
        res.status(404).send("Mật khẩu không đúng");
      }
    } else {
      res.status(404).send(`Tài khoản ${taiKhoan} không tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const dangKy = async (req, res) => {
  const { taiKhoan, matKhau, email, hoTen, soDt } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);
    const nguoiDung = await User.create({
      taiKhoan,
      matKhau: hashPassword,
      email,
      hoTen,
      soDt,
      maLoaiNguoiDung: "HV",
      chiTietGhiDanh: [],
    });
    res.status(200).send(nguoiDung);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  dangNhap,
  dangKy,
};
