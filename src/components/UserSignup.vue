<template>
  <section class="user-container signup">
    <h1 class="signup__title">Sign-up</h1>
    <form @submit.prevent="signupUser" class="user-form signup-form">
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
      <button class="btn btn-submit" type="submit">Create Account</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserSignup",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    signupUser() {
      const user = this.user;
      this.createUser(user);
      this.user = {
        username: "",
        password: ""
      };
    }
  }
};
</script>

<style></style>
