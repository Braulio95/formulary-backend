"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("FormalEducationInfos", [
      {
        university_name: "Universidad de Tatooine",
        state: "Tatooine",
        country: "Outer Rim",
        career_name: "Jedi Studies",
        classes_completed: true,
        proof_classes_completed: "Transcript",
        license_completed: false,
        proof_license_completed: null,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        university_name: "Universidad de Coruscant",
        state: "Coruscant",
        country: "Core Worlds",
        career_name: "Political Science",
        classes_completed: true,
        proof_classes_completed: "Diploma",
        license_completed: true,
        proof_license_completed: "License Certificate",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        university_name: "Academia Jedi",
        state: "Unknown",
        country: "Unknown",
        career_name: "Jedi Training",
        classes_completed: false,
        proof_classes_completed: null,
        license_completed: false,
        proof_license_completed: null,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("FormalEducationInfos", null, {});
  },
};
