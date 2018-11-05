module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
  }, {});

  Assignment.associate = function (models) {
    Assignment.belongsTo(models.Employee);
    Assignment.belongsTo(models.Project);
  };

  return Assignment;
};
