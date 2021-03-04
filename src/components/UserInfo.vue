<template>
  <aside class="user-info">
    <h1 class="user-info__title">{{ user.username }}</h1>
    <button @click="logoutUser" class="btn btn--delete">Logout</button>
  </aside>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserInfo",
  props: ["user"],
  methods: {
    ...mapActions(["saveUser"]),
    logoutUser() {
      window.localStorage.removeItem("token");
      this.saveUser({});
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.user-info .btn--delete {
  transform: scale(0.5);
  font-size: 1.5rem;
}
</style>
