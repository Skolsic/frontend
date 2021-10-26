<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="row p-2 mb-3">
            <div class="col-4">
              <h5 class="home">{{ match.teams.home.name }}</h5>
            </div>
            <div class="col-4">
              <h3>{{ match.result.home }} : {{ match.result.away }}</h3>
            </div>
            <div class="col-4">
              <h5 class="away">{{ match.teams.away.name }}</h5>
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <p class="year mb-0">
            <span>Match played:</span> {{ match.time.date }} at {{ match.time.time }}
          </p>
        </div>
      </div>
      <div class="card-badge">
        <b-button class="btn details" @click="showModal()">Details</b-button>

        <b-modal ref="my-modal" hide-footer title="Match Details ( Goals )">
          <Modal :match="match.comment" />
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: "Match",
  components: {
    Modal
  },
  props: ["match"],
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
  }
};
</script>

<style scoped>
.col-4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: relative;
  background-color: rgba(255, 0, 0, 0.3);
  transition: all 0.4s ease;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.card:hover {
  cursor: pointer;
  background-color: #ff0000;
  box-shadow: 
    8px 8px 12px 0 rgba(0, 0, 0, 0.65),
    -4px -4px 8px 0 rgba(9, 10, 66, 1);
}

.card .card-badge {
  border-radius: 0.25rem;
  position: absolute;
  top: -10px;
  left: -30px;
  border: none;
  background:blue;
  color:white;
  transform: rotate(-20deg);
}

.btn-secondary {
  background: transparent;
  border: none;
}

.btn-secondary:hover {
  background: transparent;
}

.btn-secondary:focus {
  background: transparent;
}


@media only screen and (max-width: 768px) {
  .card .card-badge {
    left: 0px;
  }
}
</style>
