<template>
  <div class="card p-3 mb-4">
    <div class="box p-3">
      <div class="card-body">
        <h3 class="card-title">{{ tournament.name }}</h3>
        <p class="card-text">{{ tournament.seasontypename }}</p>
        <div class="corner-position">
          <p class="mb-0 card-year"><span>Year:</span> {{ tournament.year }}</p>
        </div>
        <router-link :to="{ name: 'Matches', params: { id: tournament._tid } }">
          <button class="btn btn-light mt-2">Matches</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tournament",
  props: ["tournament"],
};
</script>

<style>
.card {
  font-family: "Poppins", sans-serif;
  color: #fff;
  background-color: transparent;
  box-shadow: inset 5px 5px 5px rgb(255 255 255 / 5%),
    inset -5px -5px 5px rgb(0 0 0 / 50%), 5px 5px 5px rgb(255 255 255 / 5%),
    -5px -5px 5px rgb(0 0 0 / 50%);
  transition: 0.5s;
  border-radius: 0.25rem;
  max-width: 100%;
  position: relative;
}

.box {
  background-color: rgba(255, 0, 0, 0.3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  cursor: pointer;
}

.card-body {
  position: relative;
}

.card:hover .box {
  transform: translateY(-16px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  background-color: #ff0000;
}

.btn {
  color: #ff0000;
  font-weight: 600;
}

.btn:hover {
  color: #ff0000;
}

.corner-position {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.corner-position p span {
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
