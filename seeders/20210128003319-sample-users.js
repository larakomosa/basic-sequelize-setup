'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Scott',
        lastName: 'Bromander',
        email: "scottbromander@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Rachael',
        lastName: 'Bromander',
        email: "rachaelbromander@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jackson',
        lastName: 'Bromander',
        email: "jacksonbromander@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], 
    {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
