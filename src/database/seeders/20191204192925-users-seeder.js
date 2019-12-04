'use strict';

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123456', 8);
    
    return queryInterface.bulkInsert('users', [{
      name: faker.name.findName(),
      email: 'admin@admin.com',
      password_hash: password
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
