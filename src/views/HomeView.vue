<script>
  import CurrentInfo from '../components/CurrentInfo.vue'
  export default { components: { CurrentInfo } }
</script>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getAuth, onAuthStateChanged } from '@firebase/auth'

  const isLoggedIn = ref(false)
  let auth
  onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true
      } else {
        isLoggedIn.value = false
      }
    })
  })
</script>

<style scoped>
  /* IMPORTS/FONTS */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  .main-img {
    width: 100%;
    height: auto;
  }
  .log-in-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 2.2rem 2.2rem;
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 600;
    color: #3a751c;
  }

  .Buttons {
    display: flex;
    flex-direction: columns;
    max-width: 140px;
    margin: 20px auto;
    justify-content: center;
    padding: 10px;
  }
  .main-video {
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 408px) {
    .btn-container {
      gap: 20px;
    }
  }
</style>

<template>
  <div>
    <video class="w-100 main-video" autoplay loop src="assets/gym-video.mp4" />
  </div>

  <div class="log-in-container">
    <h1 class="logo-quote">Bli bättre varje dag, från och med idag.</h1>
  </div>
  <b-container>
    <b-button
      to="/muscle"
      class="Buttons"
      v-if="isLoggedIn === true"
      variant="success"
      >Se träningar</b-button
    >

    <b-row>
      <b-button
        to="/register"
        class="Buttons"
        variant="success"
        v-if="isLoggedIn === false"
        >Kom igång</b-button
      >
      <b-button
        to="/login"
        class="Buttons"
        variant="success"
        v-if="isLoggedIn === false"
        >Logga in</b-button
      >
    </b-row>
  </b-container>
  <CurrentInfo />
</template>
