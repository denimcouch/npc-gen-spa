<template>
  <div class="npc-showcase">
    <p>Your NPC is a {{ newNPC.race }} named</p>
    <h2>{{ newNPC.name }}</h2>
    <p v-if="newNPC.isAdvent == true">
      in a past life they were a {{ newNPC.role }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NPCShowcase",
  props: ["newNPC"]
};
</script>

<style scoped></style>
