export const AUTH_SET_USER_TOKEN = 'AUTH_SET_USER_TOKEN';
export const AUTH_LOGIN = 'AUTH_LOGIN';

// URLS (this should probably be moved to an api calls class or something)
export const AUTH_LOGIN_URL = `${process.env.BASE_URL ||
  'http://localhost:9494'}/login`;
