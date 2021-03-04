<template>
  <section class="user-container login">
    <h1 class="login__title">Login</h1>
    <form class="user-form login-form">
      <div class="form-input">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="Enter username" />
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input type="text" name="password" placeholder="Enter password" />
      </div>
      <button class="btn btn-submit" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserLogin",
};
</script>

<style></style>
