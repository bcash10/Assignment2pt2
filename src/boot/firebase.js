import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH6iJGCRZfW4ZJKCAARhjv9wDUAhcOR5g",
  authDomain: "qwitter2-79476.firebaseapp.com",
  projectId: "qwitter2-79476",
  storageBucket: "qwitter2-79476.appspot.com",
  messagingSenderId: "831477166397",
  appId: "1:831477166397:web:6c55f8de4d844a1802d554"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
