"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "luke_skywalker",
        firstname: "Luke",
        lastname: "Skywalker",
        email: "luke@example.com",
        phone: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "princess_leia",
        firstname: "Princess",
        lastname: "Leia",
        email: "leia@example.com",
        phone: "987654321",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "han_solo",
        firstname: "Han",
        lastname: "Solo",
        email: "han@example.com",
        phone: "555555555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
