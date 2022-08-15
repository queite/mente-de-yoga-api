module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Doe Admin',
        email: 'example@example.com',
        userPermission: 'admin',
        password: '123456',
      },
      {
        name: 'Doe Read',
        email: 'example1@example.com',
        userPermission: 'read',
        password: '123456',
      },
      {
        name: 'Doe Write',
        email: 'example2@example.com',
        userPermission: 'write',
        password: '123456',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
