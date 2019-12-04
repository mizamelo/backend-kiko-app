'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', 
    {
      description: DataTypes.STRING
    }, {});

    Category.associate = function(models) {
      Category.hasMany(models.Course);
    };

  return Category;
};