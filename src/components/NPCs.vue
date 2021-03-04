<template>
  <section class="npc-list">
    <h1 class="npc-list__title">Your Characters</h1>
    <div class="npcs">
      <NPC v-bind:npc="npc" :key="npc.id" v-for="npc in npcs" />
    </div>
  </section>
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
h1 {
  text-align: center;
  padding: 0 1rem;
}

.npcs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1.5rem 0;
  height: 500px;
  overflow-y: scroll;
  padding: 1rem;
}

.npcs__title {
  font-size: 1.7rem;
}
</style>
