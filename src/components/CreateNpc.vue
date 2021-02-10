<template>
  <div class="form-container">
    <form class="npc-form">
      <input class="create-btn" type="submit" value="Create NPC" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateNpc"
};
</script>

<style scoped>
.create-btn {
  display: inline-block;
  border: none;
  padding: 1rem;
  width: 150px;
  height: 70px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background: #32d395;
  color: #fff;
  transition: 0.2s ease-in-out;
}

.create-btn:hover {
  opacity: 0.9;
}

.create-btn:focus,
.create-btn:active {
  outline-color: transparent;
}
</style>
