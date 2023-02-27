<script>
  export default {
    data() {
      return {
        result: null
      }
    },
    methods: {
      test() {
        fetch('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
          method: 'GET',
          headers: { 'X-Api-Key': 'zV8SLuknU5721ue1tXxL3w==5IePC0SihT4A3RsR' }
        })
          .then((response) => response.json())
          .then((result) => {
            this.result = result
            console.log(result)
          })
      }
    },
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
      },
      param() {
        return this.$route.params.muscletype
      }
    }
  }
</script>

<template>
  <h1 class="title">Workout</h1>
  <button @click="test">test</button>

  <div class="m-cntr" v-for="value in workout" :key="value.name">
    <img :src="value.img" />
    <div>
      <h3>{{ value.name }}</h3>
      <p>20rep</p>
    </div>
  </div>

  <div class="m-cntr">
    <img src="../../assets/workout.png" alt="icon" />
    <div>
      <h3>Push up</h3>
      <p>20rep</p>
    </div>
  </div>
</template>

<style>
  img {
    max-width: 100%;
  }

  .m-cntr {
    margin: 1rem;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
  }

  .m-cntr img {
    width: 100px;
    margin: auto 1rem;
  }
</style>
