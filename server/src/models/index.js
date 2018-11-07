import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line
const pathToConfig = path.resolve('./config/config.json');
const config = JSON.parse(fs.readFileSync(pathToConfig, 'utf8'))[env];
const db = {};
let sequelize;

if (config.use_env_constiable) {
  sequelize = new Sequelize(process.env[config.use_env_constiable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(path.resolve('./src/models'))
  .filter(
    file =>
      // eslint-disable-next-line
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach(file => {
    //
    const model = sequelize.import(
      path.join(path.resolve('./src/models'), file),
    );
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
