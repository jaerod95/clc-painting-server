import Cookies from 'js-cookie';
import { COOKIE_DELETE_USER_TOKEN, COOKIE_SET_USER_TOKEN, COOKIE_GET_USER_TOKEN } from './constants';
import { USER_TOKEN, AUTH_SET_USER_TOKEN } from '../constants';

export default {
  [COOKIE_GET_USER_TOKEN]: ({ commit }) =>
    new Promise(resolve => {
      const token = Cookies.get(USER_TOKEN);
      commit(`auth/${AUTH_SET_USER_TOKEN}`, token, { root: true });
      resolve();
    }),
  [COOKIE_SET_USER_TOKEN]: (_, token) => {
    Cookies.set(USER_TOKEN, token);
  },
  [COOKIE_DELETE_USER_TOKEN]: () => {
    Cookies.remove(USER_TOKEN);
  },
};
