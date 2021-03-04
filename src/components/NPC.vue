<template>
  <div class="npc card">
    <div class="npc-info">
      <h1 class="npc__name npc--primary">{{ npc.name }}</h1>
      <p class="npc__race">the {{ npc.race }}</p>
      <p v-if="npc.is_adventurer" class="npc__role">{{ npc.role }}</p>
    </div>
    <div class="npc-options">
      <button @click="deleteChar(npc)" class="btn btn--delete">x</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NPC",
  props: ["npc"],
  methods: {
    ...mapActions(["saveUser"]),
    deleteChar(npc) {
      const token = JSON.parse(window.localStorage.getItem("token"));

      let delOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          character: {
            id: npc.id
          }
        })
      };

      fetch(`http://localhost:3000/api/characters/${npc.id}`, delOptions)
        .then(res => res.json())
        .then(data => {
          this.saveUser(data.user);
        });
    }
  }
};
</script>

<style>
.card {
  background: #fff;
  padding: 1rem;
}

.npc {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  border-right: 1px solid #aaa;
  padding: 1rem 0;
}

.npc-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.npc--primary {
  color: var(--primary-color);
  font-weight: 500;
}

.npc__name {
  font-size: 1.3rem;
  font-weight: 600;
}

.npc__race {
  font-size: 1.2rem;
}

.npc-options .btn--delete {
  transform: scale(0.5);
}
</style>
