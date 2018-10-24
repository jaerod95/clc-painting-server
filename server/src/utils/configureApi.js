import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from '../graphql';
import pjson from '../../package.json';

export default router => {
  // global controller
  // This Adds the API version to each header which is defined in the package.json
  router.get('/*', (req, res, next) => {
    res.header('API_Version', pjson.version);
    next();
  });
  // Auth Routes
  // router.post('/register', authController.register);
  // router
  //   .route('/login')
  //   .get(authController.login)
  //   .post(authController.login);
  // router.post('/authenticate', authController.authenticate);

  // GRAPHQL Route
  router.all(
    '/graphql',
    graphqlExpress({
      schema,
      tracing: true,
    }),
  );
  router.get('/graphiql', graphiqlExpress({ endpointURL: '/v1/graphql' }));

  router.all('/health', (req, res) => {
    res.send('ok');
  });

  router.get('/', (req, res) => {
    res.send({
      version: pjson.version,
    });
  });
};
