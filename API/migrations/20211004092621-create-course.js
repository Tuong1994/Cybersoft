'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenKhoaHoc: {
        type: Sequelize.STRING
      },
      biDanh: {
        type: Sequelize.STRING
      },
      moTa: {
        type: Sequelize.STRING(2500)
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
      luotXem: {
        type: Sequelize.INTEGER
      },
      danhGia: {
        type: Sequelize.INTEGER
      },
      nguoiTao: {
        type: Sequelize.JSON
      },
      soLuongHocVien: {
        type: Sequelize.JSON
      },
      categoryId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Courses');
  }
};