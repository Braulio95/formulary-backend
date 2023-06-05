"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("BankAccountInfos", [
      {
        acc_number: "12345",
        clabe: "98765",
        bank: "Galactic Bank",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        acc_number: "987654",
        clabe: "123456",
        bank: "Interstellar Credit Union",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        acc_number: "555555",
        clabe: "999999",
        bank: "Outer Rim Trust",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
