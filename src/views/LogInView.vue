<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import router from '../router'

  const email = ref('')
  const password = ref('')
  const errMsg = ref()

  const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        router.push('/')
        console.log('Sucessfully signed in!')
      })
      .catch((error) => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password.'
            break
          default:
            errMsg.value = 'Email or password was incorrect'
        }
        alert(error.message)
      })
  }
</script>

<style>
  .button-container {
    max-width: 50vw;
  }

  #header-text {
    margin: 50px 0;
  }

  .Buttons {
    display: flex;
    flex-direction: columns;
    max-width: 140px;
    margin: 20px auto;
    justify-content: center;
    padding: 10px;
  }
</style>

<template>
  <h1 id="header-text">Logga in till ditt konto</h1>
  <div md="6" class="container justify-content-center">
    <b-form-group
      id="fieldset-1"
      label="Email:"
      label-for="input-1"
      valid-feedback="Tack!"
    />
    <b-form-input id="input-1" v-model="email" />
    <b-form-group
      id="fieldset-2"
      label="Lösenord:"
      label-for="input-2"
      valid-feedback="Tack!"
    />
    <b-form-input type="password" id="input-2" v-model="password" />
    <b-container class="button-container">
      <b-row>
        <b-button class="Buttons" variant="success" @click="register"
          >Logga in</b-button
        >
        <b-button class="Buttons" variant="success" to="/register"
          >Registrera</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>
