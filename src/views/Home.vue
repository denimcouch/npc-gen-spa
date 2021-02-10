<template>
  <div class="home">
    <CreateNpc />
    <NPCs />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CreateNpc from "../components/CreateNpc";
import NPCs from "../components/NPCs"

export default {
  name: "Home",
  components: {
    CreateNpc,
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
    .then(npcs => this.npcs = npcs)
  }
};
</script>
