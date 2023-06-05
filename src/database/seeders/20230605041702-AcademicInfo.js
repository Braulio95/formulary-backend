"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("AcademicInfos", [
      {
        software_devel_comments: "Some comments 1",
        degree_level: "Bachelor",
        informal_education: "Online courses",
        other_education: "Workshops",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        software_devel_comments: "Some comments 2",
        degree_level: "Master",
        informal_education: "Self-study",
        other_education: "Seminars",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        software_devel_comments: "Some comments 3",
        degree_level: "PhD",
        informal_education: "Tutorials",
        other_education: "Conferences",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AcademicInfos", null, {});
  },
};
