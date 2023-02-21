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
</script>

<style>
  .register-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>

<template>
  <div class="register-div">
    <h1>Register an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <b-button variant="success" @click="register">Submit</b-button>
    <b-button variant="success" to="/login">Logga in</b-button>
  </div>
</template>
