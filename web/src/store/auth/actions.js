import { AUTH_LOGIN, AUTH_LOGIN_URL } from './constants';

export default {
  [AUTH_LOGIN]: () =>
    new Promise((resolve, reject) => {
      fetch(AUTH_LOGIN_URL)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    }),
};
