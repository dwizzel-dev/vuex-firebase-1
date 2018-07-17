/**
 * basic console plugin
 */

import consolas from '@/functions/consolas';

export default {
  install: (Vue) => {
    Object.defineProperty(
      Vue.prototype,
      '$consolas',
      { value: consolas },
    );
  },
};
