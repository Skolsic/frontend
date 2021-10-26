<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">SportRadar Challenge</a>
      <div id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/tournaments">Tournaments</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
#nav {
  z-index: 100;
  background: transparent;
}

#nav a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  position: relative;
}

#nav a.router-link-exact-active:before {
  position: absolute;
  top: 25px;
  width: 100%;
  height: 3px;
  content: "";
  background-color: #ff0000;
}

@media only screen and (max-width: 1024px) {
  #navbarSupportedContent {
    position: absolute;
    top: 56px;
    width: 80%;
  }

  .navbar-nav {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
