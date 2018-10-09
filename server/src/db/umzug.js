import UmZug from 'umzug';
import { db } from './index';

const umzug = new UmZug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db,
  },
  migrations: {
    params: [db.getQueryInterface(), db.Sequelize],
  },
});

export default umzug;
