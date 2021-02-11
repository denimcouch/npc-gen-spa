<template>
  <div class="form-container">
    <form @submit="createNPC" class="npc-form">
      <input class="create-btn" type="submit" value="Create NPC" />
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
      name: "",
      race: "",
      isAdvent: false,
      role: ""
    };
  },
  methods: {
    createNPC() {
      this.chooseRace();
      this.isAdventurer();
    },
    chooseRace() {
      const raceData = races[Math.floor(Math.random() * races.length)];
      const subraces = raceData.subraces;
      const race = raceData.race;
      const subrace = subraces[Math.floor(Math.random() * subraces.length)];
      subrace === undefined
        ? (this.race = race)
        : (this.race = subrace + " " + race);
      this.chooseName(this.race);
    },
    isAdventurer() {
      this.role = "";
      const choice = parseInt(Math.random() * (10 - 1) + 1, 10);
      console.log("choice = ", choice);
      choice <= 5 ? this.isAdvent = false : this.chooseRole(); 
    },
    chooseRole() {
      this.isAdvent = true;
      console.log("roles", roles);
      this.role = roles[Math.floor(Math.random() * roles.length)];
    },
    chooseName(race) {
      console.log("names", names);
      if (race.split(" ").length > 1) {
        const raceInfo = race.split(" ")[1];
        const nameData = names.filter(nameRace => nameRace.race == raceInfo)[0];
        const firstName =
          nameData.firstNames[
            Math.floor(Math.random() * nameData.firstNames.length)
          ];
        const clanName =
          nameData.clanNames[
            Math.floor(Math.random() * nameData.clanNames.length)
          ];
        // For use if race has a list of nicknames
        // const otherName =
        //   nameData.otherNames[
        //     Math.floor(Math.random() * nameData.otherNames.length)
        //   ];
        clanName === undefined
          ? (this.name = firstName)
          : (this.name = firstName + " " + clanName);
      } else {
        const nameData = names.filter(nameRace => nameRace.race == race)[0];
        console.log("else", nameData);
        this.name =
          nameData.firstNames[
            Math.floor(Math.random() * nameData.firstNames.length)
          ];
        console.log("name else ", this.name);
      }
    }
  }
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
