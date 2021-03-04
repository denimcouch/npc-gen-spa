<template>
  <div class="home">
    <CreateNpc v-on:show-npc="showNPC" />
    <NPCShowcase
      v-bind:newNPC="newNPC"
      v-on:add-npc="addNPC"
      v-on:clear-npc="clearNPC"
    />
    <NPCs v-bind:npcs="npcs" />
  </div>
</template>

<script>
import CreateNpc from "../components/CreateNpc";
import NPCShowcase from "@/components/NPCShowcase";
import NPCs from "../components/NPCs";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    CreateNpc,
    NPCShowcase,
    NPCs
  },
  computed: mapGetters(["getUser"]),
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
      const npc = {
        ...this.newNPC
      };
      // const newNPC = {
      //   name: this.newNPC.name,
      //   race: this.newNPC.race,
      //   is_advent: this.newNPC.isAdvent,
      //   role: this.newNPC.role
      // };
      // const npcOptions = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   },
      //   body: JSON.stringify(newNPC)
      // };
      // fetch("http://localhost:3000/api/characters", npcOptions)
      //   .then(res => res.json())
      //   .then(npc => (this.npcs = [...this.npcs, npc]));
      this.npcs = [...this.npcs, npc];
    },
    clearNPC() {
      this.newNPC = {};
    }
  },
  created() {}
};
</script>

<style>
.home {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
