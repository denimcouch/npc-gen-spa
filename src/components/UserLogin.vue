<template>
  <section class="user-container login">
    <h1 class="login__title">Login</h1>
    <p class="error" v-if="error !== ''">{{ error }}.</p>
    <form @submit.prevent="loginUser" class="user-form login-form">
      <div class="form-input">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="user.username"
          name="username"
          placeholder="Enter username"
        />
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input
          type="text"
          v-model="user.password"
          name="password"
          placeholder="Enter password"
        />
      </div>
      <button class="btn btn-submit" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserLogin",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    ...mapActions(["fetchUser"]),
    loginUser() {
      this.error = "";
      const user = this.user;

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
          if (data.error !== undefined) {
            this.error = data.error;
          } else {
            window.localStorage.setItem("token", JSON.stringify(data.token));
            this.fetchUser(data.user);
          }
        })
        .catch(error => console.log(error));
      this.user = {
        username: "",
        password: ""
      };
    }
  }
};
</script>

<style></style>
