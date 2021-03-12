<template>
  <div class="form-container">
    <form @submit.prevent="createNPC" class="npc-form">
      <input class="btn create-btn" type="submit" value="Create Character" />
    </form>
  </div>
</template>

<script>
import { names } from "../data/names";
import { races } from "../data/races";
import { roles } from "../data/roles";

export default {
  name: "CreateNpc",
  data() {
    return {
      npc: {
        name: "",
        race: "",
        isAdvent: false,
        role: ""
      }
    };
  },
  methods: {
    createNPC() {
      this.chooseRace();
      this.isAdventurer();
      this.$emit("show-npc", this.npc);
    },
    chooseRace() {
      // Randomly choose a race
      const raceData = races[Math.floor(Math.random() * races.length)];
      // Isolate the array of subraces
      const subraces = raceData.subraces;
      // Isolate the race value
      const race = raceData.race;
      // Randomly choose a subrace
      const subrace = subraces[Math.floor(Math.random() * subraces.length)];
      // If there is no subrace, only submit race to data
      subrace === undefined
        ? (this.npc.race = race)
        : (this.npc.race = subrace + " " + race);
      this.chooseName(this.npc.race);
    },
    isAdventurer() {
      // Clean out any role values from previous submit
      this.npc.role = "";
      const choice = parseInt(Math.random() * (20 - 1) + 1, 10);
      choice <= 15 ? (this.npc.isAdvent = false) : this.chooseRole();
    },
    chooseRole() {
      this.npc.isAdvent = true;
      // Randomly assign a role
      this.npc.role = roles[Math.floor(Math.random() * roles.length)];
    },
    chooseName(race) {
      // Restructures Half-Elf string to work in with the generator below
      // Will use Human or Elf names depending on if the time is odd or even
      if (race === "Half-Elf") {
        if (Date.now() % 2 == 0) {
          race = "Half Elf";
        } else {
          race = "Half Human";
        }
      }

      if (race.split(" ").length > 1) {
        // Split the race string and only take the last index
        const raceInfo = race.split(" ")[1];
        console.log(raceInfo);
        // Find the names object for given race
        const nameData = names.filter(nameRace => nameRace.race == raceInfo)[0];
        // Randomly choose first name
        const firstName =
          nameData.firstNames[
            Math.floor(Math.random() * nameData.firstNames.length)
          ];
        // Randomly choose last name
        const clanName =
          nameData.clanNames[
            Math.floor(Math.random() * nameData.clanNames.length)
          ];
        // For use if race has a list of nicknames
        // const otherName =
        //   nameData.otherNames[
        //     Math.floor(Math.random() * nameData.otherNames.length)
        //   ];

        // Some race don't have clanNames,
        // If that happens only submit first name to data
        clanName === undefined
          ? (this.npc.name = firstName)
          : (this.npc.name = firstName + " " + clanName);
      } else {
        const nameData = names.filter(nameRace => nameRace.race == race)[0];
        this.npc.name =
          nameData.firstNames[
            Math.floor(Math.random() * nameData.firstNames.length)
          ];
      }
    }
  }
};
</script>

<style>
.form-container {
  margin: 2rem 0;
}
.create-btn {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  height: 5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px var(--primary-color) solid;
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
