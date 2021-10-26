<template>
  <div class="error">
    <div class="center">
      <h1 class="error-title">{{error}}</h1>
      <h3>{{warning}}</h3>
      <router-link to="/"><button class="btn btn-danger">GO BACK!</button></router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      error: 404,
      warning: "You won't find tournaments or matches here!"
    }
  }
};
</script>

<style>
.error {
  position: relative;
  background: rgba(9, 10, 66, 1);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

.error .error-title {
  font-size: 7rem;
}
</style>
