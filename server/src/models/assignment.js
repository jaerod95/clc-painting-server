module.exports = function assignment(sequelize, DataTypes) {
  const Assignment = sequelize.define('Assignment', {
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
  }, {});

  Assignment.associate = function associate(models) {
    Assignment.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' });
    Assignment.belongsTo(models.Project, { as: 'project', foreignKey: 'projectId' });
  };

  return Assignment;
};
