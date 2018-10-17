import { AUTH_SET_USER_TOKEN, AUTH_DELETE_USER_TOKEN } from './constants';

export default {
  [AUTH_SET_USER_TOKEN]: (state, token) => {
    state.token = token;
  },
  [AUTH_DELETE_USER_TOKEN]: state => {
    state.token = null;
  },
};
