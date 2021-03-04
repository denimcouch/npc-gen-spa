<template>
  <main id="account">
    <div class="account-page">
      <UserInfo v-bind:user="this.getUser" />
      <NPCs v-bind:npcs="this.getUser.characters" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import UserInfo from "../components/UserInfo";
import NPCs from "../components/NPCs";

export default {
  name: "Account",
  components: {
    UserInfo,
    NPCs
  },
  computed: mapGetters(["getUser"])
};
</script>

<style>
.account-page {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1200px;
  margin: auto;
}
</style>
