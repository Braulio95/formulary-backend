"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("PersonalInfos", [
      {
        name: "Luke",
        last_name: "Skywalker",
        second_lastname: "",
        gender: "Male",
        gender_other: "",
        date_of_birth: new Date("1977-05-19"),
        city_of_birth: "Mos Eisley",
        state_of_birth: "Tatooine",
        country_of_birth: "Outer Rim Territories",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Leia",
        last_name: "Organa",
        second_lastname: "Solo",
        gender: "Female",
        gender_other: "",
        date_of_birth: new Date("1977-05-19"),
        city_of_birth: "Polis Massa",
        state_of_birth: "Alderaan",
        country_of_birth: "Outer Rim Territories",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Han",
        last_name: "Solo",
        second_lastname: "",
        gender: "Male",
        gender_other: "",
        date_of_birth: new Date("1977-07-13"),
        city_of_birth: "Corellia",
        state_of_birth: "Unknown",
        country_of_birth: "Core Worlds",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PersonalInfos", null, {});
  },
};
