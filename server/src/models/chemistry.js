module.exports = function chemistry(sequelize, DataTypes) {
  const Chemistry = sequelize.define('Chemistry', {
    otherEmployeeId: {
      type: DataTypes.INTEGER,
    },
    chemistryLevel: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Chemistry.associate = function associate(models) {
    Chemistry.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' });
  };

  return Chemistry;
};
