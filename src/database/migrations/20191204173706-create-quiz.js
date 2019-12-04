'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('quizzes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option_1: {
        type: Sequelize.STRING
      },
      option_2: {
        type: Sequelize.STRING
      },
      option_3: {
        type: Sequelize.STRING
      },
      option_4: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "courses",
          key: "id"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        allowNull: false,defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        allowNull: false,defaultValue: Date.now()
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('quizzes');
  }
};
