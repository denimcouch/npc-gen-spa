<template>
  <div class="npc-showcase">
    <div class="content">
      <h1 class="content__race">Your character is a {{ newNPC.race }} named</h1>
      <h2 class="content__name text--primary">{{ newNPC.name }}</h2>
      <p class="content__role" v-if="newNPC.isAdvent == true">
        They were once an adventuring {{ newNPC.role }}.
      </p>
    </div>
    <div class="options">
      <button @click="$emit('add-npc')" class="btn btn--save">
        Save Character
      </button>
      <button @click="$emit('clear-npc')" class="btn btn--delete">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NPCShowcase",
  props: ["newNPC"]
};
</script>

<style>
.npc-showcase {
  width: 500px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #f6f6f6;
  opacity: 0;
  animation: fadein 0.4s ease-in-out forwards;
}

.text--primary {
  color: var(--primary-color);
}

.content {
  text-align: left;
  margin: 1.5rem 0;
}

.content__race {
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0;
  animation: fadein 0.4s ease-in-out 0.8s forwards;
}

.content__name {
  font-weight: 700;
  font-size: 2.2rem;
  margin: 1rem 0;
  padding: 0 0.2rem;
  opacity: 0;
  animation: fadein 0.4s ease-in-out 1.6s forwards;
}

.content__role {
  font-size: 1.3rem;
  opacity: 0;
  animation: fadein 0.4s ease-in-out 2.4s forwards;
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadein 0.4s ease-in-out 3.2s forwards;
}

.hidden {
  display: none;
}
</style>
