<script setup>
  import { onMounted, ref } from 'vue'
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
  import router from './router'

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

  // eslint-disable-next-line no-unused-vars
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/')
    })
  }
</script>

<script>
  export default {
    data() {
      return {
        collapsed: false
      }
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.collapsed = false
        }
      )
    }
  }
</script>

<template>
  <b-navbar sticky="top" toggleable="sm" variant="white">
    <b-navbar-brand to="/">
      <img src="../assets/logo.png" alt="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse">
      <font-awesome-icon
        v-if="collapsed"
        icon="fa-solid fa-xmark"
        @click="collapse"
      />
      <font-awesome-icon v-else icon="fa-solid fa-bars" @click="collapse" />
    </b-navbar-toggle>

    <b-collapse is-nav id="navbar-collapse" class="m-1" v-model="collapsed">
      <b-navbar-nav fill="true">
        <b-nav-item to="/"> Hem </b-nav-item>
        <b-nav-item to="/about"> Om </b-nav-item>
        <b-nav-item to="/contact"> Kontakt </b-nav-item>
        <b-nav-item to="/login">Logga in</b-nav-item>
        <b-nav-item v-if="isLoggedIn" @click="handleSignOut"
          >Sign Out</b-nav-item
        >
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

  .navbar-toggler:focus {
    box-shadow: none;
  }

  #navbar-collapse {
    transition: 0.4s;
  }

  .navbar {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    font-weight: 600;
  }
</style>
