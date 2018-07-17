/**
 * firestore getters
 */

export default {
  getMessages: state => state.messages,
  getTodos: state => state.todos,
  isTodosLoaded: state => state.local.loaded.todos,
  isMessagesLoaded: state => state.local.loaded.messages,
};
