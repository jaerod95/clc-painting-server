import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from '../graphql';
import pjson from '../../package.json';
import { authenticate, checkAuth, login } from '../controllers/authController';

export default router => {
  // global controller
  // This Adds the API version to each header which is defined in the package.json
  router.get('/*', (req, res, next) => {
    res.header('API_Version', pjson.version);
    next();
  });
  // Auth Routes
  // router.post('/register', authController.register);

  router
    .route('/login')
    .get(login)
    .post(login);

  router.route('/authenticate').all(authenticate);

  // GRAPHQL Route
  router.all('/graphql', [
    checkAuth,
    graphqlExpress({
      schema,
      tracing: true,
    }),
  ]);
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
