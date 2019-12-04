'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};
