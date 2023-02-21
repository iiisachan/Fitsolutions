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

  const signInWithGoogle = () => {}
</script>

<template>
  <h1>Sign in to an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>
