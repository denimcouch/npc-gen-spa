<template>
  <main class="home">
    <CreateNpc v-on:show-npc="showNPC" />
    <NPCShowcase
      v-bind:newNPC="newNPC"
      v-on:add-npc="addNPC"
      v-on:clear-npc="clearNPC"
      v-if="this.newNPC.name != undefined"
    />
  </main>
</template>

<script>
import CreateNpc from "../components/CreateNpc";
import NPCShowcase from "@/components/NPCShowcase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CreateNpc,
    NPCShowcase
  },
  computed: mapGetters(["getUser"]),
  data() {
    return {
      newNPC: {}
    };
  },
  methods: {
    ...mapActions(["saveUser"]),
    showNPC(npc) {
      this.newNPC = npc;
    },
    addNPC() {
      const token = JSON.parse(window.localStorage.getItem("token"));
      const newNPC = {
        character: {
          name: this.newNPC.name,
          race: this.newNPC.race,
          is_adventurer: this.newNPC.isAdvent,
          role: this.newNPC.role,
          user_id: this.getUser.id
        }
      };
      const npcOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        },
        body: JSON.stringify(newNPC)
      };
      console.log("npcOptions", npcOptions);
      fetch("http://localhost:3000/api/characters", npcOptions)
        .then(res => res.json())
        .then(data => {
          console.log("data from POST", data.user);
          this.saveUser(data.user);
          this.newNPC = {};
        });
    },
    clearNPC() {
      console.log(
        "local storage test",
        window.localStorage.getItem("test") === null
      );
      this.newNPC = {};
    }
  },
  created() {
    if (window.localStorage.getItem("token") !== null) {
      console.log("hello!");
    }
  }
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
