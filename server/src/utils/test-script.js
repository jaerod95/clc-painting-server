import Sequelize from 'sequelize';

const { Op } = Sequelize;
const db = new Sequelize('', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: Op,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default new Promise((resolve, reject) => {
  db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB}`)
    .then(() => {
      console.log('Database Exists');
      return db
        .close()
        .then(() => {
          resolve();
        })
        .catch(err => reject(err));
    })
    .catch(err => reject(err));
});
