<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  const email = ref('')
  const password = ref('')
  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        console.log('Sucessfully Registered!')
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })
  }
</script>

<script>
  export default {
    setup() {
      const store = useStore()
      return store.state.currentWeight
    },
    data() {
      return {
        newWeight: 0
      }
    },
    computed: {
      cWeight: {
        get() {
          return this.$store.state.currentWeight
        },
        set(weight) {
          this.$store.commit('addNewWeight', weight)
        }
      },
      nWeight: {
        get() {
          return this.$store.state.newWeight
        },
        set(weight) {
          this.$store.commit('addNewWeight', weight)
        }
      },
      gWeight: {
        get() {
          return this.$store.state.goalWeight
        },
        set(weight) {
          this.$store.commit('addNewWeight', weight)
        }
      }
    }
  }
</script>

<style>
  .register-div {
    max-height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .input {
    padding: 20px 10px;
    width: 100%;
    border-radius: 100px;
    border: 2px solid;
  }
  .label {
    padding: 10px 5px;
    margin-right: 50rem;
    margin-top: 2px;
    font-size: large;
    font-weight: bold;
  }
  h1 {
    text-align: center;
  }
  .Buttons {
    display: flex;
    flex-direction: columns;
    max-width: 140px;
    margin: 20px auto;
    justify-content: center;
    padding: 10px;
  }
  .form {
    width: 40vw;
    margin: 10px auto;
  }
  @media (min-width: 375px) {
    .form {
      width: 90%;
      max-width: 500px;
    }
  }
  @media (min-width: 768px) {
    .form {
      width: 80%;
      max-width: 700px;
    }
  }
  @media (min-width: 980px) {
    .form {
      width: 60%;
    }
  }
</style>

<template>
  <div class="register-div container">
    <b-container>
      <b-row>
        <form class="form">
          <h1>Registrera dig</h1>

          <label for="email" class="label">Email</label>
          <input class="input" type="text" required v-model="email" />
          <label for="password" class="label">Lösenord</label>
          <input class="input" type="password" required v-model="password" />
          <label for="nuvarandeVikt" class="label">Nuvarande vikt</label>
          <input class="input" type="text" v-model="cWeight" />
          <label for="målVikt" class="label">Mål vikt</label>
          <input class="input" type="text" v-model="gWeight" />
          <b-button class="Buttons" variant="success" @click="register"
            >Registrera</b-button
          >
          <b-button class="Buttons" variant="success" to="/login"
            >Logga in</b-button
          >
        </form>
      </b-row>
    </b-container>
  </div>
</template>
