'use strict';

module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
    description: DataTypes.STRING,
    option_1: DataTypes.STRING,
    option_2: DataTypes.STRING,
    option_3: DataTypes.STRING,
    option_4: DataTypes.STRING,
    answer: DataTypes.STRING,
    course_id: DataTypes.INTEGER
  }, {});
  Quiz.associate = function(models) {
    Quiz.belongsTo(models.Course);
  };
  return Quiz;
};