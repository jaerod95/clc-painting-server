export const AUTH_SET_USER_TOKEN = 'AUTH_SET_USER_TOKEN';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const ON_AUTH_STATE_CHANGE = 'ON_AUTH_STATE_CHANGE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

// URLS (this should probably be moved to an api calls class or something)
export const AUTH_LOGIN_URL = `${process.env.ROOT_API_URL ||
  'http://localhost:9494'}/login`;
