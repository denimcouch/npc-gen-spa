<template>
  <div class="npc card">
    <h1 class="npc__name npc--primary">{{ npc.name }}</h1>
    <p class="npc__race">the {{ npc.race }}</p>
  </div>
</template>

<script>
export default {
  name: "NPC",
  props: ["npc"]
};
</script>

<style>
.card {
  background: #fff;
  padding: 1rem;
}

.npc {
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #aaa;
}

.npc--primary {
  color: #32d395;
  font-weight: 500;
}

.npc__name {
  margin: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.npc__race {
  font-size: 1.2rem;
}
</style>
