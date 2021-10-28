const { Category, Course, User, sequelize } = require("../models");

const layDanhMucKhoaHoc = async (req, res) => {
  try {
    const danhMucKhoaHoc = await Category.findAll({
      attributes: [["id", "maDanhMuc"], "tenDanhMuc"],
    });
    res.status(200).send(danhMucKhoaHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const layDanhSachDanhMucVaKhoaHoc = async (req, res) => {
  const { tenKhoaHoc } = req.query;
  try {
    if (tenKhoaHoc) {
      const [result] = await sequelize.query(
        `
        select courses.id as maKhoaHoc, 
        tenKhoaHoc,  
        biDanh, 
        moTa, 
        hinhAnh, 
        luotXem, 
        danhGia, 
        nguoiTao, 
        courses.createdAt as ngayTao, 
        categories.tenDanhMuc,
        categories.id as maDanhMuc from courses
        inner join categories
        on categories.id = courses.categoryId
        where courses.tenKhoaHoc like "%${tenKhoaHoc}%";
      `
      );
      res.status(200).send(result);
      return;
    }
    const danhSachDanhMucVaKhoaHoc = await Category.findAll({
      attributes: [["id", "maDanhMuc"], "tenDanhMuc"],
      include: [
        {
          model: Course,
          as: "danhSachKhoaHoc",
          attributes: [
            ["id", "maKhoaHoc"],
            "tenKhoaHoc",
            "biDanh",
            "moTa",
            "hinhAnh",
            "luotXem",
            "danhGia",
            ["createdAt", "ngayTao"],
            "nguoiTao",
            "soLuongHocVien"
          ],
        },
      ],
    });
    res.status(200).send(danhSachDanhMucVaKhoaHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const layDanhSachKhoaHoc = async (req,  res) => {
  try {
    const [result] = await sequelize.query(
      `
      select courses.id as maKhoaHoc, 
      tenKhoaHoc,  
      biDanh, 
      moTa, 
      hinhAnh, 
      luotXem, 
      danhGia, 
      nguoiTao, 
      soLuongHocVien,
      courses.createdAt as ngayTao, 
      categories.tenDanhMuc,
      categories.id as maDanhMuc from courses
      inner join categories
      on categories.id = courses.categoryId;
      `
    );
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const layDanhSachKhoaHocPhanTrang = async (req, res) => {
  const trang = parseInt(req.query.trang);
  const soLuongKhoaHoc = 4;
  try {
    const [result] = await sequelize.query(
      `
      select courses.id as maKhoaHoc, 
      tenKhoaHoc,  
      biDanh, 
      moTa, 
      hinhAnh, 
      luotXem, 
      danhGia, 
      nguoiTao, 
      soLuongHocVien,
      courses.createdAt as ngayTao, 
      categories.tenDanhMuc,
      categories.id as maDanhMuc from courses
      inner join categories
      on categories.id = courses.categoryId;
      `
    );
    let total = result.length
    if (trang) {
      let start = (trang - 1) * soLuongKhoaHoc;
      let end = start + soLuongKhoaHoc;
      const khoaHocPhanTrang = result.slice(start, end);
      res.status(200).send({
        danhSach: khoaHocPhanTrang,
        tongKhoaHoc: total,
        khoaHocMoiTrang: soLuongKhoaHoc
      });
    } else {
      res.status(200).send({
        danhSach: result,
        tongKhoaHoc: total,
        khoaHocMoiTrang: soLuongKhoaHoc
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const layKhoaHocTheoDanhMuc = async (req, res) => {
  const { maDanhMuc } = req.query;
  try {
    const khoaHoc = await Category.findOne({
      where: {
        id: maDanhMuc,
      },
      attributes: [["id", "maDanhMuc"], "tenDanhMuc"],
      include: [
        {
          model: Course,
          as: "danhSachKhoaHoc",
          attributes: [
            ["id", "maKhoaHoc"],
            "tenKhoaHoc",
            "biDanh",
            "moTa",
            "hinhAnh",
            "luotXem",
            "danhGia",
          ],
        },
      ],
    });
    res.status(200).send(khoaHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const laythongTinKhoaHoc = async (req, res) => {
  const { maKhoaHoc } = req.query;
  try {
    const khoaHoc = await Course.findOne({
      where: {
        id: maKhoaHoc,
      },
      attributes: [
        ["id", "maKhoaHoc"],
        "tenKhoaHoc",
        "biDanh",
        "moTa",
        "hinhAnh",
        "luotXem",
        "danhGia",
        ["createdAt", "ngayTao"],
        "nguoiTao",
        "soLuongHocVien",
      ],
    });
    res.status(200).send(khoaHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const themKhoaHoc = async (req, res) => {
  const { user } = req;
  const {
    maDanhMuc,
    maKhoaHoc,
    tenKhoaHoc,
    biDanh,
    moTa,
  } = req.body;
  try {
    const khoaHoc = await Course.create({
      id: maKhoaHoc,
      tenKhoaHoc,
      biDanh,
      moTa,
      luotXem: 0,
      danhGia: 0,
      nguoiTao: user,
      categoryId: maDanhMuc,
    });
    res.status(200).send(khoaHoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const capNhatKhoaHoc = async (req, res) => {
  const { user } = req;
  const { maKhoaHoc, tenKhoaHoc, biDanh, moTa, luotXem, danhGia } =
    req.body;
  try {
    await Course.update(
      {
        tenKhoaHoc,
        biDanh,
        moTa,
        luotXem,
        danhGia,
        nguoiTao: user,
      },
      {
        where: {
          id: maKhoaHoc,
        },
      }
    );
    res.status(200).send("Cập nhật thành công");
  } catch (error) {
    res.status(500).send("Không thể cập nhật");
  }
};

const xoaKhoaHoc = async (req, res) => {
  const { maKhoaHoc } = req.query;
  try {
    await Course.destroy({
      where: {
        id: maKhoaHoc,
      },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadHinhAnh = async (req, res) => {
  const { file } = req;
  const { maKhoaHoc } = req.query;
  const urlImg = `http://localhost:4000/${file.path}`;
  try {
    const courseUpload = await Course.findOne({
      where: {
        id: maKhoaHoc,
      },
    });
    courseUpload.hinhAnh = urlImg;
    await courseUpload.save();
    res.status(200).send(courseUpload);
  } catch (error) {
    res.status(500).send(error);
  }
};

const ghiDanhKhoaHoc = async (req, res) => {
  const { taiKhoan, maKhoaHoc } = req.body;
  try {
    const hocVien = await User.findOne({
      where: {
        taiKhoan,
      },
      attributes: [
        "id",
        "taiKhoan",
        "email",
        "hoTen",
        "soDt"
      ]
    });
    const khoaHoc = await Course.findOne({
      where: {
        id: maKhoaHoc
      }
    })
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    const chiTietkhoaHoc = await Course.findOne({
      where: {
        id: maKhoaHoc,
      },
      attributes: [
        ["id", "maKhoaHoc"],
        "tenKhoaHoc",
        "biDanh",
        "moTa",
        "hinhAnh",
      ],
    });

    if (khoaHoc.soLuongHocVien === null) {
      khoaHoc.soLuongHocVien = [];
      khoaHoc.soLuongHocVien.push(hocVien);
    } else if (khoaHoc.soLuongHocVien) {
      khoaHoc.soLuongHocVien = [...khoaHoc.soLuongHocVien, hocVien]
    }
    nguoiDung.chiTietGhiDanh = [...nguoiDung.chiTietGhiDanh, chiTietkhoaHoc];
    await khoaHoc.save();
    await nguoiDung.save();
    res.status(200).send({
      message: "Ghi danh thành công",
      nguoiDung: nguoiDung,
    });
  } catch (error) {
    res.status(500).send("Không thể ghi danh");
  }
};

const huyGhiDanhKhoaHoc = async (req, res) => {
  const { taiKhoan, maKhoaHoc } = req.body;
  try {
    const nguoiDung = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    const khoaHoc = await Course.findOne({
      where: {
        id: maKhoaHoc
      }
    })

    const { soLuongHocVien } = khoaHoc;
    const mangHocVien = [...soLuongHocVien];
    let hocVienIndex = mangHocVien.findIndex(hocVien => hocVien.taiKhoan === taiKhoan);
    if (hocVienIndex !== -1) {
      mangHocVien.splice(hocVienIndex, 1);
      khoaHoc.soLuongHocVien = mangHocVien;
      await khoaHoc.save();
    }
    const { chiTietGhiDanh } = nguoiDung;
    const mangGhiDanh = [...chiTietGhiDanh];
    let ghiDanhIndex = mangGhiDanh.findIndex(
      (khoaHoc) => khoaHoc.maKhoaHoc === maKhoaHoc
    );
    if (ghiDanhIndex !== -1) {
      mangGhiDanh.splice(ghiDanhIndex, 1);
      nguoiDung.chiTietGhiDanh = mangGhiDanh;
      await nguoiDung.save();
      res.status(200).send({
        message: "Hủy ghi danh thành công",
        chiTietGhiDanh: nguoiDung.chiTietGhiDanh,
        khoaHoc: khoaHoc
      });
    }
  } catch (error) {
    res.status(500).send("Không thể hủy ghi danh");
  }
};

module.exports = {
  layDanhMucKhoaHoc,
  layDanhSachDanhMucVaKhoaHoc,
  layDanhSachKhoaHoc,
  layDanhSachKhoaHocPhanTrang,
  layKhoaHocTheoDanhMuc,
  laythongTinKhoaHoc,
  themKhoaHoc,
  capNhatKhoaHoc,
  xoaKhoaHoc,
  uploadHinhAnh,
  ghiDanhKhoaHoc,
  huyGhiDanhKhoaHoc,
};
