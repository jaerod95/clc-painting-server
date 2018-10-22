import { AUTH_LOGIN, AUTH_LOGOUT } from './constants';

export default {
  [AUTH_LOGIN]: () =>
    new Promise(resolve => {
      resolve();
      // console.log(reject);
      //   fetch(AUTH_LOGIN_URL)
      //     .then(response => {
      //       resolve(response);
      //     })
      //     .catch(error => {
      //       reject(error);
      //     });
    }),
  [AUTH_LOGOUT]: () =>
    new Promise((resolve, reject) => {
      if (true) resolve();
      else reject();
    }),
};
