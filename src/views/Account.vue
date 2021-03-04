<template>
  <main id="account" class="account-page">Account</main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Account",
  computed: mapGetters(["getUser"])
};
</script>

<style></style>
