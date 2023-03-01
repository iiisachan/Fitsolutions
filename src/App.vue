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
          >Logga ut</b-nav-item
        >
        <b-nav-item v-if="isLoggedIn" to="/profile">Profil</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <main>
    <RouterView />
  </main>

  <!-- <div class="container my-5"> -->
  <footer class="footer-container">
    <section class="icons">
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #3b5998"
        href="https://www.facebook.com"
        target="_blank"
        role="button"
        ><i class="fab fa-facebook-f">
          <font-awesome-icon icon="fab fa-facebook" /> </i
      ></a>

      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #55acee"
        href="https://www.twitter.com"
        target="_blank"
        role="button"
        ><i class="fab fa-twitter">
          <font-awesome-icon icon="fab fa-twitter" /> </i
      ></a>

      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #ac2bac"
        href="https://www.instagram.com"
        target="_blank"
        role="button"
        ><i class="fab fa-instagram">
          <font-awesome-icon icon="fab fa-instagram" /> </i
      ></a>

      <a
        href="https://www.google.com"
        target="_blank"
        class="btn text-white btn-floating m-1"
        style="background-color: #dd4b39"
        role="button"
        ><i class="fab fa-google">
          <font-awesome-icon icon="fa-brands fa-google" /></i
      ></a>
    </section>

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong />
            </p>
          </div>

          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input
                type="email"
                placeholder="Email adress"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Prenumerera!
            </button>
          </div>
        </div>
      </form>
    </section>

    <!-- Section: Text -->
    <section class="beskrivning">
      <p>
        FitSolutions – Vi får dig att uppnå ditt drömresultat på nolltid! -
        Välkommen till din närmaste träningsanläggning!
      </p>
    </section>

    <section class="links">
      <div class="links-nav">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Navigation</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <RouterLink to="/"> Hem </RouterLink>
            </li>
            <li><RouterLink to="/about"> Om </RouterLink></li>
            <li><RouterLink to="/contact"> Kontakt </RouterLink></li>
            <li><RouterLink to="/login"> Login </RouterLink></li>
          </ul>
        </div>
        <section class="links">
          <div class="links-nav">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Kundservice</h5>

              <ul class="list-unstyled mb-0">
                <li>Allmänna vilkor</li>
                <li>Kundtjänst</li>
                <li>Partners</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="links">
          <div class="links-nav">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Kundservice</h5>

              <ul class="list-unstyled mb-0">
                <li>Allmänna vilkor</li>
                <li>Kundtjänst</li>
                <li>Partners</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
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

  .footer-container {
    font-family: 'Roboto', sans-serif;
    border-bottom: 2px solid;
    margin: 30px auto 0;
    max-width: 100%;
    padding: 10px;
    background-color: #2f5233;
    color: white;
    bottom: 0;
  }
  .footer-text {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 20px 10px 0;
  }
  .icons {
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
  }
  .beskrivning {
    text-align: center;
  }
  .links-nav {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    justify-content: space-around;
    margin-left: 25px;

    /* margin: auto; */
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: indianred;
  }

  main {
    position: relative;
    min-height: 100vh;
  }
</style>
