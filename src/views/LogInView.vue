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
  .container {
    max-width: 50vw;
  }

  .submit-button {
    margin-top: 20px;
  }

  .register-button {
    margin-top: 20px;
    margin-left: 20px;
  }
</style>

<template>
  <h1>Sign in to an Account</h1>
  <div md="6" class="container justify-content-center">
    <b-form-group
      id="fieldset-1"
      description="Skriv in en giltig email adress."
      label="Email"
      label-for="input-1"
      valid-feedback="Tack!"
    />
    <b-form-input id="input-1" v-model="email" />
    <b-form-group
      id="fieldset-2"
      description="Ange ett lösenord"
      label="Lösenord"
      label-for="input-2"
      valid-feedback="Tack!"
    />
    <b-form-input id="input-2" v-model="password" />
    <b-button class="submit-button" variant="success" @click="register"
      >Submit</b-button
    >
    <b-button class="register-button" variant="success" to="/register"
      >Register</b-button
    >
  </div>
</template>
