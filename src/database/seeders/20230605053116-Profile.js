"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Profiles", [
      {
        phone: "+123456789",
        country_code: "+1",
        email: "luke.skywalker@example.com",
        alt_email: "",
        reference: "Jedi Order",
        other_reference: "",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: "+987654321",
        country_code: "+1",
        email: "leia.organa@example.com",
        alt_email: "",
        reference: "Rebel Alliance",
        other_reference: "",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: "+555555555",
        country_code: "+1",
        email: "han.solo@example.com",
        alt_email: "",
        reference: "Millennium Falcon",
        other_reference: "",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
