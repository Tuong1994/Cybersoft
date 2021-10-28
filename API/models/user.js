"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
    }
  }
  User.init(
    {
      taiKhoan: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      email: DataTypes.STRING,
      hoTen: DataTypes.STRING,
      soDt: DataTypes.STRING,
      avatar: DataTypes.STRING,
      maLoaiNguoiDung: DataTypes.STRING,
      chiTietGhiDanh: DataTypes.JSON
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
