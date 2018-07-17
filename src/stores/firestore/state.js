/**
 * firestore states
 */

export default{
  messages: [],
  todos: [],
  local: { // not firestore but local properties
    loaded: {
      messages: false,
      todos: false,
    },
  },
};
