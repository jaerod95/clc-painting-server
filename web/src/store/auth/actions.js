import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_USER_TOKEN } from './constants';

export default {
  [AUTH_LOGIN]: ({ commit }, basicHeader) =>
    new Promise((resolve, reject) => {
      console.log(basicHeader);
      console.log(`${process.env.VUE_APP_ROOT_API_URL}/login`);

      fetch(`${process.env.VUE_APP_ROOT_API_URL}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: basicHeader,
      })
        .then(async response => {
          const { token } = await response.json();
          // dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
          // // eslint-disable-next-line dot-notation
          // axios.defaults.headers.common['Authorization'] = token;
          commit(AUTH_SET_USER_TOKEN, token);
          // resolve(res);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    }),
  [AUTH_LOGOUT]: () =>
    new Promise((resolve, reject) => {
      if (true) resolve();
      else reject();
    }),
};
