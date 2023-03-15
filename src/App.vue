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
        modalShow: false,
        modalinput: null
      }
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          const navMenu = document.querySelector('.nav-menu')
          const hamburger = document.querySelector('.hamburger')
          navMenu.classList.remove('active')
          hamburger.classList.remove('active')
        }
      )
    },
    methods: {
      modal() {
        this.modalShow = !this.modalShow
        this.modalinput = null
      },
      show() {
        const navMenu = document.querySelector('.nav-menu')
        const hamburger = document.querySelector('.hamburger')

        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
      }
    }
  }
</script>

<style lang="scss"></style>

<template>
  <nav class="nav">
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/logo.png" alt="logo" />
      </RouterLink>
    </div>

    <div class="nav-menu">
      <ul class="nav-links">
        <li>
          <RouterLink to="/"> Hem </RouterLink>
        </li>
        <li>
          <RouterLink to="/about"> Om </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact"> Kontakt </RouterLink>
        </li>
        <li>
          <RouterLink v-if="isLoggedIn === true" to="/muscle"
            >Övningar</RouterLink
          >
        </li>
      </ul>

      <div class="nav-user">
        <RouterLink to="/profile" v-if="isLoggedIn === true">
          <font-awesome-icon
            class="user-icon"
            icon="fa-regular fa-circle-user "
          />
        </RouterLink>

        <b-button
          class="nav-button"
          variant="success"
          v-if="isLoggedIn === false"
          to="/login"
        >
          Logga in
        </b-button>
        <b-button
          class="nav-button"
          variant="success"
          v-if="isLoggedIn"
          @click="handleSignOut"
        >
          Logga ut</b-button
        >
      </div>
    </div>

    <div class="hamburger" @click="show">
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </div>
  </nav>

  <main>
    <RouterView />
  </main>

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

    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input
                v-model="modalinput"
                type="email"
                placeholder="Email adress"
                class="form-control email-input"
              />
            </div>
          </div>

          <div class="col-auto">
            <div>
              <b-button
                type="submit"
                class="btn btn-outline-light mb-4"
                @click="modal"
                >Prenumerera</b-button
              >

              <b-modal v-model="modalShow" :hide-footer="true"
                >Tack för din prenumeration!</b-modal
              >
            </div>
          </div>
        </div>
      </form>
    </section>

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
            <li><RouterLink to="/"> Hem </RouterLink></li>
            <li><RouterLink to="/about"> Om </RouterLink></li>
            <li><RouterLink to="/contact"> Kontakt </RouterLink></li>
            <li><RouterLink to="/login"> Login </RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Kundservice</h5>

          <ul class="list-unstyled mb-0">
            <li>Allmänna vilkor</li>
            <li>Kundtjänst</li>
            <li>Partners</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Inspiration</h5>

          <ul class="list-unstyled mb-0">
            <li>Hälsa</li>
            <li>Böcker</li>
            <li>Övningar</li>
            <li>Utrustning</li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  .nav {
    background-color: #fff;
    display: flex;
    padding: 0 1rem;
    justify-content: flex-start;
    align-items: center;
    min-height: 80px;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin-left: 25px;
  }

  .nav-links {
    list-style: none;
    display: flex;
    margin: 10px 15px 0;
    padding: 0;
  }

  .nav-links li {
    margin-right: 1rem;
  }

  .nav-links a {
    text-decoration: none;
    color: black;
    transition: 0.2s ease-out;
  }

  .nav-links a:hover {
    color: #3a751c;
  }

  .hamburger {
    display: none;
  }

  .nav-button {
    border-radius: 30px;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #666565;
    border-radius: 20px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .nav-user {
    display: flex;
    gap: 15px;
    align-items: flex-end;
  }

  .user-icon {
    color: #787a7d;
    height: 30px;
  }

  .user-icon path {
    font-weight: 100;
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
    margin: 1rem 1rem 3rem;
  }
  .links-nav {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
  .links a {
    color: white;
    text-decoration: none;
  }

  .links a:hover {
    color: black;
  }

  main {
    padding-top: 80px;
    position: relative;
    min-height: 100vh;
  }

  @media (max-width: 575px) {
    .links-nav {
      display: block;
      margin-left: 1rem;
    }
  }

  @media (max-width: 775px) {
    .email-input {
      width: 300px;
      margin: 0 auto;
    }
  }

  @media (max-width: 675px) {
    .nav {
      justify-content: space-between;
    }
    .hamburger {
      display: block;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .nav-menu {
      position: fixed;
      top: 80px;
      margin: 0;
      left: 0;
      height: 0px;
      overflow: hidden;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      text-align: center;
      transition: height 0.4s ease;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .nav-menu.active {
      top: 80px;
      height: 220px;
      box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
      justify-content: space-between;
    }

    .nav-links {
      margin: 1rem 0;
      display: block;
    }

    .nav-links li {
      margin: 0 0 10px;
    }

    .nav-user {
      margin-bottom: 1rem;
    }
  }
</style>
