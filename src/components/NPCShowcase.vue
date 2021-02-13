<template>
  <div class="npc-showcase">
    <div class="content">
      <h1 class="content__race">Your NPC is a {{ newNPC.race }} named</h1>
      <h2 class="content__name text--primary">{{ newNPC.name }}</h2>
      <p class="content__role" v-if="newNPC.isAdvent == true">
        They were once an adventuring {{ newNPC.role }}.
      </p>
    </div>
    <div class="options">
      <button @click="$emit('add-npc', newNPC)" class="btn btn--save">
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
}

.content__name {
  font-weight: 700;
  font-size: 2.2rem;
  margin: 1rem 0;
  padding: 0 0.2rem;
}

.content__role {
  font-size: 1.3rem;
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  display: inline-block;
  border: none;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background: var(--primary-color);
  color: #fff;
  transition: 0.2s ease-in-out;
}

.btn:focus,
.btn:active {
  outline-color: transparent;
}

.btn--delete {
  background: #d33d32;
  color: #fff;
}

.hidden {
  display: none;
}
</style>
