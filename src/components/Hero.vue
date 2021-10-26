<template>
  <div class="hero">
    <b-carousel
      id="carousel-1"
      fade
      v-model="slide"
      :interval="4000"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :img-src="item.image"
      >
        <div class="container">
          <div class="border-left">
            <h1>{{ item.title }}</h1>
            <p class="mt-3">{{ item.text }}</p>
          </div>
          <router-link to="/tournaments"><b-button class="mt-4">Check out Tournaments!</b-button></router-link>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      slide: 0,
      sliding: null,
      carouselItems: [
        {
          id: 1,
          image: "https://wallpaperaccess.com/full/658991.jpg",
          title: "SportRadar Challenge",
          text: "Get Live Football Scores and Real-Time Football Results with LiveScore! We cover all Countries, Leagues and Competitions in unbeatable detail.",
        },
        {
          id: 2,
          image: "https://wallpaperaccess.com/full/1637809.jpg",
          title: "SportRadar Challenge",
          text: "Get Live Football Scores and Real-Time Football Results with LiveScore! We cover all Countries, Leagues and Competitions in unbeatable detail.",
        },
        {
          id: 3,
          image:
            "https://www.teahub.io/photos/full/20-201451_pes-2020-legend-edition.jpg",
          title: "SportRadar Challenge",
          text: "Get Live Football Scores and Real-Time Football Results with LiveScore! We cover all Countries, Leagues and Competitions in unbeatable detail.",
        },
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.hero {
  top: -56px;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
}

#carousel-1 {
  height: 100%;
}

.container {
  text-align: left;
}

.border-left {
  border-left: 5px solid #ff0000;
  padding: 0px 0px 0px 20px;
}

.carousel-inner {
  height: 100%;
}

.carousel-item {
  height: 100%;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  z-index: 20;
  top: 30%;
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
}

.carousel-caption h1 {
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.carousel-caption p {
  font-weight: 500;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.carousel-caption button {
  font-weight: 500;
  padding: 10px 20px;
  background: #ff0000;
  color: #fff;
  font-family: "Poppins", sans-serif;
  border: none;
  transition: all 0.4s ease;
}

.carousel-caption button:hover {
  background: #fff;
  color: #ff0000;
}

.carousel-caption button:focus {
  background: #fff;
  color: #ff0000;
  border: none;
}

.carousel-indicators li {
  height: 15px;
  width: 15px;
  background: transparent;
  border: 1px solid #fff;
  margin-right: 10px;
  border-radius: 50%;
  transition: all 0.4s ease;
}

.carousel-indicators .active {
  width: 30px;
  border: 1px solid #fff;
  background: #ff0000;
  border-radius: 10px;
}

.sr-only {
  display: none;
}

.carousel-item::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(9, 10, 66, 0.7);
}
</style>
