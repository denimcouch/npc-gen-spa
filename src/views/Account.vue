<template>
  <main id="account" class="account-page">
    <h1 class="title">{{ this.getUser.username }}</h1>
    <NPCs />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import NPCs from "../components/NPCs";

export default {
  name: "Account",
  components: {
    NPCs
  },
  computed: mapGetters(["getUser"])
};
</script>

<style></style>
