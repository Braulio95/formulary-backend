"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Skills", [
      {
        preferred_programming_language: "JavaScript",
        experience: "Intermediate",
        disability: "None",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        preferred_programming_language: "Python",
        experience: "Advanced",
        disability: "Visual impairment",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        preferred_programming_language: "Java",
        experience: "Beginner",
        disability: "Hearing impairment",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Skills", null, {});
  },
};
