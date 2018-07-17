<template src="./templates/home.html"></template>
<script>

import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome Home!',
    };
  },
  computed: {
    ...mapState('global', [ // global storage
      'author',
    ]),
    ...mapGetters('global', [ // global storage
      'getName',
      'getVersion',
    ]),
    ...mapGetters([ // root storage for firestore vuexstore
      'getMessages',
      'getTodos',
      'isTodosLoaded',
      'isMessagesLoaded',
    ]),
    ...mapState([ // root storage for firestore vuexstore, !!! dont work for now !!!
      'messages',
      'todos',
    ]),
  },
  methods: {
    ...mapActions([ // root storage for firestore vuexstore
      'initAllRef',
      'setRefByName',
    ]),
  },
  created() {
    document.title = `${this.title}`;
    // this.initAllRef();
    this.setRefByName({ name: 'messages', storeRef: this.$store }).then(() => this.$consolas.log('loading messages'));
    this.setRefByName({ name: 'todos', storeRef: this.$store }).then(() => this.$consolas.log('loading todos'));
    this.$consolas.log(`${this.$options.name} View is created!`);
    this.$consolas.log(this.author);
  },
  watch: {
    getMessages() {
      this.$consolas.log('-- watch --');
      this.$consolas.log(this.getMessages);
    },
    getTodos() {
      this.$consolas.log('-- watch --');
      this.$consolas.log(this.getTodos);
    },
  },
};
</script>

<style src='./styles/home.css' scoped></style>
