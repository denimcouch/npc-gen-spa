<template>
  <main id="profile">
    <div class="profile-page">
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
  name: "Profile",
  components: {
    UserInfo,
    NPCs
  },
  computed: mapGetters(["getUser"])
};
</script>

<style>
.profile-page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  max-width: 1200px;
  margin: auto;
}
</style>
