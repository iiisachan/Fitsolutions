<script setup>
  import axios from 'axios'
  // import { onMounted, ref } from 'vue'
  // import { getAuth, onAuthStateChanged } from '@firebase/auth'
  import { useStore } from 'vuex'
  // eslint-disable-next-line no-unused-vars
  const store = useStore()
</script>
<script>
  export default {
    //   const isLoggedIn = ref(false)
    //   let auth
    //   onMounted(() => {
    //     auth = getAuth()
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         isLoggedIn.value = true
    //       } else {
    //         isLoggedIn.value = false
    //       }
    //     })
    //   })
    // },

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
  /* .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 50px 0;
  } */
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
  <b-container class="profile-container">
    <b-col
      ><img class="profile-picture" src="assets/profile-picture.jpg" alt=""
    /></b-col>
    <b-col class="profile-name h1">Namn</b-col>
  </b-container>
  <b-container fluid class="weight-container">
    <b-row>
      <b-col class="text-end">
        Nuvarande Vikt: {{ this.$store.state.users[0].currentWeight }}
      </b-col>
      <b-col class="text-center"
        ><font-awesome-icon icon="fa-solid fa-arrow-right"
      /></b-col>
      <b-col class="text-start"
        >Mål vikt: {{ this.$store.state.users[0].goalWeight }}</b-col
      >
    </b-row>
  </b-container>
</template>
