module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
  }, {});
  return Assignment;
};
