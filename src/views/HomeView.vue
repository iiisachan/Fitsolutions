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
</style>

<template>
  <main>
    <img class="main-img" src="assets/workout-img.jpg" alt="" />

    <div class="log-in-container">
      <h1 class="logo-quote">Bli bättre varje dag, från och med idag.</h1>
      <b-button-toolbar justify class="btn-container">
        <b-button
          to="/register"
          class="mx-1 btn"
          variant="success"
          v-if="isLoggedIn === false"
          >Kom igång</b-button
        >
        <b-button
          to="/login"
          class="mx-1 btn"
          variant="success"
          v-if="isLoggedIn === false"
          >Logga in</b-button
        >
      </b-button-toolbar>
    </div>
    <CurrentInfo />
  </main>
</template>
