<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.modal-header {
  color: rgb(9, 10, 66);
}

.close {
  border: none;
  font-weight: 500;
  padding: 0px 10px;
  font-size: 20px;
  background: #ff0000;
  color: #fff;
  font-family: "Poppins", sans-serif;
  border: none;
  transition: all 0.4s ease;
}

.background::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(9,10,66, 0.9);
}

.card {
  z-index: 20;
}

.background {
  position: relative;
  background-size: cover;
}
</style>
