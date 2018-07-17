
import consolas from '@/functions/consolas';
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import firestore from './firestore';

Vue.use(Vuex);

// observer on mutations
const mutationObserver = (store) => {
  store.subscribe((mutation) => {
    consolas.log('-- mutations --');
    consolas.log(mutation);
  });
};

export default new Vuex.Store({
  strict: true,
  modules: {
    global, // the other stores have to be namespaced
    firestore, // there can only be one firestore store and its in rootStore
  },
  plugins: [
    mutationObserver,
  ],
});
