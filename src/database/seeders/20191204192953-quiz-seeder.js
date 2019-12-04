'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzes', [
    {
      description: faker.name.title(),
      option_1: faker.name.jobDescriptor(),
      option_2: faker.name.jobDescriptor(),
      option_3: faker.name.jobDescriptor(),
      option_4: faker.name.jobDescriptor(),
      answer: 3,
      course_id: 1
    },
    {
      description: faker.name.title(),
      option_1: faker.name.jobDescriptor(),
      option_2: faker.name.jobDescriptor(),
      option_3: faker.name.jobDescriptor(),
      option_4: faker.name.jobDescriptor(),
      answer: 2,
      course_id: 2
    },
    {
      description: faker.name.title(),
      option_1: faker.name.jobDescriptor(),
      option_2: faker.name.jobDescriptor(),
      option_3: faker.name.jobDescriptor(),
      option_4: faker.name.jobDescriptor(),
      answer: 1,
      course_id: 3
    },
    {
      description: faker.lorem.sentences(),
      option_1: faker.lorem.sentence(),
      option_2: faker.lorem.sentence(),
      option_3: faker.lorem.sentence(),
      option_4: faker.lorem.sentence(),
      answer: 4,
      course_id: 4
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
