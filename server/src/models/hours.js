module.exports = function hours(sequelize, DataTypes) {
  const Hours = sequelize.define('Hours', {
    startTime: {
      type: DataTypes.TIME,
    },
    endTime: {
      type: DataTypes.TIME,
    },
    day: {
      type: DataTypes.STRING,
    },
  }, {});

  Hours.associate = function associate(models) {
    Hours.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' });
  };

  return Hours;
};
