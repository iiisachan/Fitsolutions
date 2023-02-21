<script setup>
  import { ref } from 'vue'
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

  const signInWithGoogle = () => {}
</script>

<template>
  <h1>Register an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>
