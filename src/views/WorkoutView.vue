<script>
  export default {
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
    <b-card
      no-body
      v-for="item in workout"
      :key="item.name"
      class="workout-card"
    >
      <b-card-header header-tag="header" role="tab">
        <b-button
          block
          v-b-toggle="item.name"
          class="muscle-button"
          variant="light"
        >
          {{ item.name }}
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            v-b-toggle.chin-up
          />
        </b-button>
      </b-card-header>
      <b-collapse :id="item.name" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <a :href="item.ref" target="_blank">
            <video :src="item.img" autoplay muted loop />
          </a>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<style>
  .accordion video {
    max-width: 100%;
  }

  .workout-container {
    margin: auto 2rem;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .workout-card {
    max-width: 500px;
    width: 100%;
  }

  .muscle-button {
    width: 100%;
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
