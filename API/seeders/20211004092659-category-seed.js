"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: "thietke",
          tenDanhMuc: "Thiết kế web",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "frontEnd",
          tenDanhMuc: "Lập trình FrontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "backEnd",
          tenDanhMuc: "Lập trình BackEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fullStack",
          tenDanhMuc: "Lập trình Fullstack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "diDong",
          tenDanhMuc: "Lập trình di động",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "tuDuy",
          tenDanhMuc: "Tư duy lập trình",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {});
  },
};
