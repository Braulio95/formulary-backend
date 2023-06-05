"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AddressExtraInfos", [
      {
        type_of_residency: "Casa",
        other_residency: "",
        people: "alone",
        address_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_of_residency: "Apartamento",
        other_residency: "",
        people: "alone",
        address_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_of_residency: "Casa",
        other_residency: "",
        people: "alone",
        address_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AddressExtraInfos", null, {});
  },
};
