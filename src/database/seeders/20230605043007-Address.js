"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Addresses", [
      {
        id: 1,
        street: "Tatooine St",
        in_between_street_a: "Alderaan Ave",
        in_between_street_b: "Coruscant Blvd",
        city: "Mos Eisley",
        state: "Tatooine",
        country: "Outer Rim",
        zip: "12345",
        proof_of_address: "Residence Permit",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        street: "Hoth Blvd",
        in_between_street_a: "Dagobah Ave",
        in_between_street_b: "Bespin Blvd",
        city: "Echo Base",
        state: "Hoth",
        country: "Outer Rim",
        zip: "54321",
        proof_of_address: "Utility Bill",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        street: "Endor Ave",
        in_between_street_a: "Kashyyyk Blvd",
        in_between_street_b: "Naboo Ave",
        city: "Bright Tree Village",
        state: "Endor",
        country: "Outer Rim",
        zip: "67890",
        proof_of_address: "Bank Statement",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
