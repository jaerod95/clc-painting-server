import path from 'path';

/* eslint-disable */
process.env.NODE_ENV !== 'test'
  ? require('dotenv').config({ path: path.resolve('.env') })
  : require('dotenv').config({
      path: path.resolve('.env.test'),
    });
/* eslint-enable */
