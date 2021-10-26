<template>
  <div class="background">
    <Navigation />
    <div class="container">
      <div class="row">
        <div :id="match._tid + i"
          class="col-md-6 offset-md-3"
          v-for="(match, i) in matches"
          :key="match._tid + i"
        >
          <Match :match="match" :id="match._tid + i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/layout/Navigation.vue";
import Match from "../components/Match.vue";

export default {
  name: "Matches",
  components: {
    Navigation,
    Match,
  },
  data() {
    return {
      id: this.$route.params.id,
      modalId: null,
      matches: [],
    };
  },
  methods: {
    async fetcheMatches() {
      const url = `http://localhost:8000/api/matches/${this.id}`;

      const res = await fetch(`${url}`);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.matches = await this.fetcheMatches();
  },
};
</script>

<style scoped>
.background {
  position: relative;
  background: url("../assets/back.jpg") no-repeat center center fixed;
  background-size: cover;
}

@media only screen and (max-width: 1024px) {
  .container {
    margin-top: 65px;
  }
}
</style>
