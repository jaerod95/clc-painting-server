//'use strict';

const CHUNK_SIZE = 100;
const casual = require('casual');
const bcrypt = require('bcrypt');

let dateTime = new Date().valueOf() - 100000000;
function getDateTime(updateTime = true) {
  if (updateTime) {
    dateTime += 10000000;
  }
  return dateTime;
}
function getRandInt(getRandom = true) {
  if (getRandom) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.random() * (max - min) + min;
  }
}
function getRandBool(getRandom = true) {
  if (getRandom) {
    rand = Math.round(Math.random())
    return rand
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = []
    let projects = []
    let employees = []
    let assignments = []
    let e = 0
    const statue = 0
    const wonka = 1
    const talmage = 2

    try {
      await queryInterface.removeConstraint('Assignments', 'assignments_ibfk_1', {});
    } catch (error) {
      console.log('assignments constraint 1 does not exist')
    }
    try {
      await queryInterface.removeConstraint('Assignments', 'assignments_ibfk_2', {});
    } catch (error) {
      console.log('assignments constraint 2 does not exist')
    }
    try {
      await queryInterface.removeConstraint('EmployeeSkills', 'employeeskills_ibfk_1', {});
    } catch (error) {
      console.log('employeeSkills 1 constraint does not exist')
    }
    try {
      await queryInterface.removeConstraint('EmployeeSkills', 'employeeskills_ibfk_2', {});
    } catch (error) {
      console.log('employeeSkilss 2 constraint does not exist')
    }
    try {
      await queryInterface.removeConstraint('Chemistries', 'chemistries_ibfk_1', {});
    } catch (error) {
      console.log('chemistry constraint does not exist')
    }
    try {
      await queryInterface.removeConstraint('Projects', 'projects_ibfk_1', {});
    } catch (error) {
      console.log('project constraint does not exist')
    }
    try {
      await queryInterface.removeConstraint('Employees', 'employees_ibfk_1', {});
    } catch (error) {
      console.log('employee constraint does not exist')
    }
    try {
      await queryInterface.removeConstraint('Hours', 'hours_ibfk_1', {});
    } catch (error) {
      console.log('hours constraint does not exist')
    }


    users.push({
      username: 'jason@frenteventures.com',
      password: bcrypt.hashSync('Password1', 10),
      firstName: 'Jason',
      lastName: 'Rodriguez',
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    projects.push({
      title: 'The Statue of Liberty',
      address: casual.address,
      description: casual.description,
      priority: getRandInt(true),
      userId: 1,
      isFinished: false,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),

    });
    projects.push({
      title: 'Willy Wonka\'s Chocolate Factory',
      address: casual.address,
      description: casual.description,
      priority: getRandInt(true),
      userId: 1,
      isFinished: false,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    projects.push({
      title: 'The Talmage Building',
      address: casual.address,
      description: casual.description,
      priority: getRandInt(true),
      userId: 1,
      isFinished: false,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    for (e; e < 5; e++) {
      employees.push({
        firstName: casual.first_name,
        lastName: casual.last_name,
        inAttendance: getRandBool(true),
        userId: 1,
        createdAt: new Date(getDateTime(false)),
        updatedAt: new Date(getDateTime(false)),
      });
    }
    //Employee 1
    assignments.push({
      startTime: new Date('2018-12-10 08:00:00'),
      endTime: new Date('2018-12-10 12:00:00'),
      employeeId: 1,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-10 13:00:00'),
      endTime: new Date('2018-12-10 17:00:00'),
      employeeId: 1,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-11 08:00:00'),
      endTime: new Date('2018-12-11 17:00:00'),
      employeeId: 1,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-12 08:00:00'),
      endTime: new Date('2018-12-12 17:00:00'),
      employeeId: 1,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-13 08:00:00'),
      endTime: new Date('2018-12-13 17:00:00'),
      employeeId: 1,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-14 08:00:00'),
      endTime: new Date('2018-12-14 12:00:00'),
      employeeId: 1,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-14 13:00:00'),
      endTime: new Date('2018-12-14 17:00:00'),
      employeeId: 1,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    //Employee 2
    assignments.push({
      startTime: new Date('2018-12-10 08:00:00'),
      endTime: new Date('2018-12-10 17:00:00'),
      employeeId: 2,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-12 08:00:00'),
      endTime: new Date('2018-12-12 17:00:00'),
      employeeId: 2,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-12 08:00:00'),
      endTime: new Date('2018-12-12 12:00:00'),
      employeeId: 2,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-12 13:00:00'),
      endTime: new Date('2018-12-12 17:00:00'),
      employeeId: 2,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-13 08:00:00'),
      endTime: new Date('2018-12-13 17:00:00'),
      employeeId: 2,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-14 012:00:00'),
      endTime: new Date('2018-12-14 17:00:00'),
      employeeId: 2,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    //Employee 3
    assignments.push({
      startTime: new Date('2018-12-10 08:00:00'),
      endTime: new Date('2018-12-10 17:00:00'),
      employeeId: 1,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-11 08:00:00'),
      endTime: new Date('2018-12-11 17:00:00'),
      employeeId: 3,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-12 08:00:00'),
      endTime: new Date('2018-12-12 17:00:00'),
      employeeId: 3,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-13 08:00:00'),
      endTime: new Date('2018-12-13 17:00:00'),
      employeeId: 3,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-14 08:00:00'),
      endTime: new Date('2018-12-14 17:00:00'),
      employeeId: 3,
      projectId: statue,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    //Employee 4
    assignments.push({
      startTime: new Date('2018-12-11 08:00:00'),
      endTime: new Date('2018-12-11 13:00:00'),
      employeeId: 4,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-11 15:00:00'),
      endTime: new Date('2018-12-11 17:00:00'),
      employeeId: 4,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-13 08:00:00'),
      endTime: new Date('2018-12-13 17:00:00'),
      employeeId: 4,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    assignments.push({
      startTime: new Date('2018-12-14 08:00:00'),
      endTime: new Date('2018-12-14 12:00:00'),
      employeeId: 4,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });
    //Employee 5
    assignments.push({
      startTime: new Date('2018-12-10 08:00:00'),
      endTime: new Date('2018-12-10 17:00:00'),
      employeeId: 5,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    }); assignments.push({
      startTime: new Date('2018-12-11 08:00:00'),
      endTime: new Date('2018-12-11 17:00:00'),
      employeeId: 5,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    }); assignments.push({
      startTime: new Date('2018-12-12 08:00:00'),
      endTime: new Date('2018-12-12 17:00:00'),
      employeeId: 5,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    }); assignments.push({
      startTime: new Date('2018-12-13 08:00:00'),
      endTime: new Date('2018-12-13 17:00:00'),
      employeeId: 5,
      projectId: wonka,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    }); assignments.push({
      startTime: new Date('2018-12-14 10:00:00'),
      endTime: new Date('2018-12-14 16:00:00'),
      employeeId: 5,
      projectId: talmage,
      createdAt: new Date(getDateTime(false)),
      updatedAt: new Date(getDateTime(false)),
    });

    await queryInterface.bulkInsert('Users', users, {
      individualHooks: true,
    });
    users = null;
    users = [];
    await queryInterface.bulkInsert('Projects', projects, {
      individualHooks: true,
    });
    projects = null;
    projects = [];
    await queryInterface.bulkInsert('Employees', employees, {
      individualHooks: true,
    });
    employees = null,
      employees = [];
    await queryInterface.bulkInsert('assignments', assignments, {
      individualHooks: true,
    });
    assignments = null,
      assignments = [];
    return new Promise(resolve => resolve());
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', {}, {});
    await queryInterface.bulkDelete('Users', {}, {});
    await queryInterface.bulkDelete('Employees', {}, {});
    await queryInterface.bulkDelete('Assignments', {}, {});
  },
};
