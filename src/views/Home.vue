<template>
  <main class="home">
    <h1>Your adventure's new plot hook is one click away</h1>
    <font-awesome-icon icon="chevron-down" class="pointer fa-2x" />
    <CreateNpc v-on:show-npc="showNPC" />
    <NPCShowcase
      v-bind:newNPC="newNPC"
      v-on:add-npc="addNPC"
      v-on:clear-npc="clearNPC"
      v-if="this.newNPC.name != undefined"
    />
    <div v-if="this.showModal" class="auth-error">
      <h2>{{ this.error }}</h2>
      <div class="auth-error--options">
        <router-link class="btn" to="/login">Login</router-link>
        <button @click="closeModal" class="btn btn--delete">Close</button>
      </div>
    </div>
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
      newNPC: {},
      authorized: false,
      showModal: false,
      error: ""
    };
  },
  methods: {
    ...mapActions(["saveUser"]),
    showNPC(npc) {
      this.newNPC = npc;
    },
    addNPC() {
      if (this.authorized) {
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

        fetch("http://localhost:3000/api/characters", npcOptions)
          .then(res => res.json())
          .then(data => {
            this.saveUser(data.user);
            this.newNPC = {};
            this.$router.push({
              name: "Profile",
              params: { id: data.user.username }
            });
          });
      } else {
        this.error = "Please login to save character.";
        this.showModal = true;
      }
    },
    clearNPC() {
      this.newNPC = {};
    },
    checkAuth() {
      window.localStorage.getItem("token") !== null
        ? (this.authorized = true)
        : (this.authorized = false);
    },
    closeModal() {
      this.showModal = false;
    }
  },
  created() {
    this.checkAuth();
  }
};
</script>

<style>
.home {
  max-width: 1100px;
  margin: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.home .auth-error {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: #fff;
  border: 5px solid var(--primary-color);
  border-radius: 5px;
  box-shadow: 0px 0px 50px 25px #000;
  padding: 1.5rem;
  opacity: 0;
  animation: fadein 0.2s ease forwards;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home .auth-error h2 {
  margin: 1rem 0;
  font-weight: 300;
}

.pointer {
  animation-name: bounce;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes bounce {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(-20%);
  }
  75% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
