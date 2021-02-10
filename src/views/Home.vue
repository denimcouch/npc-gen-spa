<template>
  <div class="home">
    <CreateNpc />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CreateNpc from "../components/CreateNpc";

export default {
  name: "Home",
  components: {
    CreateNpc
  }
};
</script>
