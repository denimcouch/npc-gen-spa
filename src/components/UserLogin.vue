<template>
  <section class="user-container login">
    <h1 class="login__title">Login</h1>
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
      }
    };
  },
  methods: {
    ...mapActions(["fetchUser"]),
    loginUser() {
      const user = this.user;
      this.fetchUser(user);
      this.user = {
        username: "",
        password: ""
      };
    }
  }
};
</script>

<style></style>
