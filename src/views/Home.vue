<template>
  <div class="home">
    <CreateNpc />
    <NPCShowcase />
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
      npcs: []
    };
  },
  created() {
    fetch("http://127.0.0.1:8000/api/npcs/")
      .then(res => res.json())
      .then(npcs => (this.npcs = npcs));
  }
};
</script>

<style>
.home {
  max-width: 1100px;
  margin: auto;
}
</style>
