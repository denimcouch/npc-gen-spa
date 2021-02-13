<template>
  <div class="home">
    <CreateNpc v-on:show-npc="showNPC" />
    <NPCShowcase v-bind:newNPC="newNPC" v-on:add-npc="addNPC" />
    <NPCs v-bind:npcs="npcs" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CreateNpc from "../components/CreateNpc";
import NPCShowcase from "@/components/NPCShowcase";
import NPCs from "../components/NPCs";

export default {
  name: "Home",
  components: {
    CreateNpc,
    NPCShowcase,
    NPCs
  },
  data() {
    return {
      npcs: [],
      newNPC: {}
    };
  },
  methods: {
    showNPC(npc) {
      this.newNPC = npc;
    },
    addNPC() {
      const newNPC = {
        name: this.newNPC.name,
        race: this.newNPC.race,
        is_advent: this.newNPC.isAdvent,
        role: this.newNPC.role
      };
      const npcOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newNPC)
      };
      fetch("http://127.0.0.1:8000/api/npcs/", npcOptions)
        .then(res => res.json())
        .then(npc => (this.npcs = [...this.npcs, npc]));
    }
  },
  created() {
    fetch("http://127.0.0.1:8000/api/npcs/")
      .then(res => res.json())
      .then(npcs => (this.npcs = npcs));
  }
};
</script>

<style>
:root {
  --primary-color: #32d395;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
