<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  const email = ref('')
  const password = ref('')
  const register = (cWeight, gWeight) => {
    console.log(cWeight, gWeight + ' Du har loggat din vikt!')
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
          this.$store.commit('addNewWeight2', weight)
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
</style>

<template>
  <h1>Registrera dig</h1>
  <div class="register-div container">
    <b-form-group label="Email:">
      <b-form-input type="text" required v-model="email" />
    </b-form-group>
    <b-form-group label="Lösenord:">
      <b-form-input type="password" required v-model="password" />
    </b-form-group>
    <b-form-group label="Nuvarande Vikt:">
      <b-form-input type="text" v-model="cWeight" />
    </b-form-group>
    <b-form-group label="Målvikt:">
      <b-form-input type="text" v-model="gWeight" />
    </b-form-group>
    <b-container>
      <b-row>
        <b-button
          class="Buttons"
          variant="success"
          @click="register(cWeight, gWeight)"
          >Registrera</b-button
        >
        <b-button class="Buttons" variant="success" to="/login"
          >Logga in</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>
