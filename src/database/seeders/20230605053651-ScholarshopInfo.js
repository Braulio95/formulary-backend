"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("ScholarshipInfos", [
      {
        level: "Bachelor",
        kind: "Merit-based",
        period: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        level: "Master",
        kind: "Need-based",
        period: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        level: "PhD",
        kind: "Research-based",
        period: 5,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ScholarshipInfos", null, {});
  },
};
