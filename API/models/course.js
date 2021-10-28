"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: "categoryId",
      });
    }
  }
  Course.init(
    {
      tenKhoaHoc: DataTypes.STRING,
      biDanh: DataTypes.STRING,
      moTa: DataTypes.STRING,
      hinhAnh: DataTypes.STRING,
      luotXem: DataTypes.INTEGER,
      danhGia: DataTypes.INTEGER,
      nguoiTao: DataTypes.JSON,
      soLuongHocVien: DataTypes.JSON,
      categoryId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
