// mocks the global store

import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import firestore from './firestore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    firestore,
    global,
  },
});
