<template>
  <div class="background">
    <Navigation />
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 offset-md-3"
          v-for="tournament in tournaments"
          :key="tournament.rcid"
        >
          <Tournament :tournament="tournament" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./../components/layout/Navigation.vue";
import Tournament from "./../components/Tournament.vue";

export default {
  name: "Tournaments",
  components: {
    Navigation,
    Tournament,
  },
  data() {
    return {
      tournaments: [],
    };
  },
  methods: {
    async fetchTournaments() {
      const url = "http://localhost:8000/api/tournaments/";

      const res = await fetch(`${url}`);
      const data = await res.json();

      return data;
    },
  },
  async mounted() {
    this.tournaments = await this.fetchTournaments();
  },
};
</script>

<style scoped>
.background {
  position: relative;
  background: url("./../assets/hero.jpg") no-repeat center center fixed;
  background-size: cover;
}

@media only screen and (max-width: 1024px) {
  .container {
    margin-top: 65px;
  }
}
</style>
