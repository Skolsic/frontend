<template>
  <div>
    <div v-for="(goal, i) in getGoals(match)" :key="i">
      <p class="goal">{{goal}}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Modal',
  props: ['match'],
  methods: {
    getGoals(match) {
      let goals;

      if(match === '') {
        return goals = ['There is no goals for this match!']
      }

      goals = match.split(',');

      return goals;
    }
  }
}
</script>

<style scoped>
.goal {
  color: rgba(9, 10, 66, 0.8);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
}
</style>