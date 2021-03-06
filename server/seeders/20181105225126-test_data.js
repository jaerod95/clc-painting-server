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
    let projects = [];
    let users = [];
    let employees = [];
    let skills = [];
    let hours = [];
    let assignments = [];
    let chemistry = [];
    let employeeSkills = [];
    let chemistries = [];
    let p = 0;
    let u = 0;
    let e = 0;
    let s = 0;
    let h = 0;
    let c = 0;
    let a = 0;
    const NUMBER_OF_CHEMISTRIES = 2;
    const NUMBER_OF_USERS = 5;
    const NUMBER_OF_PROJECTS_PER_USER = 10;
    const NUMBER_OF_EMPLOYEES_ASSIGNED_TO_USERS = 40;
    const SKILLS_PER_EMPLOYEE = 3;
    const NUMBER_SKILLS_TOTAL = 5;
    const NUMBER_OF_ASSIGNMENTS_PER_EMP = 5;
    for (s; s < NUMBER_SKILLS_TOTAL; s++) {
      skills.push({
        name: '',
        id: s,
        createdAt: new Date(getDateTime(false)),
        updatedAt: new Date(getDateTime(false)),
      });
      if (s == 0) {
        skills[0].name = 'Exterior';
      } else if (s == 1) {
        skills[1].name = 'Interior';
      } else if (s == 2) {
        skills[2].name = 'Stain';
      } else if (s == 3) {
        skills[3].name = 'Corners';
      } else if (s == 4) {
        skills[4].name = 'Backroll';
      }
    }
    await queryInterface.bulkInsert('Skills', skills);
    skills = null;
    skills = [];
    console.log('SKILLS');

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


    for (u; u < NUMBER_OF_USERS; u++) {
      users.push({
        username: casual.username,
        password: bcrypt.hashSync('Password1', 10),
        firstName: casual.first_name,
        lastName: casual.last_name,
        createdAt: new Date(getDateTime(false)),
        updatedAt: new Date(getDateTime(false)),
      });
      if (u == 0
        ) {
        users[u].username = 'jason@frenteventures.com';
      }
      for (p; p < NUMBER_OF_PROJECTS_PER_USER; p++) {
        projects.push({
          title: casual.title,
          address: casual.address,
          description: casual.short_description,
          priority: getRandInt(true),
          userId: u,
          isFinished: false,
          createdAt: new Date(getDateTime(false)),
          updatedAt: new Date(getDateTime(false)),
        });
      }
      p = 0;
      console.log('PROJECT');
      for (e; e < NUMBER_OF_EMPLOYEES_ASSIGNED_TO_USERS; e++) {
        employees.push({
          firstName: casual.first_name,
          lastName: casual.last_name,
          inAttendance: getRandBool(true),
          userId: u,
          createdAt: new Date(getDateTime(false)),
          updatedAt: new Date(getDateTime(false)),
        });
        console.log('EMPLOYEE');
        //each employee needs skills, chemistry, hours, and assignments
        //Setting hours for each employee for each day of the week

        //I hard coded the hours for now because casual.time was not what we wanted
        each_day = 1;
        for (each_day; each_day < 7; each_day++) {
          hours.push({
            startTime: '07:00:00',
            endTime: '05:00:00',
            day: each_day,
            employeeId: e,
            createdAt: new Date(getDateTime(false)),
            updatedAt: new Date(getDateTime(false)),
          });
        }
        console.log('HOURS')
        z = 0;
        for (z; z < SKILLS_PER_EMPLOYEE; z++) {
          skills.push({
            skillLevel: getRandInt(true),
            employeeId: e,
            skillId: z, //Math.ceil(getRandInt(true) / 2),
            createdAt: new Date(getDateTime(false)),
            updatedAt: new Date(getDateTime(false)),
          });
        }
        console.log('EMPLOYEE SKILLS')
        c = 0;
        for (c; c < NUMBER_OF_CHEMISTRIES; c++) {
          chemistries.push({
            chemistryLevel: getRandInt(true),
            employeeId: e,
            otherEmployeeId: getRandInt(true),
            createdAt: new Date(getDateTime(false)),
            updatedAt: new Date(getDateTime(false)),
          });
        }
        console.log('CHEMISTRY')
        a = 0;
        for (a; a < NUMBER_OF_ASSIGNMENTS_PER_EMP; a++) {
          assignments.push({
            startTime: new Date(getDateTime(false)),
            endTime: new Date(getDateTime(false)),
            employeeId: e,
            projectId: getRandInt(true),
            createdAt: new Date(getDateTime(false)),
            updatedAt: new Date(getDateTime(false)),
          });
        }

      }
      e = 0;
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
      employees = null;
      employees = [];
      await queryInterface.bulkInsert('Hours', hours, {
        individualHooks: true,
      });
      hours = null;
      hours = [];
      await queryInterface.bulkInsert('EmployeeSkills', skills, {
        individualHooks: true,
      });
      skills = null;
      skills = [];
      await queryInterface.bulkInsert('Chemistries', chemistries, {
        individualHooks: true,
      });
      chemistries = null;
      chemistries = [];
      await queryInterface.bulkInsert('assignments', assignments, {
        individualHooks: true,
      });
      assignments = null;
      assignments = [];
    }

    // await queryInterface.addConstraint('Projects', ['userId'], {
    //   type: 'FOREIGN KEY',
    //   name: 'projects_ibfk_1',
    //   references: {
    //     table: 'Users',
    //     field: 'id',
    //   },
    //   onDelete: 'set NULL',
    //   onUpdate: 'cascade',
    // });

    // await queryInterface.addConstraint('Employees', ['userId'], {
    //   type: 'FOREIGN KEY',
    //   name: 'employees_ibfk_1',
    //   references: {
    //     table: 'Users',
    //     field: 'id',
    //   },
    //   onDelete: 'set NULL',
    //   onUpdate: 'cascade',
    // });
    // await queryInterface.addConstraint('Hours', ['employeeId'], {
    //   type: 'FOREIGN KEY',
    //   name: 'hours_ibfk_1',
    //   references: {
    //     table: 'Employees',
    //     field: 'id',
    //   },
    //   onDelete: 'set NULL',
    //   onUpdate: 'cascade',
    // });
    console.log('DONE');
    return new Promise(resolve => resolve());
  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Projects', {}, {});
    await queryInterface.bulkDelete('Users', {}, {});
    await queryInterface.bulkDelete('Employees', {}, {});
    await queryInterface.bulkDelete('Skills', {}, {});
    await queryInterface.bulkDelete('Hours', {}, {});
    await queryInterface.bulkDelete('EmployeeSkills', {}, {});
    await queryInterface.bulkDelete('Chemistries', {}, {});
    await queryInterface.bulkDelete('Assignments', {}, {});
  },
};
