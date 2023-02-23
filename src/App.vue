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

<style lang="scss"></style>

<template>
  <b-navbar sticky="top" toggleable="sm" variant="white">
    <b-navbar-brand to="/">
      <img src="../assets/logo.png" alt="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse">
      <font-awesome-icon v-if="collapsed" icon="fa-solid fa-xmark" />
      <font-awesome-icon v-else icon="fa-solid fa-bars" />
    </b-navbar-toggle>

    <b-collapse is-nav id="navbar-collapse" class="m-1" v-model="collapsed">
      <b-navbar-nav fill="true">
        <b-nav-item to="/"> Hem </b-nav-item>
        <b-nav-item to="/about"> Om </b-nav-item>
        <b-nav-item to="/contact"> Kontakt </b-nav-item>
        <b-nav-item v-if="isLoggedIn === false" to="/login"
          >Logga in</b-nav-item
        >
        <b-nav-item v-if="isLoggedIn" @click="handleSignOut"
          >Sign Out</b-nav-item
        >
        <b-nav-item v-if="isLoggedIn" to="/profile">Profile</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <main>
    <RouterView />
  </main>
  <footer class="bg-light text-center text-white" id="footer-container">
    <div>
      <div class="row">
        <div class="col">
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #3b5998"
            href="https://www.facebook.com"
            target="_blank"
            role="button"
            ><i class="fab fa-facebook-f">
              <font-awesome-icon icon="fab fa-facebook" /> </i
          ></a>
        </div>
        <div class="col">
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #55acee"
            href="https://www.twitter.com"
            target="_blank"
            role="button"
            ><i class="fab fa-twitter">
              <font-awesome-icon icon="fab fa-twitter" /> </i
          ></a>
        </div>
        <div class="col">
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #ac2bac"
            href="https://www.instagram.com"
            target="_blank"
            role="button"
            ><i class="fab fa-instagram">
              <font-awesome-icon icon="fab fa-instagram" /> </i
          ></a>
        </div>
        <div class="col">
          -->
          <a
            href="https://www.google.com"
            target="_blank"
            class="btn text-white btn-floating m-1"
            style="background-color: #dd4b39"
            role="button"
            ><i class="fab fa-google">
              <font-awesome-icon icon="fa-brands fa-google" /></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
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

  #footer-container {
    height: 65px;
    border-bottom: 2px solid;
    margin: 10px 0px auto;
    background-color: light;
    text-align: center;
    color: white;
    width: 100%;
    padding: 6px 3px;
    bottom: 0;
  }
  main {
    position: relative;
    min-height: 100vh;
  }
</style>
