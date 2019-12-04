'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [
    {
      title: faker.name.jobDescriptor(),
      description: faker.name.title(),
      image: faker.image.imageUrl(),
      body: faker.lorem.sentence(),
      category_id: 1
    },
    {
      title: faker.name.jobDescriptor(),
      description: faker.name.title(),
      image: faker.image.imageUrl(),
      body: faker.lorem.sentence(),
      category_id: 2
    },
    {
      title: faker.name.jobDescriptor(),
      description: faker.name.title(),
      image: faker.image.imageUrl(),
      body: faker.lorem.sentence(),
      category_id: 2
    },
    {
      title: faker.name.jobDescriptor(),
      description: faker.name.title(),
      image: faker.image.imageUrl(),
      body: faker.lorem.sentence(),
      category_id: 3
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
