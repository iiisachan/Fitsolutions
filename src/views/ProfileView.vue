<script>
  import axios from 'axios'

  export default {
    components: {},

    data() {
      return {
        quotes: []
      }
    },
    mounted() {
      axios
        .get('https://type.fit/api/quotes')
        .then((response) => {
          this.quotes = response.data
          console.log(this.quotes)
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
    }
  }
</script>

<style>
  .profile-picture {
    border-radius: 50%;
    border: 1px solid black;
    max-width: 150px;
    max-height: 150px;
  }
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 50px 0;
  }
  .profile-name {
    justify-content: start;
  }
  .weight-container {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .quote-container {
    background-color: #f3f4f5;
    margin-top: 20px;
    border-radius: 25px;
    padding: 15px;
    text-align: center;
  }
  .quote-gen {
    font-style: italic;
  }
</style>

<template>
  <b-container>
    <b-row class="quote-container">
      <b-col class="quote-gen" v-if="quotes.length !== 0">
        {{ quotes[Math.floor(Math.random() * quotes.length - 1)].text }}
      </b-col>
    </b-row>
  </b-container>
  <div class="profile-container">
    <img class="profile-picture" src="assets/profile-picture.jpg" alt="" />
    <h1 class="profile-name">Namn</h1>
  </div>
  <b-container fluid class="weight-container">
    <b-row>
      <b-col class="text-end">
        Nuvarande Vikt: {{ this.$store.state.currentWeight }}
      </b-col>
      <b-col class="text-center"
        ><font-awesome-icon icon="fa-solid fa-arrow-right"
      /></b-col>
      <b-col class="text-start"
        >Mål vikt: {{ this.$store.state.goalWeight }}</b-col
      >
    </b-row>
  </b-container>
</template>
