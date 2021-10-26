<template>
  <div class="background">
    <div class="center">
      <h1>PageNotFound</h1>
      <h3>{{warning}}</h3>
      <router-link to="/"><button class="warning">GO BACK!</button></router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      warning: "You won't find tournaments or matches here!"
    }
  }
};
</script>

<style scoped>
.background {
  position: relative;
  background: url("../assets/back.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
