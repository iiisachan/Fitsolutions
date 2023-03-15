<script>
  import LogView from './LogView.vue'

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
  import { mapState } from 'vuex'

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
    components: { LogView },

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
        cWeight: null,
        gWeight: null,
        email: ''
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
            id: doc.id,
            gWeight: doc.data().goalWeight,
            cWeight: doc.data().currentWeight,
            displayName: doc.data().displayName,
            email: this.currentUser.email
          }
        })
        console.log(this.users)
        this.displayName = auth.currentUser.displayName
        this.cWeight = auth.currentUser.currentWeight
        this.gWeight = auth.currentUser.goalWeight
        console.log(auth.currentUser)
      })
    },

    computed: {
      ...mapState(['user']),
      currentWeight() {
        return this.user ? this.user.cWeight : null
      },
      goalWeight() {
        return this.user ? this.user.gWeight : null
      }
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
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .weight-container {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .profile-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 150px;
    gap: 20px;
  }
  .h2-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 36px;
  }
  .profile-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

  @media (max-width: 430px) {
    .profile-container {
      flex-direction: column;
    }

    .arrow-svg {
      display: none;
    }

    .h2-text {
      font-size: 24px;
    }

    .profile-text {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
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
  <b-container>
    <div class="profile-container">
      <img class="profile-picture" src="assets/profile-picture.jpg" alt="" />
      <div class="profile-text-container">
        <h2 class="h2-text">{{ displayName }}</h2>
        <div class="profile-text">
          <div>Nuvarande Vikt: {{ this.user.currentWeight }}</div>
          <div class="arrow-svg">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
          <div>Mål Vikt: {{ this.user.goalWeight }}</div>
        </div>
      </div>
    </div>
  </b-container>
  <LogView />
</template>
