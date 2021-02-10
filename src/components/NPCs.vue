<template>
  <div class="npcs">
    <h1 class="npcs__title">Other NPCs</h1>
    <NPC v-bind:npc="npc" v-bind:key="npc.id" v-for="npc in npcs" />
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

<style scoped>
.npcs {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 2rem 0;
}

.npcs__title {
  font-size: 1.7rem;
}

.npcs > *:last-child {
  border-bottom: none;
}
</style>
