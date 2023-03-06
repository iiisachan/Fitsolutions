<script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import db from './firebase/firebaseInit.js'
  // import router from '../router'
  // import firebase from 'firebase'
  // import { useStore } from 'vuex'
  // import { v4 as uuidv4 } from 'uuid'
  // import { collection, addDoc } from 'firebase/firestore'

  const email = ref('')
  const password = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const userName = ref('')
  const cWeight = ref('')
  const gWeight = ref('')
  // const store = useStore()

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((result) => {
        const dataBase = db.collection('users').doc(result.user.uid)

        dataBase
          .set({
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            email: email.value,
            currentWeight: cWeight.value,
            goalWeight: gWeight.value
          })
          .then(() => {
            console.log('Successfully Registered!')
          })
          .catch((error) => {
            console.log(error.code)
            alert(error.message)
          })
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })
  }
</script>

<script>
  export default {
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
    max-width: 50vw;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  h1 {
    text-align: center;
    margin: 30px 0;
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
