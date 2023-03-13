<script>
  import axios from 'axios'
  import { getAuth } from 'firebase/auth'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    // setDoc,
    // addDoc,
    // orderBy,
    query
  } from 'firebase/firestore'
  import { ref } from 'vue'

  const firebaseConfig = {
    apiKey: 'AIzaSyBIGRDaQGgWIIxfkfReanmslN9jGkqO_B0',
    authDomain: 'fitsolutions-3ac43.firebaseapp.com',
    projectId: 'fitsolutions-3ac43',
    storageBucket: 'fitsolutions-3ac43.appspot.com',
    messagingSenderId: '434221025986',
    appId: '1:434221025986:web:716ab35ae88958fdce095b',
    measurementId: 'G-KBNBRP0BG2'
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)

  export default {
    components: {},

    data() {
      return {
        quotes: [],
        users: ref([]),
        isLoggedIn: false,
        name: '',
        profilePicture: '',
        currentUserName: '',
        displayName: null,
        currentUser: null,
        cWeight: '',
        gWeight: ''
      }
    },

    methods: {},
    mounted() {
      axios
        .get('https://type.fit/api/quotes')
        .then((response) => {
          this.quotes = response.data
          console.log(this.quotes)
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
    },
    created() {
      const latestQuery = query(collection(db, 'users'))
      onSnapshot(latestQuery, (snapshot) => {
        this.currentUser = auth.currentUser
        this.users = snapshot.docs.map((doc) => {
          return {
            userName: doc.data().userName,
            gWeight: doc.data().goalWeight,
            cWeight: doc.data().currentWeight,
            displayName: doc.data().displayName,
            name: doc.data().name
          }
        })
        console.log(this.users)
        this.displayName = auth.currentUser.displayName
        const currentUser = this.users
        currentUser.find((user) => user.userName === this.currentUser.email)
        this.cWeight = currentUser.cWeight
        this.gWeight = currentUser.gWeight
      })
    }
  }
</script>

<style>
  .profile-picture {
    border-radius: 50%;
    border: 1px solid black;
    max-width: 150px;
    max-height: 150px;
  }
  /* .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 50px 0;
  } */
  .profile-name {
    justify-content: start;
  }
  .weight-container {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .quote-container {
    background-color: #f3f4f5;
    margin-top: 20px;
    border-radius: 25px;
    padding: 15px;
    text-align: center;
  }
  .quote-gen {
    font-style: italic;
  }
</style>

<template>
  <b-container>
    <b-row class="quote-container">
      <b-col class="quote-gen" v-if="quotes.length !== 0">
        {{ quotes[Math.floor(Math.random() * quotes.length - 1)].text }}
      </b-col>
    </b-row>
  </b-container>
  <b-container class="profile-container">
    <b-col
      ><img class="profile-picture" src="assets/profile-picture.jpg" alt=""
    /></b-col>
    <b-col class="profile-name h1">{{ displayName }}</b-col>
  </b-container>
  <b-container>
    <b-row>
      <b-col> Nuvarande Vikt: {{ this.cWeight }} </b-col>
      <b-col class="text-center"
        ><font-awesome-icon icon="fa-solid fa-arrow-right"
      /></b-col>
      <b-col class="text-start">Mål vikt: {{ this.gWeight }}</b-col>
    </b-row>
  </b-container>
</template>
