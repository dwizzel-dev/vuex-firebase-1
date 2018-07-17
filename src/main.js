// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '@/functions/onLoad'; // will init on load
import consolas from '@/plugins/consolas';
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';
import store from './stores';

Vue.use(consolas);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    this.$router.push('/');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$consolas.log('redirect to Home');
        this.$router.push('/home');
      } else {
        this.$consolas.log('redirect to Auth');
        this.$router.push('/auth');
      }
    });
  },
});
