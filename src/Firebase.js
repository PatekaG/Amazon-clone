import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6SXGYRvE5_vlxeuDOrck5GdTV2EMAi2s",
  authDomain: "updated-clone-bd7d3.firebaseapp.com",
  projectId: "updated-clone-bd7d3",
  storageBucket: "updated-clone-bd7d3.firebasestorage.app",
  messagingSenderId: "866546144497",
  appId: "1:866546144497:web:47732e64c15ca880e30550",
  measurementId: "G-28H65CS2G5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{db, auth};
