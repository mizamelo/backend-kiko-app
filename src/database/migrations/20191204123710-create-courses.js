'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('courses', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB
      },
      body: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        }
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
    return queryInterface.dropTable('courses');
  }
};
