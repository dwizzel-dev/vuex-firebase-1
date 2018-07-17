
const state = {
  messages: [{ message: 'message 1' }],
  todos: [{ todo: 'todo 1' }],
  local: {
    loaded: {
      messages: true,
      todos: true,
    },
  },
};

const getters = {
  getMessages: jest.fn().mockReturnValue(state.messages),
  getTodos: jest.fn().mockReturnValue(state.todos),
  isTodosLoaded: jest.fn().mockReturnValue(state.local.loaded.todos),
  isMessagesLoaded: jest.fn().mockReturnValue(state.local.loaded.messages),
};

const mutations = {
  setLoaded: jest.fn(),
};

const actions = {
  setRef: jest.fn(),
  setRefByName: jest.fn(),
  initAllRef: jest.fn(),
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
