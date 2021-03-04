<template>
  <section class="user-container signup">
    <h1 class="signup__title">Sign-up</h1>
    <form class="user-form signup-form">
      <div class="form-input">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="Enter username" />
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input type="text" name="password" placeholder="Enter password" />
      </div>
      <button class="btn btn-submit" type="submit">Create Account</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserSignup"
};
</script>

<style></style>
