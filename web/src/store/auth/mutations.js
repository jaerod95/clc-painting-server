import { AUTH_SET_USER_TOKEN, START_LOADING, STOP_LOADING } from './constants';

export default {
  [AUTH_SET_USER_TOKEN]: (state, token) => {
    state.token = token;
  },
  [START_LOADING]: state => {
    state.isLoading = true;
  },
  [STOP_LOADING]: state => {
    state.isLoading = false;
  },
};
