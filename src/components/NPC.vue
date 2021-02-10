<template>
  <div class="npc card">
    <h1 class="npc__name">{{ npc.name }}</h1>
    <p class="npc__race">{{ npc.race }}</p>
  </div>
</template>

<script>
export default {
  name: "NPC",
  props: ["npc"]
};
</script>

<style>

</style>