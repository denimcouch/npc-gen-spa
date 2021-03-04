// initial state
const state = {
  user: {
    username: "",
    password: ""
  }
};

const getters = {
  getUser: state => state.user
};

const actions = {
  saveUser({ commit }, user) {
    commit("setUser", user);
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
