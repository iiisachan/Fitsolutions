<script>
  import WorkoutItems from '../components/WorkoutItem.vue'

  export default {
    components: {
      WorkoutItems
    },
    methods: {},
    computed: {
      workout() {
        let link

        if (this.$route.params.muscletype === 'ben') {
          link = this.$store.state.workout.ben
        } else if (this.$route.params.muscletype === 'arm') {
          link = this.$store.state.workout.arm
        } else if (this.$route.params.muscletype === 'mage') {
          link = this.$store.state.workout.mage
        }
        return link
      }
    }
  }
</script>

<template>
  <h1 class="title">Workout</h1>

  <div class="accordion workout-container" role="tablist">
    <template v-for="items in this.workout" :key="items.name">
      <WorkoutItems :items="items" />
    </template>
  </div>
</template>

<style>
  .accordion video {
    max-width: 100%;
  }

  .workout-container {
    margin: 2rem;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .workout-card {
    max-width: 500px;
    width: 100%;
    border: none;
  }

  .workout-card .card-header {
    border: 1px solid rgba(0, 0, 0, 0.175);
    padding: 0;
    border-radius: 0;
  }

  .workout-card .collapse {
    border: none;
  }

  .muscle-button {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0;
  }

  .muscle-button .btn-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 950px) {
    .workout-container {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }

    .workout-card {
      max-width: 600px;
    }
  }
</style>
