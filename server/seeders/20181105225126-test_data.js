const casual = require('casual');
const bcrypt = require('bcrypt');

const CHUNK_SIZE = 100;

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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let projects = [];
    let users = [];
    let employees = [];
    let skills = [];
    let assignments = [];
    let p = 0;
    let u = 0;
    let s = 0;
    let e = 0;

    const NUMBER_OF_USERS = 5;
    const NUMBER_OF_PROJECTS_PER_USER = 10;
    const NUMBER_OF_EMPLOYEES_ASSIGNED_TO_USERS = 40;
    const SKILLS_PER_EMPLOYEE = 3;
    const NUMBER_SKILLS_TOTAL = 5;

    for (s; s < NUMBER_SKILLS_TOTAL; s++) {
      skills.push({
        name: '',
        createdAt: new Date(getDateTime(false)),
        updatedAt: new Date(getDateTime(false)),
      })
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

    await queryInterface.bulkInsert('Skills', skills, {
      individualHooks: true,
    });
    skills = null;
    skills = [];

    for (u; u < NUMBER_OF_USERS; u++) {
      users.push({
        username: casual.username,
        password: bcrypt.hashSync('Password1', 10),
        firstName: casual.first_name,
        lastName: casual.last_name,
        createdAt: new Date(getDateTime(false)),
        updatedAt: new Date(getDateTime(false)),
      });

      for (p; p < NUMBER_OF_PROJECTS_PER_USER; p++) {
        projects.push({
          title: casual.title,
          address: casual.address,
          description: casual.short_description,
          priority: getRandInt(true),
          //userId: u,
          isFinished: false,
          createdAt: new Date(getDateTime(false)),
          updatedAt: new Date(getDateTime(false)),
        });
      }
      /*
      for (e; e < NUMBER_OF_EMPLOYEES_ASSIGNED_TO_USERS; e++) {
        employees.push({
          firstName: casual.first_name,
          lastName: casual.last_name,
          inAttendance: getRandInt(true) % 2,
          userId: u,
          createdAt: new Date(getDateTime(false)),
          updatedAt: new Date(getDateTime(false)),
        });
        //each employee needs skills, chemistry, hours, and assignments
      }
      */

      /*
      console.log('Users');
      for (let i = 0, j = employees.length; i < j; i += CHUNK_SIZE) {
        await queryInterface.bulkInsert(
          'Employees', employees.slice(i, i + CHUNK_SIZE),
          {
            individualHooks: true,
          },
        );
      };
      employees = null;
      employees = [];
      */
      await queryInterface.bulkInsert('Users', users, {
        individualHooks: true,
      });
      users = null;
      users = [];
      /*
      console.log('Projects');
      await queryInterface.bulkInsert('Projects', projects, {
        individualHooks: true,
      });
      projects = null;
      projects = [];
      */
    }
    console.log('DONE');
    return new Promise(resolve => resolve());

  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    //How do you know how many empty objects to put in...?
    await queryInterface.bulkDelete('Projects', {}, {});
    await queryInterface.bulkDelete('Users', {}, {});
    //await queryInterface.bulkDelete('Employees', {}, {});
    await queryInterface.bulkDelete('Skills', {}, {});
    //await queryInterface.bulkDelete('Assignments', {}, {});
  },
};
