const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const layDanhSachNguoiDung = async (req, res) => {
  const trang = parseInt(req.query.trang);
  const soLuongHocVien = 10;
  try {
    const danhSachNguoiDung = await User.findAll({
      attributes: [
        ["id", "maNguoiDung"],
        "taiKhoan",
        "matKhau",
        "email",
        "hoTen",
        "soDt",
        "avatar",
        "maLoaiNguoiDung",
      ],
    });
    let total = danhSachNguoiDung.length
    if (trang) {
      let start = (trang - 1) * soLuongHocVien;
      let end = start + soLuongHocVien;
      const HocVienPhanTrang = danhSachNguoiDung.slice(start, end);
      res.status(200).send({
        danhSach: HocVienPhanTrang,
        tongHocVien: total,
        hocVienMoiTrang: soLuongHocVien
      });
      return
    }
    res.status(200).send({
      danhSach: danhSachNguoiDung,
      tongHocVien: total,
      hocVienMoiTrang: soLuongHocVien
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const layThongTinNguoiDung = async (req, res) => {
  const { taiKhoan } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan: taiKhoan,
      },
      attributes: [
        "taiKhoan",
        "matKhau",
        "email",
        "hoTen",
        "soDt",
        "avatar",
        "maLoaiNguoiDung",
        "chiTietGhiDanh",
      ],
    });
    res.status(200).send(nguoiDung);
  } catch (error) {
    res.status(500).send(error);
  }
};

const themNguoiDung = async (req, res) => {
  const { taiKhoan, matKhau, email, hoTen, soDt, maLoaiNguoiDung } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);
    const nguoiDung = await User.create({
      taiKhoan,
      matKhau: hashPassword,
      email,
      hoTen,
      soDt,
      maLoaiNguoiDung,
      chiTietGhiDanh: [],
    });
    res.status(200).send(nguoiDung);
  } catch (error) {
    res.status(500).send(error);
  }
};

const capNhatNguoiDung = async (req, res) => {
  const {
    maNguoiDung,
    taiKhoan,
    matKhau,
    email,
    hoTen,
    soDt,
    maLoaiNguoiDung,
  } = req.body;
  try {
    await User.update(
      { taiKhoan, matKhau, email, hoTen, soDt, maLoaiNguoiDung },
      {
        where: {
          id: maNguoiDung,
        },
      }
    );
    res.status(200).send("Cập nhật thành công");
  } catch (error) {
    res.status(500).send("Không thể cập nhật");
  }
};

const xoaNguoiDung = async (req, res) => {
  const { maNguoiDung } = req.query;
  try {
    await User.destroy({
      where: {
        id: maNguoiDung,
      },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send("Lỗi! không thể xóa");
  }
};

const uploadAvatar = async (req, res) => {
  const { file, user } = req;
  const urlImg = `http://localhost:4000/${file.path}`;
  try {
    const userUpload = await User.findOne({
      where: {
        id: user.maNguoiDung
      }
    });
    userUpload.avatar = urlImg;
    await userUpload.save();
    res.status(200).send(userUpload);
  } catch (error) {
    res.status(500).send("Không thể upload");
    console.log(error);
  }
};

module.exports = {
  layDanhSachNguoiDung,
  layThongTinNguoiDung,
  themNguoiDung,
  capNhatNguoiDung,
  xoaNguoiDung,
  uploadAvatar,
};
