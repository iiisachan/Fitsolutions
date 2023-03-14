<script>
  // import WorkoutItems from '../components/WorkoutItem.vue'

  export default {
    components: {
      // WorkoutItems
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

  <!-- <div class="accordion workout-container" role="tablist">
    <template v-for="items in this.workout" :key="items.name">
      <WorkoutItems :items="items" />
    </template>
  </div>
   -->

  <div class="workout-container">
    <b-accordion>
      <b-accordion-item
        v-for="items in workout"
        :key="items.id"
        :title="items.name"
      >
        <video :src="items.img" autoplay muted loop />
        <div class="like-container">
          <font-awesome-icon class="like-button" icon="fa-regular fa-heart" />
          <font-awesome-icon
            class="like-button"
            icon="fa-solid fa-heart"
          /></div
      ></b-accordion-item>
    </b-accordion>
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
  }

  .accordion {
    row-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .accordion-item {
    max-width: 500px;
    width: 100%;
    border: none;
  }

  .accordion-button {
    border-radius: 10px 10px 0 0;
    border: 1px solid #dee2e6;
  }

  .accordion-button:focus,
  .accordion-button:not(.collapsed) {
    background-color: #fff;
    border-color: #5c5c5c;
    color: #000;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
  }

  .accordion-button:focus:not(:focus-visible) {
    box-shadow: none;
  }

  .accordion-button.collapsed {
    border-radius: 10px;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .accordion-item:last-of-type .accordion-button.accordion-button.collapsed {
    border-radius: 10px 10px;
  }

  .accordion-body {
    padding: 0;
    border: 1px solid #5c5c5c;
    border-top: none;
  }

  .like-container {
    padding: 10px 16px;
    text-align: end;
  }

  .like-button {
    height: 22px;
    color: #ff6161;
    cursor: pointer;
  }

  @media (min-width: 950px) {
    .accordion {
      row-gap: 30px;
    }

    .accordion-item {
      max-width: 600px;
    }
  }
</style>
