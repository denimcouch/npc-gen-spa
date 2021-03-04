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
  fetchUser({ commit }, user) {
    const userObj = {
      user: {
        username: user.username,
        password: user.password
      }
    };

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userObj)
    };

    fetch("http://localhost:3000/api/login", postOptions)
      .then(res => res.json())
      .then(data => {
        window.localStorage.setItem("token", JSON.stringify(data.token));
        commit("setUser", data.user);
      });
  },
  createUser({ commit }, user) {
    const userObj = {
      user: {
        username: user.username,
        password: user.password
      }
    };

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userObj)
    };

    fetch("http://localhost:3000/api/users", postOptions)
      .then(res => res.json())
      .then(data => {
        window.localStorage.setItem("token", JSON.stringify(data.token));
        commit("setUser", data.user);
      });
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
