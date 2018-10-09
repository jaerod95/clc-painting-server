import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import morganBody from 'morgan-body';

export default app => {
  /* eslint-disable */
  /* This section sets up morgan, to log http requests and responses */
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.APPLICATION_CONTEXT === 'production'
  ) {
    app.use(
      morgan('combined', {
        skip: (req, res) => {
          if (req.url.includes('/health')) {
            return true;
          }
          return false;
        },
      }),
    );
  } else {
    app.use(
      morgan('dev', {
        skip: (req, res) => {
          if (res.statusCode >= 400 || req.url.includes('/health')) return true;
          return false;
        },
        stream: process.stdout,
      }),
    );
    app.use(
      morgan('dev', {
        skip: (req, res) => {
          if (res.statusCode < 400 || req.url.includes('/health')) return true;
          return false;
        },
        stream: process.stderr,
      }),
    );
  }
  /* eslint-enable */

  // Allows Cors requests
  app.use(cors());

  // Parses request body into json
  app.use(bodyParser.json());

  // morgan Body shows the body or requests and responses
  if (
    /* eslint-disable */
    process.env.APPLICATION_CONTEXT === 'staging' ||
    process.env.NODE_ENV === 'development'
    /* eslint-enable */
  ) {
    morganBody(app);
  }

  // set JSON response formatting
  app.set('json spaces', 2);
  // eslint-disable-next-line
  app.kill = () => {
    process.exit(1000);
  };

  // Requires HTTPS on production
  app.use((req, res, next) => {
    /* eslint-disable */
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.APPLICATION_CONTEXT !== 'local' &&
      !req.secure &&
      req.get('X-Forwarded-Proto') !== 'https'
    ) {
      /* eslint-enable */
      res.redirect(`https://${req.get('Host')}${req.url}`);
    } else next();
  });
};
