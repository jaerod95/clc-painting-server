module.exports = (sequelize, DataTypes) => {
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

  Hours.associate = function (models) {
    Hours.belongsTo(models.Employee);
  };

  return Hours;
};
