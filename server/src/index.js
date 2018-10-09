import './config';
import express from 'express';
import chalk from 'chalk';
import { ApolloEngine } from 'apollo-engine';

import checkThatDatabaseExists from './utils/test-script';
import configureApp from './utils/configureApp';
import configureApi from './utils/configureApi';
import umzug from './db/umzug';

// setup
const port = process.env.PORT || 9494;
const app = express();
const router = express.Router();

configureApp(app);
configureApi(router);
app.use('/v1', router);

// Error Catching, and sending back
// eslint-disable-next-line
app.use((error, req, res, next) => {
  console.error(error);
  res.status(400).json({ error });
});

// setup apollo engine
const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});

checkThatDatabaseExists.then(() => {
  umzug.up().then(migrations => {
    migrations.forEach(val => {
      console.log(val);
    });
    engine.listen(
      {
        port,
        graphqlPaths: ['/v1/graphql'],
        expressApp: app,
        launcherOptions: {
          startupTimeout: 4000,
        },
      },
      () => {
        console.info(
          `${chalk.cyan('Server running on http://localhost:')}${chalk.green(
            port,
          )}\n`,
        );
      },
    );
  });
});
