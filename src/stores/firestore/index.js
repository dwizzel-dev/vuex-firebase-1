/**
 * basic firestore
 */

import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
