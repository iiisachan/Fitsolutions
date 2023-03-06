import { initializeApp } from './firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBIGRDaQGgWIIxfkfReanmslN9jGkqO_B0',
  authDomain: 'fitsolutions-3ac43.firebaseapp.com',
  projectId: 'fitsolutions-3ac43',
  storageBucket: 'fitsolutions-3ac43.appspot.com',
  messagingSenderId: '434221025986',
  appId: '1:434221025986:web:716ab35ae88958fdce095b',
  measurementId: 'G-KBNBRP0BG2'
}

initializeApp(firebaseConfig, firebase)
const db = getFirestore()

export default db
