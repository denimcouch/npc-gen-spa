<template>
  <main id="user-login">
    <div class="user-options">
      <UserLogin />
      <div class="vertical-divider"></div>
      <UserSignup />
    </div>
  </main>
</template>

<script>
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";
export default {
  name: "Login",
  components: {
    UserLogin,
    UserSignup
  }
};
</script>

<style>
.vertical-divider {
  position: absolute;
  background: #ddd;
  border: 1px solid #ddd;
  height: 100%;
}

.user-options {
  display: flex;
  position: relative;
  max-width: 1200px;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  padding: 3rem 0;
}

.user-form {
  width: 15rem;
  padding: 0 0.5rem;
}

.user-form .form-input {
  margin: 0.7rem 0;
  width: 100%;
}

.user-form .form-input label {
  display: block;
  text-align: left;
  font-size: 1.3rem;
}

.user-form .form-input label::after {
  content: "*";
  color: red;
}

.user-form .form-input input {
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
}

.user-form .btn-submit {
  font-size: 1rem;
  width: 100%;
  margin: auto;
}

.error {
  color: red;
  margin: auto;
  padding: 0.5rem;
  font-size: 0.9rem;
}
</style>
