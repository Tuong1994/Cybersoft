const { User, Course } = require("../../models");

const kiemTraIdNguoiDung = async (req, res, next) => {
  const { maNguoiDung } = req.query;
  try {
    const nguoiDung = await User.findOne({
      where: {
        id: maNguoiDung
      }
    })
    if (nguoiDung) {
      next();
    } else {
      res.status(404).send(`Mã người dùng ${maNguoiDung} không tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const kiemTraTaiKhoan = async (req, res, next) => {
  const { taiKhoan } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan: taiKhoan,
      },
    });
    if (!nguoiDung) {
      next();
    } else {
      res.status(403).send(`Tài khoản ${taiKhoan} đã tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const kiemTraChiTietGhiDanh = async (req, res, next) => {
  const { taiKhoan, maKhoaHoc } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    const { chiTietGhiDanh } = nguoiDung;
    const index = chiTietGhiDanh.findIndex(
      (khoaHoc) => (khoaHoc.maKhoaHoc === maKhoaHoc)
    );
    if (index === -1) {
      next();
    } else {
      res.status(403).send("Bạn đã đăng ký khóa học này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const kiemTraChiTietGhiDanhTonTai = async (req, res, next) => {
  const { taiKhoan, maKhoaHoc } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    const { chiTietGhiDanh } = nguoiDung;
    const index = chiTietGhiDanh?.findIndex(
      (khoaHoc) => (khoaHoc.maKhoaHoc === maKhoaHoc)
    );
    if (index > -1) {
      next();
    } else {
      res.status(404).send(`Mã khóa học ${maKhoaHoc} không tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const kiemTraIdKhoaHoc = async (req, res, next) => {
  const { maKhoaHoc } = req.body;
  try {
    const khoaHoc = await Course.findOne({
      where: {
        id: maKhoaHoc
      }
    });
    if (khoaHoc) {
      next();
    } else {
      res.status(400).send(`Mã khóa học ${maKhoaHoc} đã tồn tại`)
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  kiemTraIdNguoiDung,
  kiemTraTaiKhoan,
  kiemTraChiTietGhiDanh,
  kiemTraChiTietGhiDanhTonTai,
  kiemTraIdKhoaHoc,
};
