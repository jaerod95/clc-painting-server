// import { axios } from 'plugins/axios';
// import {
//   AUTH_SET_USER_TOKEN,
//   AUTH_DELETE_USER_TOKEN,
//   AUTH_VERIFY_USER_TOKEN,
//   AUTH_LOGIN,
//   AUTH_REGISTER,
//   AUTH_LOGOUT,
//   COOKIE_SET_USER_TOKEN,
//   COOKIE_DELETE_USER_TOKEN,
// } from '../constants';

export default {
  // [AUTH_LOGIN]: ({ dispatch, commit }, basicHeader) =>
  //   new Promise((resolve, reject) => {
  //     axios({ url: 'login', method: 'POST', headers: basicHeader })
  //       .then(res => {
  //         const { token } = res.data;
  //         dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
  //         // eslint-disable-next-line dot-notation
  //         axios.defaults.headers.common['Authorization'] = token;
  //         commit(AUTH_SET_USER_TOKEN, token);
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         dispatch(AUTH_LOGOUT).then(() => {
  //           if (err.response) {
  //             if (err.response.data) {
  //               reject(err.response.data);
  //             }
  //           }
  //           reject(err);
  //         });
  //       });
  //   }),
  // // Clears Caches/Databases and sends ON_AUTH_STATE_CHANGE event (false)
  // [AUTH_LOGOUT]: ({ commit, dispatch }) =>
  //   new Promise(resolve => {
  //     dispatch(`cookie/${COOKIE_DELETE_USER_TOKEN}`, {}, { root: true });
  //     commit(AUTH_DELETE_USER_TOKEN);
  //     // eslint-disable-next-line dot-notation
  //     delete axios.defaults.headers.common['Authorization'];
  //     // delete Caches and Databases HERE
  //     // TODO: delete caches and databases
  //     resolve();
  //   }),
  // [AUTH_REGISTER]: ({ commit, dispatch }, args) =>
  //   new Promise((resolve, reject) => {
  //     axios({
  //       url: 'register',
  //       method: 'POST',
  //       headers: args.Authorization,
  //       data: args.payload,
  //     })
  //       .then(res => {
  //         const { token } = res.data;
  //         dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
  //         // eslint-disable-next-line dot-notation
  //         axios.defaults.headers.common['Authorization'] = token;
  //         commit(AUTH_SET_USER_TOKEN, token);
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         dispatch(AUTH_LOGOUT).then(() => {
  //           if (err.response) {
  //             if (err.response.data) {
  //               reject(err.response.data);
  //             }
  //           }
  //           reject(err);
  //         });
  //       });
  //   }),
  // [AUTH_VERIFY_USER_TOKEN]: ({ dispatch }) =>
  //   new Promise((resolve, reject) => {
  //     axios({ url: 'authenticate', method: 'POST' })
  //       .then(res => {
  //         const { token } = res.data;
  //         dispatch(`cookie/${COOKIE_SET_USER_TOKEN}`, token, { root: true });
  //         // eslint-disable-next-line dot-notation
  //         axios.defaults.headers.common['Authorization'] = token;
  //         resolve();
  //       })
  //       .catch(err => {
  //         dispatch(AUTH_LOGOUT).then(() => {
  //           reject(err);
  //         });
  //       });
  //   }),
};
