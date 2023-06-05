"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("GovernmentInfos", [
      {
        curp: "CURP1",
        identification_number: "ID1",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        curp: "CURP2",
        identification_number: "ID2",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        curp: "CURP3",
        identification_number: "ID3",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
  },
};
