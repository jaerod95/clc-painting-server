import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SET_USER_TOKEN,
  COOKIE_SET_USER_TOKEN,
  COOKIE_DELETE_USER_TOKEN,
  AUTH_DELETE_USER_TOKEN,
  AUTH_VERIFY_USER_TOKEN,
} from '../constants';

import { axios } from '../../plugins/axios';

export default {
  [AUTH_LOGIN]: ({ commit, dispatch }, basicHeader) =>
    new Promise((resolve, reject) => {
      axios({ url: 'login', method: 'POST', headers: basicHeader })
        .then(async response => {
          console.log(response);
          const { token } = await response.data;
          dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
          // // eslint-disable-next-line dot-notation
          axios.defaults.headers.common.Authorization = token;
          commit(AUTH_SET_USER_TOKEN, token);
          // resolve(res);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    }),
  [AUTH_LOGOUT]: ({ commit, dispatch }) =>
    new Promise(resolve => {
      dispatch(`cookie/${COOKIE_DELETE_USER_TOKEN}`, {}, { root: true });
      commit(AUTH_DELETE_USER_TOKEN);
      // eslint-disable-next-line dot-notation
      delete axios.defaults.headers.common['Authorization'];
      // delete Caches and Databases HERE
      // TODO: delete caches and databases
      resolve();
    }),
  [AUTH_VERIFY_USER_TOKEN]: ({ dispatch }) =>
    new Promise((resolve, reject) => {
      axios({ url: 'authenticate', method: 'POST' })
        .then(res => {
          const { token } = res.data;
          dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
          // eslint-disable-next-line dot-notation
          axios.defaults.headers.common['Authorization'] = token;
          resolve();
        })
        .catch(err => {
          dispatch(AUTH_LOGOUT).then(() => {
            reject(err);
          });
        });
    }),
};
