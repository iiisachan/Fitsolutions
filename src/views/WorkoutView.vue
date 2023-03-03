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
        } else if (this.$route.params.muscletype === 'rygg') {
          link = this.$store.state.workout.rygg
        } else if (this.$route.params.muscletype === 'chest') {
          link = this.$store.state.workout.chest
        }
        return link
      }
    }
  }
</script>

<template>
  <h1 class="title">Övningar</h1>
  <div class="page-nav">
    <RouterLink class="page-nav-item" to="/muscle"> Muskelgrupper </RouterLink>
    <p class="page-nav-item">></p>
    <p class="page-nav-item">{{ this.$route.params.muscletype }}</p>
  </div>

  <div class="accordion workout-container" role="tablist">
    <template v-for="items in this.workout" :key="items.name">
      <WorkoutItems :items="items" />
    </template>
  </div>
</template>

<style>
  .page-nav {
    display: flex;
    align-items: center;
    margin-left: 3rem;
  }

  .page-nav-item {
    font-weight: 600;
    margin: 0;
    padding-right: 1rem;
    color: gray;
    text-decoration: none;
  }

  .page-nav a {
    text-decoration: none;
  }

  .page-nav a:hover {
    color: #3a751c;
    text-decoration: underline;
  }

  .accordion video {
    max-width: 100%;
  }

  .workout-container {
    margin: 3rem 2rem;
    row-gap: 1rem;
    display: grid;
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
      /* grid-template-columns: repeat(2, 1fr); */
      column-gap: 1rem;
    }

    .workout-card {
      max-width: 600px;
    }
  }
</style>
