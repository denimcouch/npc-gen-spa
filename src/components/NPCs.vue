<template>
  <div class="npcs">
    <h1>Other Random NPCs</h1>
    <div class="npc" v-bind:key="npc.id" v-for="npc in npcs">
      <NPC v-bind:npc="npc" />
    </div>
  </div>
</template>

<script>
import NPC from "./NPC";

export default {
  name: "NPCs",
  props: ["npcs"],
  components: {
    NPC
  }
};
</script>

<style scoped></style>
