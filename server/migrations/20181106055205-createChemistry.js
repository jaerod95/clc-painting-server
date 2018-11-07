'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chemistries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chemistryLevel: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      employeeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Employees",
          key: "id"
        }
      },
      otherEmployeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Chemistries')
  }
};
