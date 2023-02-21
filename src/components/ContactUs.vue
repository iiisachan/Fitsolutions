<template>
  <div>
    <h1>Registrera dig</h1> 
    </div>
    <div class="contact">
      <form>
        <label for="userName" class="label">Användarnamn</label>
        <input class="input" type="text" required v-model="userName"/>
        <label for="passWord" class="label">Lösenord</label>
        <input class="input" type="password" required v-model="passWord"/>
        <label for="nuvarandeVikt" class="label">Nuvarande vikt</label>
        <input class="input" type="text" required v-model="nuvarandeVikt"/>
        <label for="målVikt" class="label">Mål vikt</label>
        <input class="input" type="text" required v-model="målVikt"/>
      <div> 
        <button @click.prevent="onClick" type="button" id="button">Bli medlem</button>
      </div>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      nuvarandeVikt: '',
      målVikt: ''
    }
  },
  methods: {
    onClick() {
      this.userName= '',
      this.passWord='',
      this.nuvarandeVikt= '',
      this.målVikt=''
    }
  }
}
</script>

<style>
.contact{text-align: center;}
.input {
    padding: 20px 10px;
    width: 40%;
    border-radius: 240px;
    border: 1px solid;
   
  }
  .label {
    display: block;
    padding: 15px;
    margin-right:50rem;
    font-size:large;
    font-weight: bold;
  }
  h1{text-align:center}

  #button{  transition-duration: 0.3s;
    width: 220px;
    padding: 5px 4px;
    font-weight:bold;
    border-radius: 20px;
    margin-top: 20px;}
  </style>