import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import "firebase/compat/firestore";
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCGmadFXOfvmePax_ob_W36Vl5jDXClIAk",
    authDomain: "flitter-5c38f.firebaseapp.com",
    projectId: "flitter-5c38f",
    storageBucket: "flitter-5c38f.appspot.com",
    messagingSenderId: "699310009772",
    appId: "1:699310009772:web:b78ba9fb5d936ab7dc9e09",
    measurementId: "G-ZDG2R17JJ0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;