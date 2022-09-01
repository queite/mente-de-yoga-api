const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Doe Admin',
        email: 'example@example.com',
        userPermission: 'admin',
        password: bcrypt.hashSync('123456', 3),
      },
      {
        name: 'Doe Read',
        email: 'example1@example.com',
        userPermission: 'read',
        password:  bcrypt.hashSync('123456', 3),
      },
      {
        name: 'Doe Write',
        email: 'example2@example.com',
        userPermission: 'write',
        password: bcrypt.hashSync('123456', 3),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
