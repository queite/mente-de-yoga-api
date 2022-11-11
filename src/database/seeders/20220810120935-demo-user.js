const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        name: "Doe Admin",
        email: "example@example.com",
        userPermission: "admin",
        password: bcrypt.hashSync("123456", 3),
      },
      {
        name: "Doe Student",
        email: "student@example.com",
        userPermission: "student",
        password: bcrypt.hashSync("123456", 3),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
