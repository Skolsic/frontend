<template>
  <div class="home">
    <Navigation />
    <Hero />
  </div>
</template>

<script>
import Navigation from "../components/layout/Navigation.vue";
import Hero from "./../components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Hero,
  },
};
</script>

<style>
.home {
  max-height: 100vh;
}
</style>
