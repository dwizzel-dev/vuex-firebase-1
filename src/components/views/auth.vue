<template src="./templates/auth.html"></template>
<script>

// import { mapGetters, mapState, mapActions } from 'vuex';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
  name: 'Auth',
  data() {
    return {
      title: 'Walk With Me!',
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
    document.title = this.title;
  },
  watch: {
  },
  mounted() {
    this.$consolas.log('mounted to Auth');
    const uiConfig = {
      // its doing a double redirect
      // signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
    // }
  },
};
</script>

<style src='./styles/auth.css' scoped></style>
