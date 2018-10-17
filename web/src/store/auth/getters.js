import { IS_AUTHENTICATED } from './constants';

export default {
  [IS_AUTHENTICATED]: state => !!state.token,
  token: state => state.token,
};
