<script>
  import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
  } from 'firebase/auth'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    // onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    // setDoc,
    addDoc
    // orderBy,
    // query
  } from 'firebase/firestore'
  import router from '../router'
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)
  const currentUser = getAuth().currentUser
  export default {
    data() {
      return {
        newWeight: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
        currentWeight: '',
        goalWeight: '',
        displayName: ref('')
      }
    },
    methods: {
      addNewUser() {
        addDoc(collection(db, 'users'), {
          user: this.email,
          displayName: this.displayName,
          password: this.password,
          currentWeight: this.currentWeight,
          goalWeight: this.goalWeight
        }).then(() => {
          createUserWithEmailAndPassword(
            auth,
            this.email,
            this.password,
            this.displayName
          ).then(() => {
            updateProfile(auth.currentUser, {
              displayName: this.displayName
            }).then(() => {
              console.log('Profile Updated')

              console.log(currentUser)
            })
          })

          console.log('Sucessfully registered:')
          router.push('/')
        })
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
    <b-form-group label="För och Efternamn:">
      <b-form-input type="text" required v-model="this.displayName" />
    </b-form-group>
    <b-form-group label="Email:">
      <b-form-input type="text" required v-model="this.email" />
    </b-form-group>
    <b-form-group label="Lösenord:">
      <b-form-input type="password" required v-model="this.password" />
    </b-form-group>
    <b-form-group label="Nuvarande Vikt:">
      <b-form-input type="text" v-model="this.currentWeight" />
    </b-form-group>
    <b-form-group label="Målvikt:">
      <b-form-input type="text" v-model="this.goalWeight" />
    </b-form-group>
    <b-container>
      <b-row>
        <b-button class="Buttons" variant="success" @click="addNewUser"
          >Registrera</b-button
        >
        <b-button class="Buttons" variant="success" to="/login"
          >Logga in</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>
