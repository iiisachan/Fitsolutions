<script>
  import { onMounted, ref } from 'vue'
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
  import router from './router'

  export default {
    components: {}
  }

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

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/')
    })
  }
</script>

<template>
  <b-navbar sticky="top" toggleable="sm" variant="white">
    <b-navbar-brand to="/">
      <img src="../assets/logo.png" alt="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse">
      <template #default="{ expanded }">
        <font-awesome-icon v-if="expanded" icon="fa-solid fa-xmark" />
        <font-awesome-icon v-else icon="fa-solid fa-bars" />
      </template>
    </b-navbar-toggle>

    <b-collapse is-nav id="navbar-collapse" class="m-1">
      <b-navbar-nav justified="true">
        <b-nav-item to="/"> Hem </b-nav-item>
        <b-nav-item to="/about"> Om </b-nav-item>
        <b-nav-item to="/contact"> Kontakt </b-nav-item>
        <b-nav-item to="/login">LogIn</b-nav-item>
        <button v-if="isLoggedIn" @click="handleSignOut">Sign Out</button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <main>
    <RouterView />
  </main>
</template>

<style>
  .navbar-toggler {
    border: none;
  }
</style>
