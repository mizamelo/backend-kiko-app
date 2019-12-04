'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.BLOB,
    body: DataTypes.STRING,
    categories_id: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    Course.belongsTo(models.Category);
    Course.hasMany(models.Quiz);
  };
  return Course;
};