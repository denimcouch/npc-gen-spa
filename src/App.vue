<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-bind:user="this.user">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login" v-on:login-user="loginUser">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    loginUser(user) {
      console.log("user passed up to App", user);
    }
  }
};
</script>

<style>
:root {
  --primary-color: #32d395;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-bottom: 2rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: 0.2s ease-in-out;
}

#nav a:active,
#nav a:hover {
  color: #32d395;
}

.btn {
  display: inline-block;
  border: none;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background: #fff;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  transition: 0.1s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
  background: var(--primary-color);
  color: #fff;
}

.btn:focus,
.btn:active {
  outline-color: transparent;
}

.btn--delete {
  background: #d33d32;
  color: #fff;
}
</style>
