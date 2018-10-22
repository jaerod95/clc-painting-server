import { REQUEST_INIT_APPLICATION } from './constants';

export default {
  [REQUEST_INIT_APPLICATION]: () =>
    new Promise(resolve => setTimeout(resolve, 1000)),
};
