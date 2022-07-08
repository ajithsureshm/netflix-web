
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOmG4nbRVCmbWOM62P96ER9H8L_lJkWWA",
    authDomain: "netfllix-ed8ac.firebaseapp.com",
    projectId: "netfllix-ed8ac",
    storageBucket: "netfllix-ed8ac.appspot.com",
    messagingSenderId: "515890920073",
    appId: "1:515890920073:web:c2705f19814ac8f0ec6458",
    measurementId: "G-SGZSBGDYT4"
  };

  
  export default firebase.initializeApp(firebaseConfig)
