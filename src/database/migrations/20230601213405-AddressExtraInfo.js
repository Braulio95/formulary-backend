"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AddressExtraInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_of_residency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      other_residency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      people: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Addresses",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AddressExtraInfos");
  },
};
